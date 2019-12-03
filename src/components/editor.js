import React, { Component } from 'react';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            cls: 'Editor-div Editor-hidden',
            value: ""
        };
        this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this)
    }

    close = () => {
        this.setState({
            cls: this.getClass()
        });
    }

    handleChange = (e) => {
        if (isNaN(e.target.value)) return;
        this.setState({ value: e.target.value });
    }

    handleUpdate = () => {
        this.props.updateElement(this.props.position, this.state.value);
        this.setState({ value: "" });
        //this.close();
    }

    getClass = () => {
        return 'Editor-div ' + (this.props.visible ? "Editor-visible" : "Editor-hidden");
    }

    handleEnterKeyPress(e) {
        if (e.charCode === 13) {
            this.handleUpdate();
        }
        if (e.charCode === 27) {
            this.props.cancelUpdate()
        }
    }

    render() {
        return (
            <div className={this.getClass()}>
                <div>Введите значение:</div>
                <div><input type="text" value={this.state.value} onChange={this.handleChange}
                    ref={input => input && input.focus()}
                    onKeyPress={this.handleEnterKeyPress} /></div>
                <div>
                    <button className='btn' onClick={() => { this.handleUpdate() }}>ОК</button>
                    <button className='btn' onClick={() => { this.props.cancelUpdate() }}>Отменить</button>
                </div>
            </div>
        )
    }
}

export default Editor;