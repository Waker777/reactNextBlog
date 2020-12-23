import { createStore, applyMiddleware } from 'redux';
import { createWrapper, MakeStore, Context } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';
import { StateType } from '../../types/ReducerStatesTypes';
import thunk from 'redux-thunk';

const makeStore: MakeStore<StateType> = (context: Context) =>
    createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<StateType>(makeStore, { debug: true });
