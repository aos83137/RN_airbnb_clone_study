import React, {Component} from 'react';
import {PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    TouchableHighlightBase,
} from 'react-native';

export default class InputField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secureInput: props.inputType === 'text' || props.inputType === 'email' ? false : true,
            //input의 초기값 password이면 true, 아니면 false
            //ture - 비번 안보임
            //false - 비번 보임
        };
        this.toggleShowPassword  = this.toggleShowPassword.bind(this);
    }

    toggleShowPassword(){
        this.setState({ secureInput: !this.state.secureInput});
        //클릭시 ture false 반대로 계속 바뀌는 토글이벤트
        //ture - 비번 안보임
        //false - 비번 보임
    }

    render(){
        const {labelText, labelTextSize, labelColor,textColor,borderBottomColor,inputType,customStyle}  = this.props;
        const { secureInput } =this.state;
        const fontSize = labelTextSize || 14;
        const color = labelColor || colors.white;
        const inputColor = textColor || colors.white;
        const borderBottom = borderBottomColor || 'transparent';
        return (
            <View style= {[customStyle, styles.wrapper]}>
                <Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
                {inputType === 'password' ?
                <TouchableOpacity
                    style={styles.showButton}
                    onPress = {this.toggleShowPassword}
                >
                    
                    <Text style={styles.showButtonText}>{secureInput ? 'Show' : 'Hide'}</Text>
                </TouchableOpacity>
                : null
                }
                <TextInput
                    autoCorrect={false}
                    style={[{color:inputColor, borderBottomColor: borderBottom},styles.inputField]}
                    secureTextEntry = {secureInput}
                />
            </View>
        );
    }
}

//propTypes이거 뭐지?
InputField.protoTypes = {

    //
    labelText: PropTypes.string.inRequired,
    labelTextSize : PropTypes.number,
    labelColor:PropTypes.string,
    inputColor:PropTypes.string,
    borderBottomColor: PropTypes.string,
    inputType : PropTypes.string.isRequried,
    customStyle:PropTypes.object,
};

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
    },
    label:{
        fontWeight: '700',
        marginBottom: 10,
    },
    inputField:{
        borderBottomWidth:1,
        paddingTop: 5,
        paddingBottom:5,
    },
    showButton:{
        position: 'absolute',
        right: 0,
    },
    showButtonText:{
        color:colors.white,
        fontWeight: '700'
        
    }
});