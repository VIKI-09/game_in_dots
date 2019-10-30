import React,{Component, Fragment} from 'react';
import Game from './Game';
import {Header, Footer} from './Layouts'
import axios from 'axios';
const API_URL = 'http://starnavi-frontend-test-task.herokuapp.com';
export default class extends Component {

 render(){
   return (
     <Fragment>
       <Header />
       <Game />
       <Footer />
     </Fragment>
   )
 }
};
