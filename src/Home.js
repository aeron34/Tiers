
import ReactDOM, { Component } from 'react';
import React from 'react';
import Btn from './btn'
import './Home.css'
import Card from './Cards/Card'
import Chart from 'chart.js'

class Home extends Component {

  state = {
      inn: ""
  }

  componentDidMount()
  {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d");

    let mc = new Chart(ctx, {
      type: 'doughnut',
      data: {
          datasets: [{
              data: [10, 20, 30],
              backgroundColor: [
                  'rgba(57,187,70,1)',
                  'rgba(115,240,17,1)',
                  'rgba(232,9,9,1)'
              ]
          }],
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: [
              'Red',
              'Yellow',
              'Blue'
          ]
      }
    });

  }

  render()
  {
    console.log(this.props.name);

    let card_list = [];

    for(let i = 0; i < 4; i++)
    {
      card_list.push(<Card key={`fal${i}`}/>);
    }

    /*<div style={{display: 'inline-block'}}>
      <Btn />
    </div>*/

    return (
      <div className="big">

        <div className="canvas"style={{width: '400px', height: '400px'}}>
          <canvas ref="canvas" width="10" height="10"></canvas>
        </div>

        <div style={{width: 'auto'}}>
          {card_list.map(card => {
            return card;
          })}
        </div>

      </div>
    );
  }
}

export default Home;
