import Head from 'next/head'
import { Toolbar } from '../components/Toolbar'

import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className='page-container'>
    <Toolbar/>
      <div className={styles.main}>
        <h1>Next js App </h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ipsam alias voluptatibus, quia facilis animi facere nostrum mollitia fuga nemo!</h3>
      </div>
    </div>
  )
}
