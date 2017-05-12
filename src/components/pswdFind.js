import React, {Component} from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View,
    TouchableHighlight,
    ActivityIndicator,
    Alert,
    Switch,
    Button,
    Image,
    Dimensions
} from 'react-native';

export default class PswdFindScreen extends React.Component {
    static navigationOptions = {
        title: '找回密码',
    };

    render() {
        const hh=Dimensions.get('window').height;
        const ww=Dimensions.get('window').width;
        const he=hh*0.06;
        const we=(ww-80)*2/3;
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={styles.header}>
                    <View style={styles.header_m}>
                        <TouchableHighlight onPress={() => navigate('Login')}>
                            <Image
                                source={require('../../images/icon.png')}
                                style={{height:20,width:10}}
                            ></Image>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.header_l}><Text style={styles.header_t}>找回密码</Text></View>
                </View>
            <View style={{height:(hh-50),backgroundColor:'#fff'}}>
                <View style={[styles.th,styles.center,{height:hh*0.3}]}>
                    <View style={{flex:1,justifyContent:'flex-end'}}>
                        <Text style={styles.text}>手机号</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',flexDirection:'row'}}>
                        <TextInput
                            style={[styles.id,{height:he,width:we}]}
                            underlineColorAndroid='transparent'
                            placeholder='请输入注册时使用的手机号'
                        ></TextInput>
                        <TouchableHighlight style={[styles.send,{height:he,width:we*0.5}]}>
                            <Text style={{color:'#fff',fontFamily:'PingFangSC-Regular'}}>发送验证码</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex:1,justifyContent:'flex-end'}}>
                        <Text style={styles.text}>验证码</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',flexDirection:'row'}}>
                        <TextInput
                            style={[styles.id,{height:he,width:we}]}
                            underlineColorAndroid='transparent'
                            placeholder='点击图片可刷新'
                        ></TextInput>
                        <TouchableHighlight style={[styles.send,{height:he,width:we*0.5}]}>
                            <Text style={{color:'#fff',fontFamily:'PingFangSC-Regular'}}>刷新图片</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={[styles.next,{marginTop:0.4*hh}]}>
                    <TouchableHighlight style={styles.button}
                                        onPress={() => navigate('Reset')}>
                        <Text style={{fontSize:16,color:'#fff'}}>下一步</Text>
                    </TouchableHighlight>
                </View>
            </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    header:{
        height:50,
        backgroundColor:'#000',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_l:{
        flex:1,
        alignItems: 'center',
    },
    header_m:{
        position:'absolute',
        left:30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_t:{
        color:'#fff',
        fontSize:20
    },
    th:{
        marginLeft:40,
        marginRight:40,

    },
    center:{
        // alignItems:'center',
        justifyContent:'center'
    },
    text:{
        marginTop:15,
        color:'#000',
        fontSize:16,
        fontFamily:'PingFangSC-Regular'
    },
    send:{
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#D9D9D9",
        borderTopRightRadius:4,
        borderBottomRightRadius:4,
    },
    id:{
        marginTop:10,
        justifyContent: 'flex-end',
        backgroundColor:"#fff",
        padding:0,
        paddingLeft:10,
        borderWidth:1,
        borderTopLeftRadius:4,
        borderBottomLeftRadius:4,
        borderColor:"rgba(0,0,0,0.15)",
    },
    button: {
        backgroundColor: 'rgba(0,0,0,0.15)',
        height: 40,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:2
    },
    next:{
        marginLeft:38,
        marginRight:38,
    }
})