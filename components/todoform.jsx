import { View, Text } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native'



const Todoform = ({addTask}) => {
  const [taskText, setTaskText] = React.useState('');
  return (
    <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add" 
         onPress={() => addTask(taskText)}/>
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