import React, { Component } from 'react'


export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData

    return (
      <section id="resume" className="container" style={{display: 'flex', margin: '20px'}}>
        <div className="column" style={{flex: 4}}>

          <div className="row">
            <div className="row education">
              <div style={{marginBottom: '50px'}}>
                <h1 className=""><span>Education</span></h1>
              </div>

              <div className="twelve columns main-col">
                {
                  resumeData.education && resumeData.education.map((item)=>{
                    return(
                      <div className="row item">
                        <div className="twelve columns">
                            <h3>{item.UniversityName}</h3>
                            <p className="info">{item.specialization}</p>
                            <p style={{marginTop: '-20px'}}>
                              <b>Areas of Focus: </b>{item.areaOfFocus}{"\t\t\t"}
                              <span>&bull;</span> <em className="date">{item.dateStarted} - {item.dateLeaving}</em>
                            </p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

          <div className="row">
            <div className="row skill">
              <div style={{marginBottom: '50px', marginTop: '50px'}}>
                <h1><span>Skills</span></h1>
              </div>

              <div className="nine columns main-col">
                <div className="bars">
                  <ul className="skills">
                    {
                      resumeData.skills && resumeData.skills.map((item) => {
                        return(
                          <li>
                            <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                            </span><em>{item.skillname}</em>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="column" style={{flex: '5'}}>
          <div className="row work">
            <div style={{marginBottom: '50px'}}>
              <h1><span>Work Experience</span></h1>
            </div>

            <div className="nine columns main-col">
              {resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                      <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>

                          {item.specializations.map((specialization) => {
                            return(
                              <div>
                                <p className="info">
                                  {specialization.specialization}
                                  <span>&bull;</span> <em className="date">{specialization.dateStarted} {specialization.dateLeaving}</em>
                                </p>
                                <p>{specialization.Achievements}</p>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  )
                })
              }
            </div> 
          </div>
        </div>

      </section>
    );
  }
}