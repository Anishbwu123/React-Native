import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
const Web = () => {
  return <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />;
}
export default Web;