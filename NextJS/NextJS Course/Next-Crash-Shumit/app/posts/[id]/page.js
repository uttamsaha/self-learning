import getPostComments from '@/lib/getPostComments';
import { getSinglePost } from '@/lib/getSinglePost';
import React, { Suspense } from 'react'
import Comments from '../components/Comments';

//dynamic metaData 
export const generateMetadata = async ({params}) => {
    const {id} = params;
    const singlePost = await  getSinglePost(id);
    return{
        title: singlePost.title,
        description: singlePost.body
    }
}

async function SinglePost ({params}) {
    const {id} = params;

    //progressive rendering
    //ekhane await use kora hoinai karon single post r post er comments related progressive rendering korai singlepost r comments 
    //independent vabe rending hocce. parallel vabe. 
    
    const singlePostPromise =   getSinglePost(id);
    const commentsPromise = getPostComments(id);

    const post = await singlePostPromise;


  return (
    <div className='w-1/2 p-4 mx-auto shadow-md bg-white mt-4 rounded'>
        <h1 className='text-2xl font-[600] text-blue-500'>{post.title}</h1>
        <p className='text-[14px]  text-gray-600'>{post.body}</p>

        <hr />
        <Suspense fallback="<h1>Loading comments.</h1>">
          <Comments promise = {commentsPromise}/>
        </Suspense>
    </div>
  )
}

export default SinglePost;