import React ,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { styles } from '../styles';
import menue  from '../assets/menu-150.png';
import logo from '../assets/logo2.png';
import close from '../assets/close-100.png';
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { AiOutlineCloseSquare } from "react-icons/ai";

const Navbar = () => {
  const [active,setActive]=useState("");
  const [toggle,settoggle] =useState(false);
  return (
    <nav
    className={
      `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20  bg-primary  
      `
    } 
    >
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      <Link to="/"
      style={{height:"90px", width:"80px"}}
      className='flex items-center gap-2'
      onClick={() => { setActive("");
      window.scrollTo(0,0);
    
    }
    }

      >
      {/* <SiStandardresume style={{transform: "scaleX(-1)" }}
      className='w-9 h-9 object-contain'
      /> */}
      <img src={logo} alt="logo" 
      className=' object-contain rounded-full '
      style={{height:"90px", width:"80px"}}
      />
      <p className='text-white text-[18px] font-bold cursor-pointer flex gap-1.5 justify-center items-center' >
         Rahma  <span className='sm:block hidden' > Samy </span>
      
      
      </p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
        <li
        className={`${active === "About" ? 
        "text-white" : "text-secondary"} 
        hover:text-[18px] font-meduim cursor-pointer  text-pink-600
        `
      }
      onClick={() => { setActive("About")}}
        > <a href='#about'> About</a>
        
        </li>
        <li
         className={`${active === "Work" ? 
         "text-white" : "text-secondary"} 
         hover:text-[18px] font-meduim cursor-pointer text-pink-600
         `
        
       }
       onClick={() => { setActive("Work")}}
        > <a href='#work'> Work</a> </li>
        <li
         className={`${active === "Contact" ? 
         "text-white" : "text-secondary"} 
         hover:text-[18px] font-meduim cursor-pointer  text-pink-600
         `
        
        }
       onClick={() => { setActive("Contact")}}
        > <a href='#contact'> Contact</a></li>
      </ul>
      {/* div for small devices */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
       <img src={toggle? close:menue }
       alt='img-smallldevice'
       className='w-[28px] h-[28px] object-contain cursor-pointer'
       onClick={() => settoggle(!toggle)
      }
       />
      <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gradient-to-r from-pink-500 to-gray-400 hover:from-pink-500 hover:to-purple-800	
       absolute top-20 right-0 mx-4 my-2
       min-w-[150px] z-10 rounded-xl`}>
       <ul className='list-none flex sm:flex justify-end items-start flex-col gap-6'>
        <li
        className={`${active === "About" ? 
        "text-white" : "text-secondary"} 
        hover:text-[18px] font-meduim cursor-pointer  text-pink-600
        `
      }
      onClick={() => {
        settoggle(!toggle);
        setActive("About")}}
        > <a href='#about' className='text-black'> About</a>
        
        </li>
        <li
         className={`${active === "Work" ? 
         "text-white" : "text-secondary"} 
         hover:text-[18px] font-meduim cursor-pointer text-pink-600
         `
        
       }
       onClick={() => {
        settoggle(!toggle);
        setActive("Work")}}
        > <a href='#work' className='text-black'> Work</a> </li>
        <li
         className={`${active === "Contact" ? 
         "text-white" : "text-secondary"} 
         hover:text-[18px] font-meduim cursor-pointer  text-pink-600
         `
        
        }
       onClick={() => { 
        settoggle(!toggle);
        setActive("Contact")}}
        > <a href='#contact' className='text-black'> Contact</a></li>
      </ul>
      </div>
      </div>
    </div>
    </nav>
  )
}

export default Navbar