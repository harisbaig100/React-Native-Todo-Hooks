import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import AppBar from '../components/AppBar';
import TodoList from '../components/TodoList';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen({navigation}) {
  const [title, setTitle] = useState('');

  const [finishedTasks, setfinishedTasks] = useState([]);

  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (title.length > 0) {
      // push task to array
      setTodos([...todos, {key: Date.now(), name: title, isChecked: false}]);
      // reset texfield
      setTitle('');
    }
  };

  const goToFinishedScreen = () => {
    if (finishedTasks.length > 0) {
      navigation.navigate('FinishedTasks', {completedTasks: finishedTasks});
    } else {
      Alert.alert('No tasks completed');
    }
  };

  const checkTodo = (id) => {
    // update todo array and finished task array with checked tasks
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) {
          todo.isChecked = !todo.isChecked;
          if (todo.isChecked) {
            setfinishedTasks([
              ...finishedTasks,
              {key: Date.now(), name: todo.name, isChecked: true},
            ]);
          }
        }
        return todo;
      }),
    );
  };

  const deleteTodo = (id) => {
    // delete a specific todo
    setTodos(
      todos.filter((todo) => {
        return todo.key !== id;
      }),
    );
  };

  useEffect(() => {
    console.log(todos.length, 'Number of objects in array');
  }, [todos]);

  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <AppBar />
      <View style={styles.todo}>
        <TextInput
          placeholder="Add a todo"
          value={title}
          onChangeText={(value) => setTitle(value)}
          style={styles.textbox}
        />
        <Icon
          name="add-circle"
          style={styles.trailing}
          size={35}
          color="#666666"
          onPress={() => addTodo()}
        />
      </View>

      <ScrollView>
        {todos.map((todo) => (
          <TodoList
            key={todo.key}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => goToFinishedScreen()}>
        <Text style={styles.buttonText}>See Finished Tasks</Text>
      </TouchableOpacity>
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
  },
  todo: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbox: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 15,
    margin: 10,
    width: '78%',
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 13,
    padding: 15,
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 16,
  },
});
