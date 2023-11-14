import React, { Component } from 'react'
export default class About extends Component {

  render() {
    let resumeData = this.props.resumeData

    return (
      <section id="about" className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
         <div className="column" style={{flex: 3, textAlign: 'center'}}>
            <img className="profile-pic"  src="images/profilepic.jpg" alt="" style={{height: '40%', width: '40%'}} />
         </div>


         <div className="column" style={{flex: 7}}>
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
         </div>
      </section>
    );
  }
}