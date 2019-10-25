import React,{Component, Fragment} from 'react';
import Game from '../Game';
import {Header, Footer} from '../Layouts'
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
