/**
 * Created by hu.hang on 2017/4/11.
 */
import React,{Component}from 'react';
import {
    ListView,
    StyleSheet,
    Image,
    Button,
    Animated,
    Easing
}from 'react-native';
import { createAnimatableComponent,View,Text} from 'react-native-animatable';


export default class Welcomes extends Component{
    render(){
        const {navigation}=this.props;
        const {navigate} = navigation;
        return(
        <View style={{flex:1}}>
            <View
                animation="fadeIn"
                duration={1100}
                style={{flex:1}}
            >
                <Image style={styles.image} source={require('../../images/1.png')}/>
            </View>
            <View
                animation="bounceInUp"
                duration={1100}
                style={[styles.view,{position:'absolute'}]}
            >
                <Image style={styles.one} source={require('../../images/tabbar_1_press.png')}/>
            </View>
        <View>
            <Button
                title='Login'
                color='green'
                onPress={
                    ()=>navigate('Login')
            }

            />
        </View>
        </View>
        )
    }
}
const styles=StyleSheet.create({
    view:{
        // justifyContent:'center',
        // alignItems:'center',
        left:170,
        top:100

    },
    image:{
        justifyContent:'center',
        alignItems:'center',
        width:null,
        resizeMode:Image.resizeMode.contain,
    }
})
