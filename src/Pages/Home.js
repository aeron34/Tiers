
import ReactDOM, { Component } from 'react';
import React from 'react';
import Modal from '../modal'
import './Home.css'
import Card from '../Cards/Card'
import Chart from 'chart.js'
import {CreateCardArray} from './HomeFunctions'

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
              backgroundColor: list.map(a => `rgba(${a.color[0]}, ${a.color[1]}, ${a.color[2]})`)
          }],
          // These labels appear in the legend and in the tooltips when
          //hovering different arcs
          labels: list.map(a => a.name)
      },
      options: {
        title: {
          display: true,
          fontSize: 24,
          text: 'Wins Among Top 4 Characters'
        }
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
    let arr = CreateCardArray(card_list, this.compare);

    let demo = [['EVO', '4/25/2021'], ['HyperX', '3/30/2021'],
    ['Esporta', '6/21/2021'], ['LAX', '5/23/2021'], ['Nevodo', '4/5/2021']];

    let modal = (<Modal>
          <div>Ohhh</div>
        </Modal>)
    return (
      <div className="big">


        <h2 id="upcoming"style={{margin: "50px"}}> UPCOMING TOURNAMENTS </h2>

        <div className="events">
          {demo.map(a=>{
            return (<div className="events__event">
              <h2>{a[0]}</h2>
              <p style={{fontWeight: "bold"}}>{a[1]}</p>
              <p style={{width: "80%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>)
          })}
        </div>

        {modal}
        {/*This is the div section that holds the
          chart*/}
        <div className="canvas"style={{width: '400px', height: '400px'}}>
          <canvas ref="canvas" width="10" height="10"></canvas>
        </div>


        {/*This is the box that holds the Cards*/}
        <h2 id="upcoming"style={{fontSize: "30px", margin: "50px"}}> TIER LIST </h2>

        <div className="Card_Box">
          {arr.map(a => a)}
        </div>

      </div>
    );

  }
}

export default Home;
