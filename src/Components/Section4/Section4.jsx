import React from 'react'

const Header = () => {
  return (
    <div >
        <nav className='w-[1440px] h-[516px]' style={{ backgroundImage:`url('./src/assets/rasm10.png')` }}>
            <br /><br /><br /><br /><br />
            <p className='text-[rgba(246,246,246,1)] font-bold text-[58px] leading-[80px] tracking-[0.2px] text-center'>Download the app now.</p>
            <p className="p3">Available on your favorite store. Start your premium experience now</p>
            <div className="btns">
                <button>Playstore</button>
                <button>App storer</button>
            </div>
        </nav>
        <nav className='w-[1210px] h-[133px] mt-[40px] ml-[115px]'>
            <ul  className='w-[1210px] h-[133px] flex justify-between items-center'>
                <li><img src="./src/assets/rasm1.png" alt="" /></li>
                <li><img src="./src/assets/rasm9.png" alt="" /></li>
                <li className='text-gray-500'>Copywright 2020 Bella Onojie.com</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header