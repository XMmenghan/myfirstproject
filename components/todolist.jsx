import { View, Text } from 'react-native'
import React from 'react'

function Todolist({ tasks }) {
  return (
    <View>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </View>
  )
}

export default Todolist;