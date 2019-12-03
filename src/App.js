import React, { Component } from 'react';
import './App.css';
import Page from './components/page';
import Bottom from './components/bottom';
import getFibonacciSequence from './mock';
import Editor from './components/editor';
import calculate from './services/calculate';

import soundfile from './incoming.mp3';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            num_per_page: 50,
            fibonacci: this.getData(0),
            current_page: 0,
            is_modal_visible: false,
            count: 6,
            rounds: 10
        }
    }

    getData = (max) => {
        let fibonacci = getFibonacciSequence(max);
        fibonacci = this.addEmptyElement(fibonacci);
        return fibonacci;
    }

    addEmptyElement = (sequence)=> {
        sequence.push('+');
        return sequence;
    }

    changeNumber = (value) => {
        if(!value)value=this.state.rounds;
        this.setState({
            rounds: Number(value),
            current_page: 0
        });
    }

    refresh = () => {
        this.setState({
            fibonacci: this.getData(0),
        })
    }

    changePage = (value) => {
        this.setState({current_page: value});
    }

    deleteElement = (position) => {
        let fibonacci = this.state.fibonacci.slice();
        fibonacci.splice(position, 1);
        this.setState({fibonacci: fibonacci});
    }

    updateElement = (position, value) => {
        let fibonacci = this.state.fibonacci.slice();
        if(value) fibonacci[position] = value;
        fibonacci = calculate(fibonacci);
        if(fibonacci[fibonacci.length-1] !== 'new')this.addEmptyElement(fibonacci);
        this.setState({
            fibonacci: fibonacci,
            is_modal_visible: false
        });
        if ((fibonacci.length-1) >= this.state.rounds)this.playSound();
    }

    openEditor = (position, value) => {
        this.setState({
            is_modal_visible: true,
            position: position
        })
    }

    cancelUpdate = () => {
        this.setState({
            is_modal_visible: false
        })
    }

    playSound = () => {
        let audio = new Audio(soundfile);
        let promise = audio.play();
            if (promise) {
                //Older browsers may not return a promise, according to the MDN website
                promise.catch(function(error) { 
                    console.error(error.message); 
                });
            }
    }

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <Editor ref="modal" updateElement={this.updateElement} cancelUpdate={this.cancelUpdate}
                                    visible={this.state.is_modal_visible}
                                    position={this.state.position}/>
              <Page sequence = {this.state.fibonacci} num_per_page={this.state.num_per_page}
                                    current_page={this.state.current_page}
                                    deleteElement={this.deleteElement}
                                    updateElement={this.updateElement}
                                    openEditor={this.openEditor}/>
              <Bottom count = {this.state.fibonacci.length} num_per_page={this.state.num_per_page}
                                    changeNumber={this.changeNumber}
                                    refresh = {this.refresh}
                                    changePage={this.changePage}
                                    current_page={this.state.current_page}
                                    rounds = {this.state.rounds}/>
            </header>
          </div>
        );
    }
}

export default App;
