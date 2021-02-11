
import ReactDOM, { Component } from 'react';
import Btn from './btn'
import './App.css'
import Chart from 'chart.js'

class App extends Component {

  state = {
      inn: "",
      style:{
        textAlign: "center",
        color: "red",
        fontSize: "20px"
      },
      arr: [
        {name: "nomu", key:"asoid2", text:"txt"},
        {name: "nmu", key:"asnid2", text:"t3t"}
      ]
  }
  componentDidMount()
  {
    console.log("good");
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
    const {inn}= this.state;

    return (
      <div style={{width: '400px', height: '400px'}}>
        <canvas ref="canvas" width="10" height="10"></canvas>
    </div>
  );
  }
}

export default App;
