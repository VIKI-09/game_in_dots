import React,{Component, Fragment} from 'react';
import Game from './Game';
import {Header, Footer} from './Layouts'
import axios from 'axios';
const API_URL = 'http://starnavi-frontend-test-task.herokuapp.com';
export default class extends Component {
  state = {};
  componentDidMount(){
    axios.get(`${API_URL}/game-settings`)
    .then(res => {
      const gameModePresets = res.data;
      this.setState({gameModePresets});
      // setLoading(false);
    })
  }

 render(){
   return (
     <Fragment>
       <Header />
       <Game gameModePresets={this.state.gameModePresets}/>
       <Footer />
     </Fragment>
   )
 }
};
