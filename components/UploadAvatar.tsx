import * as React from "react";
import * as RN from "react-native";
import * as ImagePicker from "expo-image-picker";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface UploadAvatarProps {
    size: number;
    borderRadius?: number;
    style?: RN.StyleProp<RN.ViewStyle>;
}

// UploadAvatar Component
export default function UploadAvatar({ size, borderRadius = size / 2, style }: UploadAvatarProps) {
    const [image, setImage] = React.useState<string | null>(null);

    // Function to pick an image from the gallery
    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            alert("Permission to access gallery is required!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1], // Keep square aspect ratio
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <RN.View style={[styles.container, style]}>
            {/* Avatar Container */}
            <RN.TouchableOpacity onPress={pickImage} activeOpacity={0.7}>
                <RN.View style={[styles.avatarContainer, { width: size, height: size, borderRadius }]}>
                    {/* Display Image or Placeholder */}
                    {image ? (
                        <RN.Image source={{ uri: image }} style={[styles.avatar, { borderRadius }]} />
                    ) : (
                        <RN.View style={[styles.avatarPlaceholder, { borderRadius }]}>
                            <MaterialCommunityIcons name="account" size={size * 0.5} color="#999" />
                        </RN.View>
                    )}
                </RN.View>
            </RN.TouchableOpacity>

            {/* Camera Icon - Positioned Outside the Circle */}
            <RN.TouchableOpacity style={[styles.iconContainer, { right: size * 0.02, top: size * 0.02 }]} onPress={pickImage}>
                <MaterialCommunityIcons name="camera-plus" size={24} color="#337B09" />
            </RN.TouchableOpacity>

            {/* Upload Text */}
            <RN.Text style={styles.text}>Upload Profile Picture</RN.Text>
        </RN.View>
    );
}

// Styles
const styles = RN.StyleSheet.create({
    container: {
        alignItems: "center",
        position: "relative",
    },
    avatarContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ddd", // Default background
        overflow: "hidden",
    },
    avatar: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    avatarPlaceholder: {
        width: "100%",
        height: "100%",
        backgroundColor: "#eee",
        justifyContent: "center",
        alignItems: "center",
    },
    iconContainer: {
        position: "absolute",
        // backgroundColor: "#337B09",
        borderRadius: 15,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        marginTop: 8,
        fontSize: 14,
        color: "#555",
        textAlign: "center",
    },
});
