import * as React from "react";
import * as RN from "react-native";
import { useRouter } from 'expo-router';

import CustomView from "@/components/CustomView";
import OTPInputOutlined from "@/components/Inputs/OTPInputOutlined";
import SolidButton from "@/components/Buttons/SolidButton";

export default function OTPVerification() {
    const [otp, setOtp] = React.useState('');

    const router = useRouter();
    return (
        <>
            <CustomView>
                <RN.View style={{ alignItems: 'center' }}>
                    <RN.Text style={styles.title}>OTP Verification</RN.Text>
                    <RN.Text style={styles.subTitle}>Enter the OTP sent to your phone number</RN.Text>
                </RN.View>

                <RN.View style={styles.inputContainer}>
                    <OTPInputOutlined inputs={6} value={otp} onChangeText={setOtp} />
                </RN.View>
                <RN.View style={{ marginTop: 250 }}>
                    <RN.TouchableOpacity  style={{ alignItems: 'center', marginTop: 20 }}>
                        <RN.Text style={styles.resendCode}>Didn't receive the code? Resend Code</RN.Text>
                    </RN.TouchableOpacity>
                    <SolidButton title="VERIFY OTP" onPress={() => router.push('../homepage/(tabs)')} />
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
        marginTop: 20,
    },
    resendCode: {
        fontSize: 14,
        color: "#777",
        marginBottom: 20,
        textDecorationLine : 'underline'
    }
});