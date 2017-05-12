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
import {connect} from 'react-redux';//将我们的页面和action链接起来
// import ButtonP from 'react-native-button';
import {bindActionCreators} from 'redux';//将要绑定的actions和dispatch绑定到一起
import * as LoginActions from '../actions/loginActions';//导入需要绑定的actions
import Modal from 'react-native-modalbox';
import Home from './home';


/**
 登陆页面
 **/
const hh=Dimensions.get('window').height;
const ww=Dimensions.get('window').width;
class Login extends Component {
    static navigationOptions = {
        title: '登录小蚁账号',
        header: ({ state, setParams }) => {
            let right=(<Button title="注册" color='#000' onPress={() => setParams({'nextNav':'Register'})} />);
            let titleStyle={color:'#fff',fontSize:20,marginLeft:(ww*0.5-70)};
            let style={elevation: 0,backgroundColor:'#000'};
            return {right,titleStyle,style,};
        },
    };
    constructor(props) {
        super(props);

        this.state = {click:false}

        this.login = this.login.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangePswd = this.onChangePswd.bind(this);
        this.onPress=this.onPress.bind(this);
    }

    onChangePhone(text) {
        this.setState({'phone': text,});
    }

    onChangePswd(text) {
        this.setState({'password': text,});
    }

    login() {
        if (!this.state.phone || !this.state.password) {
            Alert.alert('用户名或密码不能为空！');
        } else {
            this.refs.modal.open();//loading 状态
            this.props.actions.login({'phone': this.state.phone, 'password': this.state.password});//dispath 登陆
        }
    }
    onPress(){
        this.setState({click:!this.state.click,
            pswdSwitch:!this.state.pswdSwitch
        });
    }



    render() {
        console.log('render...');
        const {isLoggedIn,navigation}=this.props;
        const {navigate,state} = navigation;
        console.log(hh);
        if (isLoggedIn) {
            navigate('Home');
        }
        if(state!=undefined){
            const {params} = state;
            if(params !=undefined){
                const {nextNav} = params;
                navigate(nextNav);
            }
        }
        let icon=this.state.click?require('../../images/Group7.png'):require('../../images/Group3.png');
            return (
                <View style={{height:hh}}>
                    <View style={[styles.header]}>
                        <View  style={styles.header_l}><Text style={styles.header_t}>登陆小蚁账号</Text></View>
                        <View style={styles.header_m}>
                            <TouchableHighlight onPress={() => navigate('Register')}>
                                <Text style={[styles.header_t,{fontSize:16}]}>注册</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
            <View style={{height:(hh-50),backgroundColor:'#fff'}}>
                <View style={styles.one}>
                    <View style={[styles.tt,styles.one_t]}>
                        <Text style={styles.text}>账号</Text>
                    </View>
                    <View style={[styles.tt,styles.one_t]}>
                        <TextInput
                            style={[styles.inputs,{height:hh*0.06}]}
                            underlineColorAndroid='transparent'
                            placeholder='请输入手机号'
                            onChangeText={this.onChangePhone}
                        ></TextInput>
                    </View>
                    <View style={styles.tt}>
                        <Text style={styles.text}>密码</Text>
                    </View>
                    <View style={[styles.tt,styles.one_t]}>
                        <TextInput
                            style={[styles.inputs,{height:hh*0.06}]}
                            underlineColorAndroid='transparent'
                            placeholder='请输入密码'
                            password={true}
                            secureTextEntry={!this.state.pswdSwitch}
                            value={this.state.password}
                            onChangeText={this.onChangePswd}
                        ></TextInput>
                    </View>
                    <View style={[styles.tt,styles.item,styles.one_t]}>
                        <TouchableHighlight onPress={this.onPress} >
                            <Image
                                source={icon}
                                style={{width:20,height:20}}
                            ></Image>

                        </TouchableHighlight>
                        <Text style={{marginLeft:5,color:'#333333'}}>显示密码</Text>
                        <View style={{alignItems:'flex-end',flex:1}}>
                            <TouchableHighlight onPress={() => navigate('PswdFind')}>
                                <Text style={{marginLeft:5,borderColor:'#333333',borderBottomWidth:1,color:'#333333'}}>忘记密码</Text></TouchableHighlight>
                        </View>
                    </View>
                    {/*登陆按钮*/}
                    <View style={styles.tt}>
                        <TouchableHighlight style={styles.button}
                                            underlayColor='green'
                                            onPress={this.login}>
                            <Text style={{fontSize:16,color:'#fff'}}>登陆</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                {/*第三方登陆*/}
                <View style={styles.three}>
                    <View style={styles.three_t}>
                        <Text style={{alignItems: 'center'}}>第三方登陆</Text>
                    </View>
                    <View style={styles.three_m}>
                        <TouchableHighlight>
                            <Image
                                source={require('../../images/iconmi@1x.png')}
                                style={{width:40,height:40}}
                            ></Image>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Image
                                source={require('../../images/iconwechat@1x.png')}
                                style={{width:40,height:40,marginLeft:20,marginRight:20}}

                            ></Image>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Image
                                source={require('../../images/CombinedShapeCopy.png')}
                                style={{width:40,height:40}}
                            ></Image>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.three_b}>
                        <Image
                            source={require('../../images/CombinedShapeCopy@2x.png')}
                            style={{width:20,height:20}}
                        ></Image>
                        <Text style={{marginLeft:10}}>Locale:China</Text>
                    </View>
                </View>

                <Modal style={styles.modal}
                    ref='modal'
                    isOpen={this.props.status=='doing'?true:false}
                    animationDuration={0}
                    position={"center"}
                >
                    <ActivityIndicator
                        size='large'
                    />
                    <Text style={{marginTop:15,fontSize:16,color:'#444444'}}>登陆中...</Text>
                </Modal>
            </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
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
        width:40,
        height:25,
        position:'absolute',
        right:10,
        borderRadius:4,
        borderWidth:1,
        borderColor:'rgba(255,255,255,0.20)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_t:{
        color:'#fff',
        fontSize:20
    },
    one:{
        flex:1,
        marginLeft:38,
        marginRight:38,
        marginBottom:50,
    },
    one_t:{
        marginLeft:2,
        marginRight:2,
    },
    tt:{
        flex:1,
    },
    text:{
        marginTop:15,
        color:'#000',
        fontSize:16,
        fontFamily:'PingFangSC-Regular'
    },
    view:{
        marginLeft:40,
        marginRight:40,
        marginTop:16
    },
    inputs:{
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
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom:10
    },
    //第三方登陆
    three:{
        flex:1,
        marginLeft:100,
        marginRight:100,
    },
   three_t:{
        flex:1,
       justifyContent: 'center',
       alignItems: 'center',
   },
    three_m:{
        flex:1,
        justifyContent: 'center',
        flexDirection:'row',
        alignItems: 'flex-start',
    },
    three_b:{
        flex:1,
        // marginTop:-50,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection:'row',
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        borderRadius: 10,
    },

});

//根据全局state返回当前页面所需要的信息,（注意以props的形式传递给Login）
function mapStateToProps(state) {
    return state.User;
}
//返回可以操作store.state的actions,(其实就是我们可以通过actions来调用我们绑定好的一系列方法)
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(LoginActions, dispatch)
    };
}

//链接起来
export default connect(mapStateToProps, mapDispatchToProps)(Login);