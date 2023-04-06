import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Canvas, RoundedRect} from '@shopify/react-native-skia';

function RoundedButton() {
  const width = 96;
  const height = 48;

  return (
    <Canvas style={{width, height}}>
      <RoundedRect
        x={0}
        y={0}
        width={width}
        height={height}
        r={12}
        color="blue"
      />
    </Canvas>
  );
}

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <RoundedButton />
        <RoundedButton />
        <RoundedButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    // Causing the clippping bug of the 3rd button.
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
});

export default App;
