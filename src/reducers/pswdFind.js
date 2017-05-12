import * as types from '../actions/types';

const initialState={
    pswdFind:{},
    status: null,
};

//reducer处理函数更新state,渲染UI(主要根据传入旧的state,)
export default function pswdFind(state=initialState,action={}){

    switch(action.type) {
        case types.PSWDFIND_NEXT:
            return{
                ...state,
                pswdFind:action.pswdFind,
                status: 'next',
            }
            break;
        case types.PSWDFIND_SUCCESS:
            return{
                ...state,
                pswdFind:action.pswdFind,
                status: 'done',
            }
            break;
        case types.PSWDFIND_ERROR:
            return{
                ...state,
                status: null,
            };
            break;
        default:
            return state;
    }
}