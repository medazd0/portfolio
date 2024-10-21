import React from 'react'
import CvMed from '../assests/MEDCV.pdf' ;

export default function CvComp() {


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CvMed; 
    link.download = 'CVMEDAZ.pdf'; 
    link.click();
  };

  return (
    <div className="CvMed">
      <h1>Click below to Download MY CV</h1>
      <button onClick={handleDownload} className="download-btn">
        CV
      </button>
    </div>
  )
}
