import React from "react";
// import { Card, Icon, Image } from 'semantic-ui-react';


function GitHubCard (props) {
    // console.log(props)
    return (
        <div className='cardContainer'>
            <img src={props.props.avatar_url} alt=''/>
                <div id='title'>
                    <img src='https://png2.cleanpng.com/sh/d6b2ab56f657765cc4391f2c096c4602/L0KzQYm3VcE1N6J6j5H0aYP2gLBuTfdqfJl6ep91b3fyPcPskP90caV0ius2Y3BwgMb7hgIucZR0huU2NXHpcYSAVvM2OZRmUaY3M0i6QYe9VcMyPWM7S6YCNkK7Q4S8TwBvbz==/kisspng-github-logo-repository-computer-icons-5afa376c51ca94.387166531526347628335.png'/>
                    <h1>{props.props.name}</h1>
                </div>
                <p>
                    Hi! I am Jerry, I became 28 years old 2 days ago and I am a Lambda School Full Stack Web Developer student.
                </p>
                <span className='date'>Created GitHub account: {props.props.created_at}</span>
                <h5>
                    <div>Followers: {props.props.followers}</div>
                    <div>Following: {props.props.following}</div>  
                </h5>
        </div>
    );
  };

  export default GitHubCard;


  