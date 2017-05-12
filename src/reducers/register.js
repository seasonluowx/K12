/**
 * Created by hu.hang on 2017/4/12.
 */
import * as types from '../actions/types';

const initialState={
    register:{},
    status:null,
};

//reducer处理函数更新state,渲染UI(主要根据传入旧的state,)
export default function register(state=initialState,action={}){

    switch(action.type) {
        case types.REGISTER_SUCCESS:
            return{
                ...state,
                register:action.register,
                status: 'done',
            }
            break;
        case types.REGISTER_ING:
            return {
                ...state,
                status: 'doing',
            }
            break;
        case types.REGISTER_ERROR:
            return{
                ...state,
                status: null,
            };
            break;
        default:
            return state;
    }
}