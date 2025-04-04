import * as React from "react";
import * as RN from "react-native";
import { useRouter } from 'expo-router';
import * as Location from 'expo-location';
import CustomView from "@/components/CustomView";
import PasswordInputOutlined from "@/components/Inputs/OutlinedPasswordInput";
import TextInputOutlined from "@/components/Inputs/OutlinedTextInput";
import SolidButton from "@/components/Buttons/SolidButton";
import OutlinedButton from "@/components/Buttons/OutlinedButton";

export default function SignIn() {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const router = useRouter();

    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

    const handleSignIn = async () => {
        // Request location permission
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Location permission is required to proceed.');
            return;
        }

        // 🚀 Define test accounts
        const passengerTestEmail = "passenger@example.com";
        const driverTestEmail = "driver@example.com";

        // 🚦 Check role based on inputted phone/email
        if (phoneNumber === passengerTestEmail) {
            router.push('../homepage/(tabs)'); // Passenger Dashboard
        } else if (phoneNumber === driverTestEmail) {
            router.push('../drivers-page/(tabs)'); // Driver Dashboard
        } else {
            alert("Invalid credentials!"); // Default error message
        }
    };


    return (
        <CustomView primary>
            <RN.View style={styles.whiteBox}>
                <RN.View style={{ alignItems: 'center' }}>
                    <RN.Image source={require('@/assets/images/tryke moto.png')} style={styles.logo} />
                </RN.View>
                <RN.View style={styles.inputContainer}>
                    <TextInputOutlined placeholder="Enter Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} />
                    <PasswordInputOutlined placeholder="Enter your password" value={password} onChangeText={setPassword} isPasswordVisible={isPasswordVisible} togglePasswordVisibility={togglePasswordVisibility} />
                </RN.View>
                <RN.View style={{ alignItems: 'center' }}>
                    <RN.TouchableOpacity>
                        <RN.Text style={styles.forgotText}>Forgot Password?</RN.Text>
                    </RN.TouchableOpacity>
                </RN.View>
                <RN.View style={styles.buttonContainer}>
                    <SolidButton title="Log In" onPress={handleSignIn} /> {/* Updated onPress */}
                    <OutlinedButton title="Create an Account" onPress={() => router.push('/auth/signup')} />
                </RN.View>
                <RN.View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <RN.TouchableOpacity onPress={() => router.push('/auth/signup-driver')}>
                        <RN.Text style={styles.forgotText}>Register as Tryke-Moto Driver</RN.Text>
                    </RN.TouchableOpacity>
                </RN.View>
            </RN.View>
        </CustomView>
    );
}

const styles = RN.StyleSheet.create({
    whiteBox: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 10,
        gap: 10,
    },
    buttonContainer: {
        alignItems: "center",
        marginTop: 30,
        marginBottom: 5,
        gap: 10,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    forgotText: {
        color: '#729CFF',
        fontSize: 12,
        textDecorationLine: 'underline',
    },
});