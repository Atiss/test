import React, { Component } from 'react';

class Bottom extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.rounds };
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            value: nextProps.rounds
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.changePage(e.target.dataset.id);
    }

    pagingList = () => {
        let references = [];

        for (let i = 0; i < (this.props.count + 1) / this.props.num_per_page; i++) {
            let cls = 'btn-link';
            if (i === this.props.current_page) cls += ' btn-link-selected';
            references.push(<button className={cls} onClick={this.handleClick} data-id={i} key={i}>{i + 1}</button>)
        }
        return references;
    };

    handleChange = (e) => {
        if (!isNaN(+e.target.value))
            this.setState({ value: e.target.value });
        this.props.changeNumber(+e.target.value);
    }

    render() {
        return (
            <div>
                <div>Количество раундов:</div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <div>
                    <button className='btn' onClick={() => { this.props.refresh() }}>Сбросить</button>
                </div>
            </div>

        )
    }
}

export default Bottom;