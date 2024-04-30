import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '../constants'

const SearchInput = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
      <View className='space-x-4 w-full h-16 px-4 bg-black-100 border-black-200 rounded-2xl focus:border-secondary flex-row items-center'>
        <TextInput className='mt-0.5 flex-1 text-white font-pregular text-base' value={value} placeholder='Search for a video topic' placeholderTextColor='#7b7b8b' onChangeText={handleChangeText} secureTextEntry={title === 'Password' && !showPassword} />
            <TouchableOpacity>
                <Image source={icons.search} className='w-5 h-5' resizeMode='contain' />
            </TouchableOpacity>
      </View>
    
  )
}

export default SearchInput