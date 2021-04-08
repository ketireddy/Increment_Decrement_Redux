import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { bindActionCreators, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { incrementTodo, decrementTodo, resetTodo, INCREMENT, DECREMENT, RESET } from './constants/index';
import { reducer } from './reducers/index';


class Counter extends React.Component {
  render() {
    const {count, incrementTodo, decrementTodo, resetTodo} = this.props;
    //console.log({count, increment });
    return (
       <main className="Counter">
         <p className="count">{count}</p>
         <section className="controls">
           <button onClick={ incrementTodo }>Increment</button>
           <button onClick={ decrementTodo }>Decrement</button>
           <button onClick={ resetTodo }>Reset</button>
         </section>
       </main> 
    );
  }
}

const store = createStore(reducer, );

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps =  {
  incrementTodo,decrementTodo,resetTodo,
  /*return {
    increment() {
      dispatch(incrementTodo());
    },
    
    decrement() {
      dispatch(decrementTodo());
    },

    reset() {
      dispatch(resetTodo());
    }
  }*/
}

const NewCounterState = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <NewCounterState />
  </Provider>,
  document.getElementById('root')
);


