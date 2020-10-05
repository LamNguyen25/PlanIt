import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Dimensions } from "react-native";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import { colors } from "../core/theme";
import { emailValidator, passwordValidator } from "../core/utils";
import { loginUser } from "../api/auth-api";
import Toast from "../components/Toast";



const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: " "});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const _onLoginPressed = async () => {
        if(loading) return;

        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if(emailError || passwordError) {
            setEmail({...email, error: emailError });
            setPassword({...password, error: passwordError });
            return;
        }

        setLoading(true);

        const response = await loginUser({
            email: email.value,
            password: password.value
        });

        if(response.error) {
            setError(response.error);
        }
        
        setLoading(false);
        console.log(response.error);
    };

    return (
        <Background style={styles.container}>
            {/* <BackButton goBack={() => navigation.navigate("HomeScreen")} /> */}
            <View style={styles.topContainer}/>
            <View style={styles.centerContainer}> 
                <View style={styles.cardViewStyle}>
                    <Logo />

                    <Header>Welcome back.</Header>

                    <TextInput
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
                        label="Password"
                        returnKeyType="done"
                        value={password.value}
                        onChangeText={text => setPassword({ value: text, error: "" })}
                        error={!!password.error}
                        errorText={password.error}
                        secureTextEntry
                        autoCapitalize="none"
                    />

                    <View style={styles.forgotPassword}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("ForgotPasswordScreen")}
                        >
                            <Text style={styles.label}>Forgot your password?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        loading={loading} 
                        onPress={_onLoginPressed}
                    >
                        <Text style={{color:'#ffffff', fontWeight: 'bold' }}> Login</Text>
                    </TouchableOpacity>

                    <View style={styles.row}>
                        <Text styles={styles.label}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
                            <Text style={styles.link}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                    <Toast message={error} onDismiss={() => setError("")} />
                </View>
   
            </View>
            <View style={styles.bottomContainer}/>
        </Background>
    );
};

export default memo(LoginScreen);

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
        flex: 12,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    cardViewStyle:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: colors.bgTitle,
        opacity: .9
    },
    bottomContainer: {
        flex: 1,
        width: '100%',
    },
    
    forgotPassword: {
      width: "100%",
      alignItems: "flex-end",
      marginBottom: 24,
    },
    row: {
        flexDirection: "row", 
        marginVertical: 20,
        alignContent: 'center',
    },
    label: {
      color: colors.secondary
    },
    link: {
      fontWeight: "bold",
      color: colors.primary
    },
    button: {
        width: "100%",
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 5,
    },
  });