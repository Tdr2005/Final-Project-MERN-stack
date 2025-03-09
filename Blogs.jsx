import React from 'react'
import Img1 from "../../assets/blogs/blog5.webp"
import Img2 from "../../assets/blogs/blog6.webp"
import Img3 from "../../assets/blogs/blog7.webp"
import BlogCard from './BlogCard'

const BlogData = [
    {
        img: Img1,
        title: "How to Choose the Right Web Hosting Service for Your Business",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, pariatur earum dolorem nulla quis id.",
        date: "January 16,2023",
        writer: "Rathod Tarun"
    },
    {
        img: Img2,
        title: "How to Choose the Right Web Hosting Service for Your Business",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, pariatur earum dolorem nulla quis id.",
        date: "September 10,2022",
        writer: "SSP"
    },
    {
        img: Img3,
        title: "How to Choose the Right Web Hosting Service for Your Business",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, pariatur earum dolorem nulla quis id.",
        date: "August 15,2005",
        writer: "Modi ji"
    }
]

const Blogs = () => {
  return (
    <div className='pl-45'>
      <div className="container py-8">
        <h1 className='mb-8 border-l-8 pl-2 text-center text-3xl font-bold'>Our Latest Blogs</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            {BlogData.map((blog) => (
                <BlogCard key={blog.title} img={blog.img} title={blog.title} description={blog.description} date={blog.date} writer={blog.writer}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
