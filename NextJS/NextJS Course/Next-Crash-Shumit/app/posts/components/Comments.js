import React from 'react'

const Comments = async({promise}) => {
    const comments = await promise;
  return (
    <div><div className="mt-6 text-black">
    <h1 className='text-xl font-bold'>Comments</h1>
    <ul>
        {comments.map(comment => <li className='mb-4 shadow-md bg-white p-2' key={comment.id}>{comment.body}</li>)}
    </ul>
</div></div>
  )
}

export default Comments;