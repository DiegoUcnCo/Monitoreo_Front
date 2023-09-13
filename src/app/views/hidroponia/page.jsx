import React from 'react'
import '../../styles/css/grafanaStyles.css'

const HidroponiaContainer = () => {
  return (
    <div className="main">
      <div className="iframeContainer">
        <iframe src="http://localhost:8000/d-solo/bcb70aa3-8ed8-4301-be23-4c85e3125e8a/temperature-sensor?orgId=1&refresh=5s&from=1694597695156&to=1694619295156&panelId=2"
          width="80%"
          height="500"
        ></iframe>
      </div>
      <div className="iframeContainer">
        <iframe src="http://localhost:8000/d-solo/bcb70aa3-8ed8-4301-be23-4c85e3125e8a/temperature-sensor?orgId=1&refresh=5s&from=1694617234746&to=1694638834746&panelId=3"
          width="80%"
          height="500"
        ></iframe>
      </div>
    </div>
  )
}

export default HidroponiaContainer
