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
import NextArrowButton from '../components/buttons/NextArrowButton'
export default class LogIn extends Component {

    handleNextButton(){
        alert('Next Button');
    }

    render(){
        return (
            <KeyboardAvoidingView 
                style={styles.wrapper}
                //behavior 키보드에 숨겨진 다음 버튼을 수정해야합니다 
                behavior="padding"
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
                            textColor={colors.white}
                            borderBottomColor = {colors.white}
                            inputType="email"
                            customStyle={{ marginBottom : 30 }}
                        />
                        <InputField
                            labelText={"PASS WORD"}
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor = {colors.white}
                            inputType="password"
                            customStyle={{ marginBottom : 30 }}
                        />
                    </ScrollView>
                    <View style={styles.nextButton}>
                        <NextArrowButton
                            handleNextButton={this.handleNextButton}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    wrapper:{
        display : 'flex',
        flex: 1,
        backgroundColor:colors.green01,
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
        padding: 0,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    scrollView:{
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
    nextButton:{
        //flex-end 이거하면 스크롤해도 밑에 고정임
        alignItems: 'flex-end',
        right : 20,
        bottom: 20,
    }

});
