import { View, Text } from 'react-native'
import React from 'react'

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

export default Todoform