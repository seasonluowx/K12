import React, {Component,PureComponent} from 'react';
import {
    StyleSheet,
    FlatList,
    TouchableHighlight,
    Text
} from 'react-native';

import {FooterComponent,
    HeaderComponent,
    SeparatorComponent} from './js/ListExampleShared'

import * as ModalExample from './base/modelExample';

export default class MyProject extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: (new Map(): Map<string, boolean>)}
    }

    _faltListRenderItem = ({item}) => (
        <MenuItem
            id={item.id}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.id)}
            title={item.title}
        />
    );

    _onPressItem = (id: string) => {
        this.setState((state) => {
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            return {selected};
        });
    }

    render() {
        return (
            <view>
            <FlatList
                data={[{id:1,title:'菜单1'}, {id:2,title:'菜单2'}, {id:3,title:'菜单3'}, {id:4,title:'菜单4'}, {id:5,title:'菜单5'}, {id:6,title:'菜单6'}]}
                extraData={this.state}
                renderItem={this._faltListRenderItem}
                ItemSeparatorComponent={SeparatorComponent}
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
            />
                <ModalExample></ModalExample>
            </view>
        );
    }
}

class MenuItem extends PureComponent{
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };
    render() {
        return (
            <TouchableHighlight style={styles.button}
                                underlayColor='green'
                                onPress={this._onPress}>
                <Text>{this.props.title}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        flex: 2,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    rightContainer: {
        flex: 1,
    },
});