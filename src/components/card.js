import React,{Component} from 'react';

class Card extends Component{

    addButtons = () => {
        if(this.props.last){
            return(<button className="btn"
                onClick={() => { this.props.openEditor(this.props.position, this.props.value)}}>Добавить</button>);
        }
        return (
            <div>
                    <button className="btn"
                        onClick={() => {this.props.openEditor(this.props.position, this.props.value)}}>Изменить</button>
                    <button className="btn"
                        onClick={() => {this.props.deleteElement(this.props.position)}}>Удалить</button>
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