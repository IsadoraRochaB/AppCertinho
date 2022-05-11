import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowSearch: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 20,
    margin: 40,
    alignItems: 'center',
    width: "80%",
    height: 45,
  },
  input: {
    width: "80%"
  },
  icon: {
    fontSize: 24,
    padding: 5,
    color: colors.grey,
  }
})

export default styles;