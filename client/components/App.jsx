/*
    ./client/components/App.jsx
*/
import React, { Component } from 'react';
class App extends Component {
  constructor()
  {
    super();
    this.state={
      data:[],
    }
  }

  componentDidMount()
  {
    fetch('./gangs/danB.json').
    then((Response)=>Response.json()).
    then((findresponse)=>
    {
      this.setState({
        data:findresponse.movies
      })
    })
  }
  render()
  {
    return(
      <div>
        {
          this.state.data.map((dynamicData,key)=>
          <div>
            <span>{dynamicData.gang}</span>
            {dynamicData.gang}
          </div>
          )
        }
      </div>
    )
  }
}

export default App;