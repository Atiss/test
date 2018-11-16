import React, { Component } from 'react';
import './App.css';
import Page from './components/page';
import Bottom from './components/bottom';
import getFibonacciSequence from './mock';
import Editor from './components/editor';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            num_per_page: 11,
            fibonacci: this.getData(100),
            current_page: 0,
            is_modal_visible: false
        }
    }

    getData = (max) => {
        let fibonacci = getFibonacciSequence(max);
        fibonacci = this.addEmptyElement(fibonacci);
        return fibonacci;
    }

    addEmptyElement = (sequence)=> {
        sequence.push('new');
        return sequence;
    }

    changeNumber = (value) => {
        if(!value)value=this.state.num_per_page;
        this.setState({
            num_per_page: Number(value),
            current_page: 0
        });
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
        if(fibonacci.length==position+1)this.addEmptyElement(fibonacci);
        this.setState({
            fibonacci: fibonacci,
            is_modal_visible: false
        });
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
                                    changePage={this.changePage}
                                    current_page={this.state.current_page}/>
            </header>
          </div>
        );
    }
}

export default App;
