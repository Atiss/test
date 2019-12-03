import React,{Component} from 'react';

class Toggle extends Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
      handleClick() {
          this.setState(function(prevState) {
              return {isToggleOn: !prevState.isToggleOn};
          });
          this.props.toggle(this.state.isToggleOn);
      }
      
      // ES6 -------
      // handleClick() {
      // 	this.setState(prevState => ({
      // 		isToggleOn: !prevState.isToggleOn
      // 	}));
      // }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Скрыть карточки' : 'Отобразить карточки'}
        </button>
      );
    }
  }
  
  export default Toggle;