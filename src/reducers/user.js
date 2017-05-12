import * as types from '../actions/types';

const initialState={
    isLoggedIn:false,//登陆状态
    user:{},
    status: '',//登陆操作状态 ‘done’:已登陆,'doing':正在登陆，''：没有登陆
};

//reducer处理函数更新state,渲染UI(主要根据传入旧的state,)
export default function user(state=initialState,action={}){

    switch(action.type) {
        case types.LOGIN_SUCCESS:
            return{
                ...state,
                isLoggedIn:true,
                user:action.user,
                status: 'done',
            }
            break;
        case types.LOGIN_ING:
            return {
                ...state,
                isLoggedIn:false,
                status: 'doing',
            }
            break;
        case types.LOGIN_ERROR:
            return{
                ...state,
                isLoggedIn: false,
                status: '',
            };
            break;
        case types.LOGOUT:

            return {
                ...state,
                isLoggedIn:false,
                status:'',
            }
            break;
        default:
            return state;
    }
}