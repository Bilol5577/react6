import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className=''>
        <nav className='nav1'>
            <img src="./src/assets/rasm1.png" alt="" />
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Fack</li>
                <li>Contact</li>
            </ul>
        </nav>
        <nav className="nav2">
            <p className="p1">Food app</p>
            <p className="p2">Why stay hungry when  <br />you can order form Bella Onojie</p>
            <p className="p3">Download the bella onoje’s food app now on</p>
            <div className="btns">
                <button>Playstore</button>
                <button>App storer</button>
            </div>
        </nav>
    </div>
  )
}

export default Header