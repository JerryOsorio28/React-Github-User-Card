import React from "react";
// import { Card, Icon, Image } from 'semantic-ui-react';


function GitHubCard (props) {
    // console.log(props)
    return (
        <div className='cardContainer'>
            <img src={props.props.avatar_url} alt=''/>
                <div id='title'>
                    <img src='http://pngimg.com/uploads/github/github_PNG58.png'/>
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


  