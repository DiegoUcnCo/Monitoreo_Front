import React from 'react'
import '../../styles/css/grafanaStyles.css'

const page = () => {
  return (
    <div className="main">
      <div className="iframeContainer">
        <iframe src="http://localhost:8000/d-solo/bcb70aa3-8ed8-4301-be23-4c85e3125e8a/temperature-sensor?orgId=1&refresh=5s&from=1694597516082&to=1694619116082&panelId=1"
          width="80%"
          height="500"
        ></iframe>
      </div>
      <div className="iframeContainer">
        <iframe src="http://localhost:8000/d-solo/bcb70aa3-8ed8-4301-be23-4c85e3125e8a/temperature-sensor?orgId=1&refresh=5s&from=1694617355564&to=1694638955564&panelId=4"
          width="80%"
          height="500"
        ></iframe>
      </div>
    </div>
  )
}

export default page
