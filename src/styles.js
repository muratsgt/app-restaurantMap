import {Dimensions, StyleSheet} from 'react-native';

export const searchbarStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 3,
    paddingHorizontal: 9,
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 10,
    alignSelf: "center",
    position: "absolute",
    top: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    fontSize: 17
  },
});

export const cityStyle = StyleSheet.create({
  container: {

  },
  text: {

  },
});

export const detailStyle = StyleSheet.create({
  container: {

  },
  name: {

  },
  address: {

  },
  phone: {

  },
});
