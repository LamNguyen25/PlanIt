import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import CardView from 'react-native-cardview'

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import {
  emailValidator,
  passwordValidator,
  nameValidator
} from "../core/utils";
import { signInUser } from '../api/auth-api';
import Toast from "../components/Toast";


const screen = Dimensions.get('window');

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState({ value: "", error: "" });
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const _onSignUpPressed = async () => {
        if(loading) return;

        const nameError = nameValidator(name.value);
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if(emailError || passwordError || nameError) {
            setName({ ...name, error: nameError });
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }

        setLoading(true);

        const response = await signInUser({
            name: name.value,
            email: email.value,
            password: password.value
        });

        if(response.error) {
            setError(response.error);
        }
        console.log(error);
        setLoading(false);
    };

    return (
            <Background style={styles.container}>
            {/* <BackButton goBack={() => navigation.navigate("HomeScreen")} /> */}
            <View style={styles.topContainer}/>
            <View style={styles.centerContainer}> 
                <View style={styles.cardViewStyle}>
                    <Logo />
                    <Header>Create Account</Header>

                    <TextInput 
                        style={{height: 40}}
                        label="Name"
                        returnKeyType="next"
                        value={name.value}
                        onChangeText={text => setName({ value: text, error: "" })}
                        error={!!name.error}
                        errorText={name.error}
                    />

                    <TextInput
                        style={{height: 40}}
                        label="Email"
                        returnKeyType="next"
                        value={email.value}
                        onChangeText={text => setEmail({ value: text, error: "" })}
                        error={!!email.error}
                        errorText={email.error}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                    />

                    <TextInput
                        style={{height: 40}}
                        label="Password"
                        returnKeyType="done"
                        value={password.value}
                        onChangeText={text => setPassword({ value: text, error: "" })}
                        error={!!password.error}
                        errorText={password.error}
                        secureTextEntry
                        autoCapitalize="none"
                    />

                    {/* <Button
                        loading={loading}
                        mode="contained"
                        onPress={_onSignUpPressed}
                        style={styles.button}
                    >
                        Sign Up
                    </Button> */}
                    <TouchableOpacity
                        style={styles.button}
                        loading={loading} 
                        onPress={_onSignUpPressed}
                    >
                        <Text style={{color:'#ffffff', fontWeight: 'bold' }}> Sign Up</Text>
                    </TouchableOpacity>

                    <View style={styles.row}>
                        <Text style={styles.label}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                            <Text style={styles.link}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <Toast message={error} onDismiss={() => setError("")} />
                </View>
      
            </View>
            <View style={styles.bottomContainer}/>
        </Background>
        
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1
      },
      topContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      centerContainer: {
        flex: 13,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 15,
      },
      cardViewStyle:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: theme.colors.bgTitle,
        borderRadius: 5,
        opacity: .9
      },
      bottomContainer: {
        flex: 1,
        width: '100%'
      },
    label: {
        color: theme.colors.secondary,
    },
    button: {
        marginVertical: 10, 
    },
    row: {
        flexDirection: "row", 
        marginVertical: 20,
        alignContent: 'center',
    },
    link: {
        fontWeight: "bold",
        color: theme.colors.primary
     },
     button: {
        width: "100%",
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
    },
});

export default memo(RegisterScreen);