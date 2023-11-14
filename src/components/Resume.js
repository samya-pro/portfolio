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
                <div className="">
                  <div style={{display: 'flex', justifyContent: "space-between", width: "150%"}}>
                    <ul>
                      <li>C/C++ Programming</li>
                      <li>Java</li>
                      <li>Python</li>
                      <li>JavaScript</li>
                      <li>HTML/CSS</li>
                      <li>React/Node.js</li>
                      <li>PHP</li>
                      <li>Django</li>
                      {/* Add more list items as needed */}
                    </ul>

                    <ul>
                      <li>Databases</li>
                      <li>SQL/PostreSQL</li>
                      <li>NoSQL</li>
                      <li>MongoDB</li>
                      <li>Spark</li>
                      <li>Cloud Computing</li>
                      <li>AWS/GCP/Azure</li>
                      <li>Terraform/Terragrunt</li>
                      {/* Add more list items as needed */}
                    </ul>

                    <ul>
                      <li>Machine Learning/AI</li>
                      <li>Tensorflow/Scikit-Learn/Keras</li>
                      <li>DevOps</li>
                      <li>Version Control</li>
                      <li>Git/GitHub</li>
                      <li>CI/CD Pipelines</li>
                      <li>Data Analytics</li>
                      <li>Agile Methodology</li>
                      {/* Add more list items as needed */}
                    </ul>
                  </div>
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
                                  <span>&bull;</span> <em className="date">{specialization.dateStarted} - {specialization.dateLeaving}</em>
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