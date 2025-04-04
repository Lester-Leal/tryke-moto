import * as React from "react";
import * as RN from "react-native";
import { useRouter } from 'expo-router';

import CustomView from "@/components/CustomView";
import PasswordInputOutlined from "@/components/Inputs/OutlinedPasswordInput";
import TextInputOutlined from "@/components/Inputs/OutlinedTextInput";
import Ionicons from '@expo/vector-icons/Ionicons';

import UploadAvatar from "@/components/UploadAvatar";
import NumberInputOutlined from "@/components/Inputs/NumberInputOutlined";

import SolidButton from "@/components/Buttons/SolidButton";

export default function SignUpDriver() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = React.useState(false);
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const router = useRouter();

    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);


    return (
        <>
            <CustomView>
                {/* Back */}
                <RN.TouchableOpacity style={{ marginTop: 50, marginLeft: 5, flexDirection: 'row', alignItems: 'center' }} onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={24} color="#000" />
                    <RN.Text style={{ fontSize: 16, color: "#000", marginLeft: 5 }}>Back</RN.Text>
                </RN.TouchableOpacity>

                {/* Scroll view */}
                <RN.ScrollView style={styles.inputContainer} showsVerticalScrollIndicator={false}>
                    <RN.View style={{ alignItems: 'center' }}>
                        <RN.Text style={styles.title}>Sign Up</RN.Text>
                        <RN.Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</RN.Text>
                    </RN.View>
                    <RN.View style={{ alignItems: 'center', marginBottom: 20 }}>
                        <UploadAvatar size={100} borderRadius={50} style={{ marginBottom: 10 }} />
                    </RN.View>

                    <TextInputOutlined value={firstName} title="First Name" onChangeText={setFirstName} />
                    <TextInputOutlined value={lastName} title="Last Name" onChangeText={setLastName} />
                    <PasswordInputOutlined value={password} title="Password" onChangeText={setPassword} isPasswordVisible={isPasswordVisible} togglePasswordVisibility={togglePasswordVisibility} />
                    <PasswordInputOutlined value={confirmPassword} title="RE-TYPE PASSWORD" onChangeText={setConfirmPassword} isPasswordVisible={isConfirmPasswordVisible} togglePasswordVisibility={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} />
                    <NumberInputOutlined title="Enter Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} maxLength={10} />

                    <RN.View style={{ marginTop: 20 }}>
                        <SolidButton title="CONFIRM" onPress={() => router.push('/auth/otp-verification')} />
                    </RN.View>
                </RN.ScrollView>
            </CustomView>
        </>
    );
}

const styles = RN.StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 16,
        color: "#777",
        marginBottom: 20,
    },
    inputContainer: {
        marginTop: 5,
    },
});