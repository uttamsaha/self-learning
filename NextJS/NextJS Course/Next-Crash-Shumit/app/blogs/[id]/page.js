import { notFound } from 'next/navigation';
import React from 'react'

const BlogPost = ({params}) => {
    const {id} = params;

    if(id === '3'){
        notFound();
    }
  return (
    <div className='mt-4'> The blog id is: {id}</div>
  )
}

export default BlogPost;