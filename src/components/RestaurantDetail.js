import React from 'react';
import { View, Text, ImagePropTypes } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { detailStyle } from '../styles';

const RestaurantDetail = (props) => {

  function showPrice(length) {
    const priceLabel = [];
    for(let i = 0; i < length; i ++){
      priceLabel.push(<Icon key={i} name="currency-usd" size={20} color="#777"/>)
    }
    return priceLabel;
  }

  return (
    <Modal
      isVisible={props.isVisible}
      onBackdropPress = {props.backPress}
      swipeDirection = "down"
      onSwipeComplete = {props.backPress}
    >
      <View style={detailStyle.container}>
        <Text style={detailStyle.name}>{props.restaurant.name}</Text>
        <Text style={detailStyle.address}>
          {props.restaurant.area} / {props.restaurant.address}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {showPrice(props.restaurant.price)}
        </View>

      </View>
    </Modal>
  );
};

export { RestaurantDetail };
