import React, {Component} from 'react';
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll.js';


//Smart Component
class App extends Component {
    // State of App- Data that describes App
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({ robots: users})
 );
       
    } 

    onsearchChange = (event) => {
       this.setState({searchfield: event.target.value}) //ALways use when looking to change state
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
}

    render() {
        const {robots, searchfield} = this.state
        const filteredRobots =robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
         return !robots.length ? 
            <h1>Loading</h1> :
         (
            <div className='tc'>
                <h1 className='F1'>RoboFriends</h1>
                <SearchBox searchChange={this.onsearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>
            </div>
          );
        }



}

export default App;