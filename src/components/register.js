/**
 * Created by hu.hang on 2017/4/12.
 */
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

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: '注册小蚁账号',
    };
    constructor(props){
        super(props);
        this.state={click:false,check:false};
        this._onPress=this._onPress.bind(this);
        this.reg=this.reg.bind(this);
        this.onChangePswd = this.onChangePswd.bind(this);
        this.onSwitchPswd = this.onSwitchPswd.bind(this);
        this.onPressCheck=this.onPressCheck.bind(this);
    }
    onChangePswd(text) {
        this.setState({'password': text,});
    }
    reg(){

    }
    onSwitchPswd(value) {
        this.setState({'pswdSwitch': value,});
    }
    _onPress(){
        this.setState({click:!this.state.click,
            pswdSwitch:!this.state.pswdSwitch
        });
    }
    onPressCheck(){
        this.setState({check:!this.state.check });
    }
    render() {
        const { navigate } = this.props.navigation;
        const hh=Dimensions.get('window').height;
        const ww=Dimensions.get('window').width;
        let icon=this.state.click?require('../../images/Group7.png'):require('../../images/Group3.png');
        let wh=this.state.check?15:0;
        const he=hh*0.06;
        const we=(ww-80)*2/3;
        console.log(he);
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
                    <View style={styles.header_l}><Text style={styles.header_t}>注册小蚁账号</Text></View>
                </View>
            <View style={{height:(hh-50)}}>
                {/*输入框部分*/}
                <View style={styles.one}>
                    <View style={styles.one_t}>
                        <View style={{flex:1}}><Text style={styles.text}>账号</Text></View>

                            <View style={{flex:1,flexDirection:'row'}}>
                                <TextInput
                                    style={[styles.id,{height:he,width:we}]}
                                    underlineColorAndroid='transparent'
                                    placeholder='请输入手机号'
                                ></TextInput>
                                <TouchableHighlight style={[styles.send,{height:he,width:we*0.5}]}>
                                    <Text style={{color:'#fff',fontFamily:'PingFangSC-Regular'}}>发送验证码</Text>
                                </TouchableHighlight>

                            </View>


                    </View>
                    <View style={styles.one_t}>
                        <View style={{flex:1}}><Text style={styles.text}>短信验证码</Text></View>
                        <View style={{flex:1}}>
                            <TextInput
                                style={[styles.inputs,{height:he}]}
                                underlineColorAndroid='transparent'
                                placeholder='请输入短信验证码'
                            ></TextInput>
                        </View>
                    </View>
                    <View style={styles.one_t}>
                        <View style={{flex:1}}><Text style={styles.text}>密码</Text></View>
                        <View style={{flex:1}}>
                            <TextInput
                                style={[styles.inputs,{height:he}]}
                                underlineColorAndroid='transparent'
                                placeholder='请输入密码'
                                password={true}
                                secureTextEntry={!this.state.pswdSwitch}
                                value={this.state.password}
                            ></TextInput>
                        </View>
                    </View>
                    <View style={styles.one_t}>
                        <View style={styles.one_bm}>
                            <Text style={{marginTop:10}}>长度在8到16位字符之间，必须包含数字大写字母和特殊字符</Text>
                        </View>
                        <View style={[styles.one_bm,{flexDirection:'row',alignItems: 'flex-end',}]}>
                            <TouchableHighlight onPress={this._onPress} >
                                <Image
                                    source={icon}
                                    style={{width:20,height:20}}
                                ></Image>

                            </TouchableHighlight>
                            <Text style={{marginLeft:10}}>显示密码</Text>
                        </View>


                    </View>
                </View>
                {/*底部注册*/}
                <View style={styles.two}>
                    <TouchableHighlight style={styles.button}
                                        underlayColor='green'
                                        onPress={this.reg}>
                        <Text style={{fontSize:16,color:'#fff'}}>注册</Text>
                    </TouchableHighlight>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
                        <TouchableHighlight onPress={this.onPressCheck}>
                            <View style={styles.btn}>
                                <Image
                                    source={require('../../images/check.png')}
                                    style={{width:wh,height:wh,marginTop:-2}}
                                ></Image>
                            </View>
                        </TouchableHighlight>
                        <Text style={{marginLeft:10}}> 我已阅读并同意</Text>
                        <Text style={{marginLeft:4,color:'#09BA38'}}>用户协议</Text>
                    </View>
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
    one:{
        flex:1,
        marginLeft:40,
        marginRight:40
    },
    one_t:{
      flex:1,
        justifyContent: 'center',
    },
    text:{
        marginTop:15,
        color:'#000',
        fontSize:16,
        fontFamily:'PingFangSC-Regular'
    },
    one_bm:{
        flex:1,
        justifyContent: 'flex-start',
    },
    id:{
        marginTop:10,
        justifyContent: 'flex-end',
        backgroundColor:"#fff",
        padding:0,
        paddingLeft:20,
        borderWidth:1,
        borderTopLeftRadius:4,
        borderBottomLeftRadius:4,
        borderColor:"rgba(0,0,0,0.15)",
    },
    send:{
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#D9D9D9",
        borderTopRightRadius:4,
        borderBottomRightRadius:4,
    },
    inputs:{
        marginTop:10,
        justifyContent: 'flex-end',
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.15)",
        backgroundColor:"#fff",
        padding:0,
        paddingLeft:20,
        borderRadius:4
    },
    button: {
        backgroundColor: '#09BA38',
        height: 40,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:2
    },
    btn:{
        height:15,
        width:15,
        marginTop:2,
        borderWidth:1,
        borderColor:'#979797',
        borderRadius:4

    },
    two:{
        flex:1,
        justifyContent: 'center',
       // alignItems:'center',
        marginLeft:38,
        marginRight:38
    }
})
