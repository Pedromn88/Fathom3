import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import App from './_app'
import { Principal } from './layout/principal'
import { Header } from './component/header'
import { Footer } from './component/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

        <Header/>
      <main className={styles.main}>
         <Principal />
      </main>
      <Footer />
    </>
  )
}
