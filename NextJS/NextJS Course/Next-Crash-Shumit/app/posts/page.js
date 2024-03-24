import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';
import React from 'react'

const Posts = async() => {
    const posts = await getAllPosts();
  return (
    <div>
        <h1>All posts</h1>

        <ul className="mt-4">
            {posts.map(post => <li key={post.id} className='mb-2'><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)}
        </ul>
    </div>
  )
}

export default Posts;