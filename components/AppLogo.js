import React from 'react'
import { Image } from 'react-native-elements'

const AppLogo = () => (
  <Image
    source={require('../assets/playstore.png')}
    style={{ width: 250, height: 225 }}
  />
)

export default AppLogo