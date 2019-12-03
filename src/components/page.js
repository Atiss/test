import React, { Component } from 'react';
import Card from './card';
import Toggle from './toggle';


class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_modal_visible: false,
            isToggleOn: false
        }
    }

    createList = () => {
        let list = [];
        //Get start and end positions at the sequence according to current page and count of objects per page
        let start = this.props.current_page * this.props.num_per_page;
        const end = start + this.props.num_per_page <= this.props.sequence.length ? start + this.props.num_per_page
            : this.props.sequence.length;

        if (this.state.isToggleOn) start = end - 2 > 0 ? end - 2 : 0;

        for (let i = start; i < end; i++) {
            list.push(<Card value={this.props.sequence[i]} position={i}
                last={(i === this.props.sequence.length - 1)}
                deleteElement={this.props.deleteElement}
                openEditor={this.props.openEditor}
                key={i} />);
        }

        return list;
    };


    toggle = (isToggleOn) => {
        this.setState({
            isToggleOn: isToggleOn
        })
    }


    render() {
        return (
            <div>
                <div className='Page-div'>
                    {this.createList()}
                </div>
                <Toggle toggle={this.toggle} />
            </div>
        )
    }
}

export default Page;