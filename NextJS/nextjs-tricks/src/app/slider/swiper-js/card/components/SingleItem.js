
const SingleItem = ({item}) => {
    const {name, price, exp} = item;
  return (

<div className='w-[300px] p-4 rounded-md bg-white text-black'>
        <p>{name}</p>
        <p>Price: {price}</p>
        <p>Exp: {exp}</p>
    </div>
    
  )
}

export default SingleItem;