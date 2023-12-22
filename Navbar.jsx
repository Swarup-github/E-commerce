import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = ({setSearch , size , data, setData}) =>{

    const filterResult1 = (catItem)=>{
        const result = data.filter((curData)=>{
            return curData.category===catItem
        })
        console.log(result);
        setData(result)
    }

    const filterResult2 = (catItem)=>{
        const result = data.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
    }

    const filterResult3 = (catItem)=>{
        const result = data.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
    }

    const filterResult4 = (catItem)=>{
        const result = data.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
    }


    return(
        <div>
            <nav className="navbar">
            <article className="navart1">
                <div className="img"><Link style={{color:'white',textDecoration:'none'}} to='/'><img height={'50px'} width={'150%'} src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png" /></Link></div>
                <div><input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search your Products" /></div>
                <div><Link style={{color:'white',textDecoration:'none'}} to='/cart'><img height={'50px'}src="https://www.shutterstock.com/shutterstock/photos/1690453492/display_1500/stock-vector-shopping-cart-vector-icon-flat-design-isolated-on-white-background-1690453492.jpg" alt="" /> <sup>{size}</sup></Link></div>
            </article>
            
            <article className="navart2">
                <button onClick={()=>filterResult1(`men's clothing`)}>Men</button>
                <button onClick={()=>filterResult2(`women's clothing`)}>Women</button>
                <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
                <button onClick={()=>filterResult4(`jewelery`)}>Jewelery</button>
            </article>
            </nav>
        </div>
    )
}
export default Navbar