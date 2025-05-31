import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from "react";
import axios from "axios";

import { CameraView, CameraType, useCameraPermissions} from "expo-camera";

export default function ScanScreen() {

  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  async function manualScan() {
    try {
      console.log("Manually Scanned");
      const res = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/fastapi`);
      console.log(res.data);
    } catch (error) {
      console.error("Scan failed:", error);
    }
  }

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
        <CameraView style={styles.camera} facing={facing}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={manualScan}>
              <Text style={styles.text}>Scan</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});