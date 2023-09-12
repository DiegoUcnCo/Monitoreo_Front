import React from 'react'
import Link from 'next/link'

const NavbarComponent = () => {
  
  return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link href="/" class="nav-item nav-link">Home</Link>
        <Link href="/views/hidroponia" class="nav-item nav-link">Hidroponia</Link>
        <Link href="/views/temperature" class="nav-item nav-link">Temperature Sensor</Link>
      </div>
    </div>
  </nav>
  )
}

export default NavbarComponent
