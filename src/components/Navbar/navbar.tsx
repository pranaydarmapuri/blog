'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import styles from './navbar.module.css'
import Notify from './Notify/Notify'
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css';

interface PopupProps {
    trigger: React.ReactElement; 
    position: 'top' | 'bottom' | 'left' | 'right'; 
    children: React.ReactNode; 
}

const clicks=[`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg>`]
const Navbar = () => {
  const New=()=>{
     window.location.href=''
  }
  const handleit=()=>{
    window.location.href=''
  }
  return (
    <div className={styles.container}>
        <div className={styles.first}>
            <Link href='/'>
                <Image src={logo} alt='image'/>
            </Link>
            <h4>Draft in page</h4>
            
            </div>  
        <div className={styles.second}>
        <button className={styles.button} onClick={New} >Publish</button> 
       <Popup trigger={<svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>}>
<ul>
            <div>Share draft link</div>
            <div>Share to twitter</div>
            <div>Change featured image</div>
            <div>Change display title/subtitle</div>
            <div>Change topics</div>
            <div>See revision history</div>
            <div>More settings</div>
            <div>Hints and keyboard shortcuts</div>
            <div>More help</div>
          </ul>
          
</Popup>

<Popup trigger={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
        </svg>} position={'bottom center'}>
          <div>
            No notifications yet</div></Popup>     
         
          <Popup trigger={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>} position={'bottom center'}>
          <div>
            <ul>
              <div>Write</div>
              <div>Profile</div>
              <div>Library</div>
              <div>Stories</div>
              <div>stats</div>
              <div>settings</div>
              <div>Become a member</div>
            </ul>
            </div>
            </Popup>     
          </div>
          </div> 
     
    
  )
}

export default Navbar