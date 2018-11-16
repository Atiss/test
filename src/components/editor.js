import React,{Component} from 'react';

class Editor extends Component{
    constructor(props){
        super(props);
        this.state = {
            position: 0,
            cls: 'Editor-div Editor-hidden',
            value:""
        };

    }

    close = () => {
        this.setState({
          cls: this.getClass()
        });
    }

    handleChange = (e) => {
        if(isNaN(e.target.value))return;
        this.setState({value: e.target.value});
    }

    handleUpdate = () => {
        this.props.updateElement(this.props.position, this.state.value);
        this.setState({value: ""});
        //this.close();
    }

    getClass = () => {
        return 'Editor-div '+(this.props.visible ? "Editor-visible" : "Editor-hidden");
    }

    render () {
        return (
            <div className={this.getClass()}>
                <div>Input value:</div>
                <div><input type="text" value={this.state.value} onChange={this.handleChange}/></div>
                <div>
                    <button className='btn' onClick={() => {this.handleUpdate()}}>ok</button>
                    <button className='btn' onClick={() => { this.props.cancelUpdate()}}>cancel</button>
                </div>
            </div>
        )
    }
}

export default Editor;