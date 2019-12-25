import React from 'react';
import './App.css';
import './bg1.jpg';
import '/bg2.jpg';

const SwitchStyle = ({ onClick }) =>
  <button 
    className="switchButton"
    style={{
      backgroundColor: 'red',
      position: 'relative',
      margin: '1em',
    }}
    type="button"
    data-target="App-header"
    onClick={click}
  >
    Text
  </button>
export default class SwitchStyle extends Component {

}
