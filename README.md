//TODO APP RN


import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';

const Profile = () => {
  const [input, setInput] = useState(''); // Holds the input value
  const [items, setItems] = useState([]); // Holds the list of items

  const ChangeValue = (value) => {
    setInput(value); // Updates the input field
  };

  const Function1 = () => {
    if (input !== '') {
      setItems([...items, input]); // Adds new item to the list
      setInput(''); // Resets input field
    }
  };

  const DeleteObj = (index) => {
    setItems(items.filter((_, i) => i !== index)); // Deletes the selected item
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter the TODO"
          value={input}
          onChangeText={ChangeValue}
        />
        <TouchableOpacity style={styles.submitButton} onPress={Function1}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.todoItem}>
            <Text style={styles.itemText}>{item}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => DeleteObj(index)}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: '#ff6666',
    padding: 10,
    borderRadius: 50,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 12,
  },
});
