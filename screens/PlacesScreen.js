import React from "react";
import {View, SafeAreaView, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
const PlacesScreen = ({ navigation, route }) => {

    const place = route.params;
    
    return(
        <SafeAreaView style = {{
            flex:1,
            paddingHorizontal:20,
            backgroundColor:"white",
        }}>
            <View style = {styles.header} >
            <Icon
                name = "arrow-back" 
                size = {29}
                onPress = {()=>{
                navigation.goBack()
                }}
                />
                <Icon
                name = "favorite"
                size = {40}
                color = "red"
                />
                <View style={styles.imageContainer}>
                    <Image
                    source = {place.img}
                    style={{ resizeMode: "contain", flex: 1 }}
                    />
                </View>
                <View style={styles.detailsContainer}>
                    <View style={{
                         marginLeft: 20,
                         marginTop: 20,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                     <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                    {place.name}
                     </Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 5 }}>
          <Text style={{ fontSize: 23, fontWeight: "bold" }}> is one of the best places to visit in India</Text>
          <Text
            style={{
              color: "grey",
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}
          >
            {place.placeAddres}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >


            <View style={styles.buyBtn}>
              <TouchableOpacity>
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                Add to Favorite
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
                </View>
                
               
            </View>
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    header: {
      paddingHorizontal: 20,
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    imageContainer: {
      flex: 0.45,
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    detailsContainer: {
      flex: 0.55,
      backgroundColor: "#F1F1F1",
      marginHorizontal: 7,
      marginBottom: 7,
      borderRadius: 20,
      marginTop: 30,
      paddingTop: 30,
    },
    line: {
      width: 25,
      height: 2,
      backgroundColor: "black",
      marginBottom: 5,
      marginRight: 3,
    },
    buyBtn: {
      width: 130,
      height: 50,
      backgroundColor: "blue",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
    },
  });

export default PlacesScreen ;