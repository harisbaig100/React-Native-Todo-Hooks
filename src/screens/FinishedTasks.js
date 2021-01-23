import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import AppBar from '../components/AppBar';
import TodoList from '../components/TodoList';

export default function FinishedTasks({route}) {
  const {completedTasks} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <AppBar isFinishedScreen />

      <ScrollView>
        {completedTasks.map((todo) => (
          <TodoList key={todo.key} todo={todo} isFinishedScreen />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'white',
    width: '100%',
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
});
