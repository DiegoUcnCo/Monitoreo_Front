import React from 'react'
import '../../styles/css/grafanaStyles.css'

const HidroponiaContainer = () => {
  return (
    <div className="main">
      <div className="iframeContainer">
        <iframe src="http://localhost:8000/d-solo/bcb70aa3-8ed8-4301-be23-4c85e3125e8a/temperature-sensor?orgId=1&refresh=5s&from=1694528223463&to=1694549823463&panelId=1"
          width="80%"
          height="500"
        ></iframe>
      </div>
    </div>
  )
}

export default HidroponiaContainer
