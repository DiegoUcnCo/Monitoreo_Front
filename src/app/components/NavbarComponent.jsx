import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HomeImage from '../styles/img/home.png'
import WaterImage from '../styles/img/water.png'
import TemperaturaImage from '../styles/img/temperatura.png'

const NavbarComponent = () => {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container">
        <Link href="/" className="navbar-brand">  
        <Image
          src="/favicon.ico"
          width={100}
          height={100}
          alt="Picture of the author"
          className="logo"
        />    
      </Link>
        <div className="navbar-nav ml-auto">
          <Link href="/" className="nav-item nav-link">
            <Image
              src={HomeImage}
              width={50}
              height={50}
              alt="Home"
            />
          </Link>
          <Link href="/views/hidroponia" className="nav-item nav-link">
          <Image
              src={WaterImage}
              width={50}
              height={50}
              alt="AguaData"
            />
          </Link>
          <Link href="/views/temperature" className="nav-item nav-link">
          <Image
              src={TemperaturaImage}
              width={50}
              height={50}
              alt="Temperatura"
            />
          </Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavbarComponent
