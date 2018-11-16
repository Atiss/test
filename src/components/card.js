import React,{Component} from 'react';

class Card extends Component{

    addButtons = () => {
        if(this.props.last){
            return(<button className="btn"
                onClick={() => { this.props.openEditor(this.props.position, this.props.value)}}>add</button>);
        }
        return (
            <div>
                    <button className="btn"
                        onClick={() => {this.props.openEditor(this.props.position, this.props.value)}}>update</button>
                    <button className="btn"
                        onClick={() => {this.props.deleteElement(this.props.position)}}>delete</button>
                </div>
        )
    }

    render () {
        return (
            <div className='Card-div'>
                <div>{this.props.value}</div>
                {this.addButtons()}
            </div>
        )
    }
}

export default Card;