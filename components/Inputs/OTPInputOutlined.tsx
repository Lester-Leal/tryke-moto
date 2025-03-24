import React from 'react';
import * as ReactNative from 'react-native';

// OTP Input Props
interface OTPInputProps {
    inputs: number;
    value: string;
    onChangeText: (text: string) => void;
}

export default function OTPInputOutlined({
    inputs,
    value,
    onChangeText,
}: OTPInputProps) {
    return (
        <>
            <ReactNative.View style={styles.otpContainer}>
                {Array(inputs)
                    .fill(null)
                    .map((_, index) => (
                        <ReactNative.TextInput
                            key={index}
                            style={styles.otpInput}
                            keyboardType="number-pad"
                            maxLength={1}
                            value={value[index] || ''}
                            onChangeText={(text) => {
                                const otp = value.split('');
                                otp[index] = text;
                                onChangeText(otp.join(''));
                            }}
                        />
                    ))}
            </ReactNative.View>
        </>
    );
}

const styles = ReactNative.StyleSheet.create({
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#337B09',
        textAlign: 'center',
        fontSize: 16,
    },
});