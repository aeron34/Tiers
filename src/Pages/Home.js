
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
    document.title = "woo"
    this.loadCards();
  }

  compare(a, b)
  {
      return b.wins - a.wins;
  }

  createGraph = () => {

    let card_list = {};
    Object.assign(card_list, this.state.card_list);
    let list = [], i = 0;
    console.log(card_list);

    for (var prop in card_list) {
        list.push(card_list[prop]);
        list[i]["name"] = prop
        i++;
    }

    list = list.sort(this.compare);
    list.splice(4);
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d");

    let mc = new Chart(ctx, {
      type: 'doughnut',
      data: {
          datasets: [{
              data: list.map(a => a.wins),
              backgroundColor: list.map(a => `rgba(${a.Color[0]}, ${a.Color[1]}, ${a.Color[2]})`)
          }],
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: list.map(a => a.name)
      }
    });
  }

  loadCards = () => {
    fetch('http://localhost:5000/data')
    .then(a => a.json()).then(
      a => {
        this.setState({
          card_list: a
        }, this.createGraph)
      }).catch(e =>{
        console.log(e);
      })
  }


  render()
  {

    let card_list = {};
    Object.assign(card_list, this.state.card_list);
    let arr = [], list = [], a = 0;

    for (var prop in card_list) {
        list.push(card_list[prop]);
        list[a]["name"] = prop
        a++
    }

    list.sort(this.compare);
    console.log(list);
    for (let i = 0; i < list.length; i++)
    {
      arr.push(
        <Card key={`${list[i]}+${i}`}
          name={list[i].name}
          rgb={list[i].Color}
          stats={list[i]}
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
