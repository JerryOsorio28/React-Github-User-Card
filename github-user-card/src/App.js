import React from 'react';
import './App.scss';
import axios from 'axios';
import GitHubCard from './components/GitHubCard';
import GitHubFollowers from './components/GitHubFollowers';
import GitHubFollowing from './components/GitHubFollowing';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      githubData: [],
      githubFollowers: [],
      githubFollowing: []
    }
  ;}

  componentDidMount(){
    this.fetchData();
    this.fetchFollowers();
    this.fetchFollowing();
  }

  fetchData = () => {
    axios.get(`https://api.github.com/users/JerryOsorio28`)
      .then(response => {
        // console.log(response)
        this.setState({githubData: response.data})
    })

      .catch(err => {
        console.log('Error fetching data')
      })
  }
  fetchFollowers = () => {
    axios.get(`https://api.github.com/users/JerryOsorio28/followers`)
      .then(followers => {
        // console.log(followers.data)
        this.setState({githubFollowers: followers.data})
    })

      .catch(err => {
        console.log('Error fetching data')
      })
  }
  fetchFollowing = () => {
    axios.get(`https://api.github.com/users/JerryOsorio28/following`)
      .then(following => {
        console.log(following)
        this.setState({githubFollowing: following.data})
    })

      .catch(err => {
        console.log('Error fetching data')
      })
  }

    render(){
      return (
        <div className="App">
          <GitHubCard props={this.state.githubData}/>
          <div className='friends'>
            <ul>
              <GitHubFollowers props={this.state.githubFollowers}/> 
            </ul> 
            {/* <ul>
              <GitHubFollowers props={this.state.githubFollowers}/> 
            </ul>  */}
            <ul>
              <GitHubFollowing props={this.state.githubFollowing}/> 
            </ul> 
          </div>
        </div>
      );
    }
}

export default App;
