import React from 'react';
import './App.css'
import Navbar from "./Navbar";
import MovieCard from './MovieCard'
import {data} from './data'

class App extends React.Component{
 

  componentDidMount(){
    const {store}=this.props
    //subscrbe called

    store.subscribe(()=>{
      console.log("Updated")
      //update state
      this.forceUpdate()
    })
    //making api calls

    //dispatch action
    store.dispatch(
      {
        type:'ADD_MOVIES',
        movies:data
      }
    )
    console.log("state_APP.js",this.props.store.getState())
    
  }

  render(){
    console.log("Render Called")
    const movie=this.props.store.getState()
    

     return (
    <div className="App">
     
    <Navbar/>
    <div className="main">
      <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favouritesd</div>
        </div>
        

        <div className="list">
          {
            movie.map((movie,index)=>{
            
              return  <MovieCard movie={movie} key={`movie- ${index}`}/>
            })

          }
        </div>
    </div>
 
   
    </div>
  );
  }

 
}

export default App;
