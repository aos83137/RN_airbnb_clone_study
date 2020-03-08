import React, { Component } from 'react';
import colors from '../styles/colors'
import { 
    StyleSheet,
    Text, 
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RoundedButton from '../components/buttons/RoundedButton';
export default class LoggedOut extends Component{
    onFacebookPress(){
        alert('Facebook button pressed');
    }
    onCreateAccountPress(){
        alert('Create Account button pressed');
    }
    onMoreeOptionsPress(){
        alert('More optioins button pressed');
    }
    render() {
        return (
            <View style={styles.wrapper}> 
                <View style={styles.welcomeWrapper}>
                    <Image 
                        style={styles.logo}
                        source={require('../img/airbnb-logo.png')} 
                    />
                <Text style={styles.welcomeText}> welcome to Aribnb</Text>
                <RoundedButton 
                    text = "Continue with Facebook"
                    textColor = {colors.green01}
                    background = {colors.white}
                    icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
                    handleOnPress={this.onFacebookPress}
                />
                <RoundedButton 
                    text = "Create Account"
                    textColor = {colors.white}
                    handleOnPress={this.onCreateAccountPress}
                />
                <TouchableHighlight 
                    style={styles.moreOptionsButton}
                    onPress={this.onMoreeOptionsPress}
                >
                    <Text style={styles.moreOptionsButtonText}>More options</Text>
                </TouchableHighlight>
                <View style={styles.termsAndConditions}>
                    <Text style={styles.termsText}>By tapping Continue, create Account or More options,</Text>
                    <Text style={styles.termsText}>I agree to Airbnb's</Text>
                    <TouchableHighlight style={styles.linkButotn}>
                        <Text style={styles.termsText}>Terms of Service</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>,</Text>
                    <TouchableHighlight style={styles.linkButotn}>
                        <Text style={styles.termsText}>Payments Terms of Service</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>,</Text>
                    <TouchableHighlight style={styles.linkButotn}>
                        <Text style={styles.termsText}>Privacy Policy</Text>
                    </TouchableHighlight>
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex : 1,
        display:'flex',
        backgroundColor : colors.green01,
    },
    welcomeWrapper:{
        flex:1,
        display:'flex',
        marginTop: 30,
        padding:20,
    },
    welcomeText:{
        fontSize:30,
        color:colors.white,
        fontWeight:'300',
        marginBottom: 40,
    },
    logo : {
        width:50,
        height: 50,
        marginTop : 50,
        marginBottom : 40,
    },
    facebookButtonIcon:{
        color: colors.green01,
        position: 'relative', 
        left: 20,
        zIndex: 8,
    },
    moreOptionsButton:{
        marginTop: 10,
    },
    moreOptionsButtonText:{
        color: colors.white,
        fontSize:15,
    },
    termsAndConditions:{
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    termsText:{
        color: colors.white,
        fontSize:12,
        fontWeight: '600',
    },
    linkButotn:{
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    },
});

