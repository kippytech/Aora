import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomBtn = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`} disabled={isLoading} onPress={handlePress} activeOpacity={0.7}>
        <Text className={`${textStyles} text-primary font-psemibold text-lg`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn