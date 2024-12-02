"use client";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Todoform from "./components/todoform";
import Todolist from "./components/todolist";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.container}>
      <div>
        <h1>My Task Lists</h1>
        <StatusBar style="auto" />
        <Todolist tasks={tasks} />
        <Todoform addTask={addTask} />
      </div>
    </View>
  );
}
export default App;