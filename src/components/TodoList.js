import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SwipeItem, SwipeButtonsContainer} from 'react-native-swipe-item';

export default function TodoList(props) {
  const leftButton = (
    <SwipeButtonsContainer style={styles.swipeButton}>
      <Icon
        name={props.todo.isChecked ? 'check-circle' : 'radio-button-unchecked'}
        size={25}
        color="#666666"
        onPress={() => props.checkTodo(props.todo.key)}
      />
    </SwipeButtonsContainer>
  );

  const rightButton = (
    <SwipeButtonsContainer style={styles.swipeButton}>
      <Icon
        name="delete-forever"
        size={28}
        color="#666666"
        onPress={() => props.deleteTodo(props.todo.key)}
      />
    </SwipeButtonsContainer>
  );
  //console.log(props.todo, "logging props");
  return (
    <View style={[styles.listTile]}>
      {props.isFinishedScreen ? (
        <SwipeItem
          style={styles.button}
          disableSwipeIfNoButton
          swipeContainerStyle={styles.swipeContentContainerStyle}>
          <Icon
            name={'check-circle'}
            style={styles.leading}
            size={20}
            color="#666666"
            onPress={() => props.checkTodo(props.todo.key)}
          />
          <Text style={[styles.title, styles.lineThrough]}>
            {props.todo.name}
          </Text>
        </SwipeItem>
      ) : (
        <SwipeItem
          style={styles.button}
          swipeContainerStyle={styles.swipeContentContainerStyle}
          leftButtons={leftButton}
          rightButtons={rightButton}>
          <Icon
            name={
              props.todo.isChecked ? 'check-circle' : 'radio-button-unchecked'
            }
            style={styles.leading}
            size={20}
            color="#666666"
            onPress={() => props.checkTodo(props.todo.key)}
          />
          <Text
            style={[
              styles.title,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                color: props.todo.isChecked ? 'grey' : 'black',
                textDecorationLine: props.todo.isChecked
                  ? 'line-through'
                  : 'none',
              },
            ]}>
            {props.todo.name}
          </Text>
          <Icon
            name="delete"
            style={styles.trailing}
            size={20}
            color="#666666"
            onPress={() => props.deleteTodo(props.todo.key)}
          />
        </SwipeItem>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listTile: {
    alignSelf: 'center',
    width: '95%',
  },
  leading: {
    alignSelf: 'center',
    marginRight: 20,
  },
  title: {
    alignSelf: 'center',
    width: '60%',
    fontSize: 18,
  },
  trailing: {
    alignSelf: 'center',
    marginLeft: 20,
  },
  button: {
    width: '96%',
    height: 65,
    alignSelf: 'center',
    marginVertical: 5,
  },
  swipeContentContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#e3e3e3',
    borderWidth: 1,
  },
  swipeButton: {
    alignSelf: 'center',
    aspectRatio: 1,
    flexDirection: 'column',
    padding: 10,
  },
  lineThrough: {
    color: 'grey',
    textDecorationLine: 'line-through',
  },
});
