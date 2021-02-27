
import ReactDOM, { Component } from 'react';
import React from 'react';
import Btn from '../btn'
import './Home.css'
import Card from '../Cards/Card'
import Chart from 'chart.js'

class Home extends Component {

  state = {
      inn: "",
      card_list: []
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

    this.loadCards();
  }

  loadCards = () => {
    fetch('http://localhost:5000/data')
    .then(a => a.json()).then(
      a => {console.log(a);
      this.setState({
        card_list: a
      })}).catch(e =>{
        console.log(e);
      })
  }


  render()
  {

    let {card_list} = this.state;
    let arr = [];
    let names = ["falco", "fox", "falcon",
    "ness", "luigi"];

    let colors = [
      [230,246,254],
      [215,141,15],
      [151,25,182,1],
      [236,39,20],
      [4,199,56,1] //luigi
    ]
/*
    for(let i = 0; i < 6; i++)
    {
      let s = Math.floor(Math.random()*5);
      card_list.push(
        <Card key={`fal${i}`}
          name={names[s]}
          rgb={colors[s]}
        />);
    }
*/
    for (var obj in card_list) {
      arr.push(
        <Card key={obj}
          name={obj}
          rgb={card_list[obj].Color}
          stats={card_list[obj]}
        />)
    }

    return (
      <div className="big">

        <div className="canvas"style={{width: '400px', height: '400px'}}>
          <canvas ref="canvas" width="10" height="10"></canvas>
        </div>

        <div className="Card_Box">
          {arr.map(a => a)}
        </div>

      </div>
    );
  }
}

export default Home;
