import React, { Component } from 'react';
import { connect } from 'react-redux';

class Number extends Component {

    render() {
        return (
            <div>{this.props.counter}</div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter
});

export default connect(mapStateToProps)(Number);
