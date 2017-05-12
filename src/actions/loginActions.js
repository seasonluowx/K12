import * as types from './types';
import * as consts from '../constants/constant';
import {Alert}from 'react-native';

export function login(user) {
    return dispatch => {
        dispatch({type: types.LOGIN_ING});
        const url = consts.API_SERVER + "/user/login_xiaoyi?v=v3.2";
        let formData = new FormData();
        formData.append("mobile","18516628963");
        formData.append("password","XF7MZrwm82C6muv7kHblgGVUTdU+Qxh1lYcMOd8+JRk=");
        return fetch(url, {
            method: 'POST',
            headers: {},
            body: formData
        }).then((res) => {
            if(res.ok){return res.json()}
        }).then(function (data) {
            if (data.code == 1) {
                dispatch({type: types.LOGIN_SUCCESS, user: user});
            } else {
                Alert.alert('用户名或密码错误');
                dispatch({type: types.LOGIN_ERROR});
            }
        }).catch((err) => {
            alert(err);
            dispatch({type: types.LOGIN_ERROR});
        })
    }
}

//登出(由于登出操作一般都只是清空一些数据，不需要异步执行直接返回就可以了，)
export function logout() {
    return {
        type: types.LOGOUT,
    };
}