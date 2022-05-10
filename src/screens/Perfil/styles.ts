import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({

  container: {
    backgroundColor: colors.lightGrey,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    padding: 5
  },

  local: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  title: {
    padding: 5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.black,
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    padding: 5,
    width: "80%"
  }



})

export default styles