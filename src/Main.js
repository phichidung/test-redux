import React, { Component } from 'react';
import { connect } from 'react-redux';
import Number from "./components/Number";
import { counterIncrease, counterDecrease } from './actions/actions';

class Main extends Component {

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    <Number/>
                </div>
                <div style={{ display: 'flex' }}>
                    <button onClick={ () => this.props.decrease() }>
                        -
                    </button>
                    <button onClick={ () => this.props.increase() }>
                        +
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    increase: () => dispatch(counterIncrease()),
    decrease: () => dispatch(counterDecrease()),
});

export default connect(null, mapDispatchToProps)(Main);
