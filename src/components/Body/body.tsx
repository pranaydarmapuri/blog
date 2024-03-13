"use client"
import React from 'react'
import Blog from '../Blog/Blog'
import styles from './body.module.css'

const Body = () => {
  return (
    <div className={styles.block}>
    <Blog/>
    </div>
  )
}


export default Body
