import React from 'react';
import FollowingCard from './FollowingCard';

function GitHubFollowing (props){
    // console.log(props.props)
    return(
        <div>
            {props.props.map(follower => <FollowingCard key={follower.id}>{follower.login}</FollowingCard>)}
        </div>
    );
};

export default GitHubFollowing;