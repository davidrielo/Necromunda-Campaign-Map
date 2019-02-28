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
    fetch('https://yaktribe.games/underhive/json/gang/42822.json').
    then((Response)=>Response.json()).
    then((findresponse)=>
    {
      console.log(findresponse.gang)
      this.setState({
        data:findresponse.gang,
      })
    })
  }
  render()
  {
    return(
      <div>
        {
          this.state.data.map((dynamicData,key) =>
          <div>
            <span>Name: {dynamicData.gang_name}</span>
            <span>Type: {dynamicData.gang_type}</span>
          </div>
          )
        }
      </div>
    )
  }
}

export default App;