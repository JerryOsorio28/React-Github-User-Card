import React from "react";
// import { Card, Icon, Image } from 'semantic-ui-react';


function FollowingCard (props) {
    console.log(props)
    return (
        <li>
        {props.children}
        </li>
    );
  };

  export default FollowingCard;