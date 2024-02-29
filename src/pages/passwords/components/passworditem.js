import { Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

export function PasswordItem({ data, removePassword }) {
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <Pressable
      onLongPress={removePassword}
      style={styles.container}>
      <Text
        style={showPassword ? (styles.showtext) : (styles.hidetext)}>
        {data}
      </Text>
      <TouchableOpacity onPress={togglePassword}>
        {showPassword ? (
          <Ionicons name="eye" size={24} color="#FFF" />
        ) : (
          <Ionicons name="eye-off" size={24} color="#FFF" />
        )}
      </TouchableOpacity>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  showtext: {
    color: "#FFF"
  },
  hidetext: {
    backgroundColor: '#D9D9D9',
    width: 180,
    color: "#D9D9D9",
    height: 10
  }
})