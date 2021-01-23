import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function AppBar(props) {
  return (
    <View style={styles.appBar}>
      <Text style={styles.heading}>
        {props.isFinishedScreen ? 'Finished Tasks' : 'Todo App'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: 'white',
    color: 'white',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  heading: {
    color: 'black',
    fontSize: 30,
    fontWeight: '400',
  },
});
