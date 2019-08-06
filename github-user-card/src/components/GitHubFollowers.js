import React from 'react';
import FollowersCard from './FollowersCard';

function GitHubFollowers (props){
    // console.log(props.props)
    return(
        <div>
            {props.props.map(follower => <FollowersCard key={follower.id}>{follower.login}</FollowersCard>)}
        </div>
    );
};

export default GitHubFollowers;