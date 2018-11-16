import React,{Component} from 'react';

class Bottom extends Component{
    constructor(props){
        super(props);
        this.state = {value: props.num_per_page};
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            value: nextProps.num_per_page
        });
    }

  handleClick = (e) => {
    e.preventDefault();
    this.props.changePage(e.target.dataset.id);
  }

    pagingList = () => {
        let references = [];

        for(let i = 0; i<(this.props.count+1)/this.props.num_per_page; i++){
            let cls = 'btn-link';
            if(i==this.props.current_page)cls+=' btn-link-selected';
            references.push(<button className={cls} onClick={this.handleClick} data-id={i}>{i+1}</button>)
        }
        return references;
    };

    handleChange = (e) => {
        if(!isNaN(e.target.value))
            this.setState({value: e.target.value});
    }

    render(){
        return (
            <div>
                <div>Number of objects per page:</div> <input type="text" value={this.state.value}
                                                        onChange={this.handleChange}/>
                <button className='btn' onClick={() => { this.props.changeNumber(this.state.value)}}>switch</button>
                <div>{this.pagingList()}</div>
            </div>
        )
    }
}

export default Bottom;