
import ReactDOM, { Component } from 'react';
import Btn from './btn'
import './App.css'
import { connect } from 'react-redux';
import  {setSearch, act_change} from './actions'

const mapToState = state => {
  return {
      input: state.search,
      field: state.acting
  }
}

const mapToProp = dispatch => {
  return {
    txtIn: (e) => dispatch(setSearch(e.target.value)),
    onC: (e) => dispatch(act_change("nope"))

  }
}

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



  render()
  {
    const {txtIn, onC, input, field}= this.props;

    return (
      <div >
        <p className="btn"> {input} </p>
        <input onChange={txtIn}></input>
        {this.state.arr.map(i =>
          {
            return (<div>
                <Btn key={i.key} name={i.name} click={onC}/>
                </div>)
          })}
      </div>
    );
  }
}

export default connect(mapToState, mapToProp)(App);
