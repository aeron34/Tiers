
import ReactDOM, { Component } from 'react';
import React from 'react';
import Btn from '../btn'
import './Home.css'
import Card from '../Cards/Card'
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
    document.title = "woo"
  }

  render()
  {

    let card_list = [];

    let names = ["falco", "fox", "falcon",
    "ness", "luigi"];

    let colors = [
      [230,246,254],
      [215,141,15],
      [151,25,182,1],
      [236,39,20],
      [4,199,56,1] //luigi

    ]

    for(let i = 0; i < 6; i++)
    {
      let s = Math.floor(Math.random()*5);
      card_list.push(
        <Card key={`fal${i}`}
          name={names[s]}
          rgb={colors[s]}
        />);
    }

    return (
      <div className="big">

        <div className="canvas"style={{width: '400px', height: '400px'}}>
          <canvas ref="canvas" width="10" height="10"></canvas>
        </div>

        <div className="Card_Box">
          {card_list.map(card => {
            return card;
          })}
        </div>

      </div>
    );
  }
}

export default Home;
