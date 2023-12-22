import './Card.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({item , handleClick}) =>{

    const {title,price,image,description,rating,id} = item

    const [open, setOpen] = useState(false);
    return(
       
        <div className='card'>
            <Link to={`/about/${id}`}><img src={image} alt="" height={'200px'} width={'200px'}/></Link>
            <h4>{title}</h4>
            <div>Price: ${price}</div>
            <div>Rating : {rating.rate}⭐</div>
            <div>
                <button onClick={()=>handleClick(item)}>Add Cart</button>
                <button onClick={()=>setOpen(!open)}>Read more...</button>
            </div>
            {open && (
                <div>
                    <p style={{textAlign:'justify'}}>{description}</p>
                    <button onClick={()=>setOpen(!open)}>close❌</button>
                </div>
            )}
        </div>
    )
}
export default Card