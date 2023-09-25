import {Link} from 'react-router-dom';
import './button.css';

function Menu(){
    return(
        <div>
            <Link to ="/home"><button className='button blue btn-1' >Home</button></Link>
            <Link to ="/chard"><button className='button yellow btn-2' >Character Details</button></Link>
            <Link to ="/Team"><button className='button blue btn-1' >Team</button></Link>
            <Link to ="/posts"><button className='button yellow btn-2' >Posts</button></Link>
            <Link to ="/char"><button className='button blue btn-1' >Characters</button></Link>
        </div>
    )
    
}

export default Menu;
