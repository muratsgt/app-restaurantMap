import React from 'react';
import { View, Text, ImagePropTypes, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { detailStyle } from '../styles';

const RestaurantDetail = (props) => {

  function showPrice(length) {
    const priceLabel = [];
    for (let i = 0; i < length; i++) {
      priceLabel.push(<Icon key={i} name="currency-usd" size={25} color="#777" />)
    }
    return priceLabel;
  }

  return (
    <Modal
      isVisible={props.isVisible}
      style={{ justifyContent: "flex-end", margin: 0, marginHorizontal: 10 }}
      onBackdropPress={props.backPress}
      swipeDirection="down"
      onSwipeComplete={props.backPress}
    >
      <View style={detailStyle.container}>
        <View style={detailStyle.line} />
        <View style={detailStyle.line} />
        <Text style={detailStyle.name}>{props.restaurant.name}</Text>
        <Text style={detailStyle.address}>
          {props.restaurant.area} / {props.restaurant.address}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon name="phone" size={20} />
            <Text style={detailStyle.phone}>+{props.restaurant.phone}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            {showPrice(props.restaurant.price)}
          </View>
        </View>

        <ScrollView horizontal >
          {[1,2,3,4].map((i)=> 
            <View key={i} style={{backgroundColor: "blue", margin: 5, width: 200, height: 100}}>
                <Text style={{fontSize: 30}}>i</Text>
            </View>
          )}
        </ScrollView>

        <Text style={detailStyle.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>

      </View>
    </Modal>
  );
};

export { RestaurantDetail };
