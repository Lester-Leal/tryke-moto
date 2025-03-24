import * as React from "react";
import * as RN from "react-native";
import * as Location from "expo-location";
import { useRouter } from "expo-router";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import SolidButton from "@/components/Buttons/SolidButton";

export default function Home() {
    const router = useRouter();

    // const [region, setRegion] = React.useState({
    //     latitude: 14.5995, // Default to Manila
    //     longitude: 120.9842,
    //     latitudeDelta: 0.01,
    //     longitudeDelta: 0.01,
    // });

    // React.useEffect(() => {
    //     requestLocationPermission();
    // }, []);

    // const requestLocationPermission = async () => {
    //     let { status } = await Location.requestForegroundPermissionsAsync();
    //     if (status === "granted") {
    //         getUserLocation();
    //     } else {
    //         console.warn("Location permission denied");
    //     }
    // };

    // const getUserLocation = async () => {
    //     try {
    //         let location = await Location.getCurrentPositionAsync({
    //             accuracy: Location.Accuracy.High,
    //         });
    //         setRegion({
    //             latitude: location.coords.latitude,
    //             longitude: location.coords.longitude,
    //             latitudeDelta: 0.01,
    //             longitudeDelta: 0.01,
    //         });
    //     } catch (error) {
    //         console.error("Error fetching location:", error);
    //     }
    // };

    return (
        <RN.View style={styles.container}>
            {/* <MapView
                provider={PROVIDER_DEFAULT}
                style={styles.map}
                region={region}
                showsUserLocation
            >
                <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
            </MapView> */}
            <RN.View style={styles.buttonPosition}>
                <SolidButton title="Request a Ride" onPress={() => router.push("../requestride")} />
            </RN.View>
        </RN.View>
    );
}

const styles = RN.StyleSheet.create({
    container: { flex: 1 },
    map: { flex: 1 },
    buttonPosition: {
        position: "absolute",
        bottom: 100,
        alignSelf: "center",
        width: "50%",
    },
});
