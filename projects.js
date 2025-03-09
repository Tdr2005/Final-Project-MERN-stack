import express from 'express';
import Project from '../models/Project.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Middleware to check authentication
const authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

// Create Project
router.post('/', authenticate, async (req, res) => {
  try {
    const project = new Project({ ...req.body, owner: req.user.id });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Projects
router.get('/', async (req, res) => {
  const projects = await Project.find().populate('owner', 'name email');
  res.json(projects);
});

export default router;
