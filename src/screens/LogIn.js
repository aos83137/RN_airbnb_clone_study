import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
//prop-types : 타입 확인 라이브러리
import  Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    ScrollView ,
    StyleSheet,
    KeyboardAvoidingView,
    Dimensions,
} from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/form/inputField';

export default class LogIn extends Component {
    render(){
        return (
            <KeyboardAvoidingView 
                style={styles.wrapper}
                >
                <View
                    style={styles.scrollViewWrapper}
                >
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>
                            Log In
                        </Text>
                        <InputField
                            labelText={"EMAIL ADDRESS"}
                            labelTextSize={14}
                            labelColor={colors.white}
                        />
                        <InputField
                            labelText={"PASS WORD"}
                            labelTextSize={14}
                            labelColor={colors.white}
                        />
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const screenHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    wrapper:{
        display : 'flex',
        flex: 1,
        backgroundColor:colors.green01,
    },
    scrollViewWrapper:{
        marginTop:70,
        flex:1,
    },
    scrollView:{
        height: screenHeight,
        paddingLeft :30,
        paddingRight: 30,
        paddingTop: 20,
        flex:1,
    },
    loginHeader:{
        fontSize:30,
        color: colors.white,
        fontWeight: '300',
        marginBottom:40,
    },

});