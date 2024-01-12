export const getSinglePost = async(id) => {
    const singlePost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return singlePost.json();
}