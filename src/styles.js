import {Dimensions, StyleSheet} from 'react-native';

export const searchbarStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 9,
    margin: 11,
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 10,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    fontSize: 17,
    marginLeft: 5
  },
});

export const cityStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 5,
    margin: 3,
    paddingVertical: 7,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    marginLeft: 5,
    fontWeight: "bold"
  },
});

export const detailStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10
  },
  name: {
    fontWeight: "bold",
    fontSize: 19
  },
  address: {
    fontSize: 17
  },
  phone: {

  },
});
