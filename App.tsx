import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Canvas, RoundedRect, Circle} from '@shopify/react-native-skia';

function SkiaRoundedButton() {
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

function RoundedButton() {
  const width = 96;
  const height = 48;

  return (
    <View style={{width, height, backgroundColor: 'blue', borderRadius: 12}} />
  );
}

function SkiaCircle() {
  const r = 64;

  return (
    <Canvas style={{width: r, height: r}}>
      <Circle cx={r / 2} cy={r / 2} r={r / 2} color="blue" />
    </Canvas>
  );
}

function ViewCircle() {
  const r = 64;

  return (
    <View
      style={{
        width: r,
        height: r,
        backgroundColor: 'blue',
        borderRadius: r / 2,
      }}
    />
  );
}

function Screen1() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <View
        style={{
          marginBottom: 10,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}>
        <Text
          style={{
            fontSize: 21,
            fontWeight: 'bold',
          }}>
          Skia Rounded Buttons
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 8, marginBottom: 36}}>
        <SkiaRoundedButton />
        <SkiaRoundedButton />
        <SkiaRoundedButton />
      </View>

      <View
        style={{
          marginBottom: 10,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}>
        <Text
          style={{
            fontSize: 21,
            fontWeight: 'bold',
          }}>
          Regular View Rounded Buttons
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 8}}>
        <RoundedButton />
        <RoundedButton />
        <RoundedButton />
      </View>
    </SafeAreaView>
  );
}

function Screen2() {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          marginBottom: 10,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}>
        <Text
          style={{
            fontSize: 21,
            fontWeight: 'bold',
          }}>
          Skia Circles
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 8, marginBottom: 36}}>
        <SkiaCircle />
        <SkiaCircle />
        <SkiaCircle />
        <SkiaCircle />
      </View>

      <View
        style={{
          marginBottom: 10,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}>
        <Text
          style={{
            fontSize: 21,
            fontWeight: 'bold',
          }}>
          Regular View Circles
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 8}}>
        <ViewCircle />
        <ViewCircle />
        <ViewCircle />
        <ViewCircle />
      </View>
    </SafeAreaView>
  );
}

function App(): JSX.Element {
  const [activeScreen, setActiveScreen] = useState(1);

  if (activeScreen === 1) {
    return <Screen1 />;
  } else if (activeScreen === 2) {
    return <Screen2 />;
  }
}

export default App;
