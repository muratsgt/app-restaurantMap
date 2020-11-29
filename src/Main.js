import Axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { City, RestaurantDetail, SearchBar } from './components';

// custommarker
// custommapstyle

let originList = [];

const Main = (props) => {

  const [cities, setCities] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [selectedRest, setSelectedRest] = useState({});
  const mapRef = useRef(null);

  const fetchCities = async () => {
    const { data } = await Axios.get("https://opentable.herokuapp.com/api/cities");
    setCities(data.cities);
    originList = [...data.cities];
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const onSearch = (tex) => {
    const tempList = originList.filter((itm) => itm.toLowerCase().includes(tex.toLowerCase()));
    setCities(tempList);
  }

  const onCitySelect = async (city) => {
    const { data: { restaurants } } = await Axios.get("https://opentable.herokuapp.com/api/restaurants?city=" + city);
    setRestaurants(restaurants);

    const restLocs = restaurants.map((itm) => {
      return {
        latitude: itm.lat,
        longitude: itm.lng
      }
    });

    mapRef.current.fitToCoordinates(restLocs, {
      edgePadding: {
        top: 100,
        right: 50,
        bottom: 50,
        left: 50
      }
    });
  }

  const onRestSelect = (res) => {
    setSelectedRest(res);
    setModalFlag(true);
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        showsUserLocation={true}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {restaurants.map((r, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: r.lat, longitude: r.lng }}
            title={r.name}
            description={"Tel: " + r.phone}
            onPress={()=>onRestSelect(r)}
          />
        ))}
      </MapView>

      <View style={{ position: "absolute" }}>
        <SearchBar onChange={onSearch} />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={cities}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <City city={item} onSelect={() => onCitySelect(item)} />}
        />
      </View>

      <RestaurantDetail 
        isVisible = {modalFlag}
        restaurant = {selectedRest}
        backPress = {()=>setModalFlag(false)}
      />

    </View>
  );
};

export default Main;
