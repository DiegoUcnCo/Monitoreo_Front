import React from 'react'
import Link from 'next/link'

const NavbarComponent = () => {
  
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link href="/" className="nav-item nav-link">Home</Link>
        <Link href="/views/hidroponia" className="nav-item nav-link">Hidroponia</Link>
        <Link href="/views/temperature" className="nav-item nav-link">Temperature Sensor</Link>
      </div>
    </div>
  </nav>
  )
}

export default NavbarComponent
