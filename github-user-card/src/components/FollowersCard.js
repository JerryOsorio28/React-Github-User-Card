import React from "react";
// import { Card, Icon, Image } from 'semantic-ui-react';


function FollowersCard (props) {
    // console.log(props.children)
    return (
        <li>
        {props.children}
        </li>
    );
  };

  export default FollowersCard;

//  <Card>
//     <Image src={props.props.avatar_url} wrapped ui={false} />
//     <Card.Content>
//         <Card.Header>{props.props.name}</Card.Header>
//         <Card.Meta>
//             <span className='date'>Created GitHub account: {props.props.name}</span>
//         </Card.Meta>
//         <Card.Description>
//             Hi! I am Jerry, I became 28 years old 2 days ago and I am a Lambda School Full Stack Web Developer student.
//         </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//         <Icon name='user' />
//         Followers: {props.props.followers}
//         <Icon name='user' />
//         Following: {props.props.following}
//     </Card.Content>
// </Card>


  