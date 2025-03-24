import * as React from "react";
import * as RN from "react-native";
import { useRouter } from 'expo-router';

import CustomView from "@/components/CustomView";
import PasswordInputOutlined from "@/components/Inputs/OutlinedPasswordInput";
import TextInputOutlined from "@/components/Inputs/OutlinedTextInput";

import SolidButton from "@/components/Buttons/SolidButton";

export default function SignUp() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = React.useState(false);
    const router = useRouter();

    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);


    return (
        <>
            <CustomView>
                <RN.View style={{ alignItems: 'center' }}>
                    <RN.Text style={styles.title}>Sign Up</RN.Text>
                    <RN.Text style={styles.subTitle}>Create an Account</RN.Text>
                </RN.View>

                <RN.View style={styles.inputContainer}>
                    <TextInputOutlined title="First Name" value={firstName} onChangeText={setFirstName} />
                    <TextInputOutlined title="Last Name" value={lastName} onChangeText={setLastName} />
                    <PasswordInputOutlined title="Password" value={password} onChangeText={setPassword} isPasswordVisible={isPasswordVisible} togglePasswordVisibility={togglePasswordVisibility} />
                    <PasswordInputOutlined title="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} isPasswordVisible={isConfirmPasswordVisible} togglePasswordVisibility={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} />
                </RN.View>

                {/* CONFIRM SOLID BUTTON */}
                <RN.View style={{ marginTop: 100 }}>
                    <SolidButton title="CREATE ACCOUNT" onPress={() => router.push('/auth/otp-verification')} />
                    <RN.TouchableOpacity style={{ alignItems: 'center', marginTop: 20 }} onPress={() => router.push('/auth/signin')}>
                        <RN.Text>Already have an account? Sign In</RN.Text>
                    </RN.TouchableOpacity>
                </RN.View>
            </CustomView>
        </>
    );
}

const styles = RN.StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    subTitle: {
        fontSize: 16,
        color: "#777",
        marginBottom: 20,
    },
    inputContainer: {
        marginTop: 25,
    },
});