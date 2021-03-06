import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Dimensions } from "react-native";
import CardView from 'react-native-cardview'

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator, passwordValidator } from "../core/utils";
import { loginUser } from "../api/auth-api";
import Toast from "../components/Toast";

const screen = Dimensions.get('window');
const mobileWidth = screen.width;
const mobileHeight = screen.height;

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
    };

    return (
        <Background>
            {/* <BackButton goBack={() => navigation.navigate("HomeScreen")} /> */}
            <CardView
                cardElevation={4}
                maxCardElevation={4}
                cornerRadius={10}
                style={styles.cardViewStyle}
            >
                <View style={styles.cardElement}>
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

                    <Button loading={loading} mode="contained" onPress={_onLoginPressed}>
                        Login
                    </Button>

                    <View style={styles.row}>
                        <Text styles={styles.label}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
                            <Text style={styles.link}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                    <Toast message={error} onDismiss={() => setError("")} />
                </View>
            </CardView>
        </Background>
    );
};

export default memo(LoginScreen);

const styles = StyleSheet.create({
    cardViewStyle:{
        // width: 300, 
        // height: 550,
        width: mobileWidth - (mobileWidth/5), 
        height: mobileHeight - (mobileHeight/5),
        backgroundColor: theme.colors.bgTitle,
        backgroundColor: theme.colors.bgTitle,
        opacity: .8
    },
    cardElement: {
        padding:10, 
        opacity:1, 
        justifyContent: 'center'
    },
    forgotPassword: {
      width: "100%",
      alignItems: "flex-end",
      marginBottom: 24,
    },
    row: {
      flexDirection: "row",
      marginTop: 4
    },
    label: {
      color: theme.colors.secondary
    },
    link: {
      fontWeight: "bold",
      color: theme.colors.primary
    }
  });