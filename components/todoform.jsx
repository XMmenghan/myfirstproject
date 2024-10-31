import { View, Text } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native'

const Todoform = () => {
  return (
    <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
        />
        <Button title="Add" />
      </View>
  )
}

const styles = {
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  input: {
    flex: 1,
    marginRight: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
  },
}

export default Todoform;