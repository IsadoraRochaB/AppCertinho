import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({

container: {
    backgroundColor: colors.grey1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    height: 306,
    width: 355    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.black,
    marginBottom: 20,
  },
  formRow: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  icon: {
    fontSize: 24,
    color: colors.grey,
    padding: 10
  },
  input: {
    fontSize: 18,
    padding: 5,
    width: "80%"
  }
})

export default styles