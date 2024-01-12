import Link from 'next/link';
import React from 'react'

const page = () => {
    const blogs = [
        {
            id: 1,
            title: "blog 1",
            description: "blog description 1"
        },
        {
            id: 2,
            title: "Blog 2",
            description: "blog description 2"
        }
    ]
  return (
    <div>
        <div>Blogs</div>
        <br />
        <ul>
            {
                blogs.map((blog, index) => <li className='mb-4' key={index}><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li>)
            }
        </ul>
    </div>
  )
}

export default page;