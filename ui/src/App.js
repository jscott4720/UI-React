import React, { Component } from 'react';
import './App.css';

let url = "https://api.nasa.gov/planetary/apod?api_key=w0mhkM0ZQMfxur6qAKc6Zx3ku1uaJ36Z73I77OCB"

const options = {
  method: 'GET',
  headers: {
    "Accept": 'application/json',
    "x-api-key": "w0mhkM0ZQMfxur6qAKc6Zx3ku1uaJ36Z73I77OCB"
  }
};

class App extends Component {
 constructor(props){
   super(props)
 }
  render(){
  return (
   <div>This will be the homepage</div>
  );//return
}//render

componentDidMount() {
  fetch (url, options)
    .then ((res)=>(res.json()))
    .then ((convertedResponse) => {
      console.log(convertedResponse)
    })
}
 }//component
export default App;
