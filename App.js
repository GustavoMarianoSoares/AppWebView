import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const ImovelGuide = 'https://imovelguide.com.br'
const Google = 'https://google.com'

export default function App() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto"/>

        <View style={{width: '100%', height: '100%'}}>
          <WebView
            source={{ uri:ImovelGuide}}
            onLoad={console.log('Loaded')}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
