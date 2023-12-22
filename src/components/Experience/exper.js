import React from 'react'
import './exper.css';

const Experience = () => {
  return (
    <section id='Education'>
        <span className='EducationTitle'>Education</span>

        <div className='EducationBars'>
        <div className='EducationBar'>
            <div className='EducationBarText'>
                <h2>CDAC (2023)</h2>
                <p>Post-Graduation Diploma in Advanced Computing- 71.00%</p>
            </div>
            </div>

            <div className='EducationBar'>
            <div className='EducationBarText'>
                <h2>B.Tech (2022)</h2>
                <p>Bachelor of Technology in Foodtechnology- 79.00%</p>
            </div>
            </div>

            <div className='EducationBar'>
            <div className='EducationBarText'>
                <h2>HSC (2017)</h2>
                <p>Higher Secondary School Certificate- 66.00%</p>
            </div>
            </div>

            <div className='EducationBar'>
            <div className='EducationBarText'>
                <h2>SSC (2015)</h2>
                <p>Secondary School Certificat- 86.00%</p>
            </div>
            </div>
            
        </div>
      
    </section>
  )
}

export default Experience