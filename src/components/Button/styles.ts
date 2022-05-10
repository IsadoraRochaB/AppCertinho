import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  buttonBlack: {
    backgroundColor: colors.black,
    borderRadius: 5,
    margin: 10
  },
  buttonGrey: {
    backgroundColor: colors.grey,
    borderRadius: 5,
    margin: 10
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontSize: 18
  }
})

export default styles