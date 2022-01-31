import React from "react";
import {View, SafeAreaView, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, Dimensions } from "react-native";
import places from "../Places";
import Icon from "react-native-vector-icons/MaterialIcons"

const width = Dimensions.get("window").width / 2 - 30;

const HomeScreen = (props)=>{

    const { navigation, onAdd, noOffavItems} = props;
    const [catergoryIndex, setCategoryIndex] = React.useState(0);
  
    const categories = ["Popular","normal"];

    const CategoryList = ()=> {
      return(
        <View style = {styles.categoryContainer}>
            {categories.map((item,index)=>(
                <TouchableOpacity 
                    key = {index}
                    activeOpacity = {0.8}
                    onPress = {()=>{
                        setCategoryIndex(index)
                    }}
                >
                    <Text style={[
                              styles.categoryText,
                               styles.categoryTextSelected,
                    ]}>
                        {item}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const Card = ({place})=>{
    return(
        <View style = {{
            flex:1
         }}>
            <TouchableOpacity 
                activeOpacity = {0.8}
                onPress = {()=>
                    navigation.navigate("Place", place)
                }
            >
                <View style = {styles.card}>
                    <View style = {{
                        alignItems:"flex-end"
                    }} >
                <View
                style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                    }}
                ></View>
                </View>
                <View
                style={{
                height: 100,
                alignItems: "center",
                }}
                >
                    <Image 
                    source = {place.img}
                    style={{ flex: 1, resizeMode: "contain" }}
                    />

                </View>
                    <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
                        {place.name}
                    </Text>
                    <View
                    style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 5,
                    }}
                    >
              
                </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    backgroundColor: "grey",
                    width: 100,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  
                  onPress={() => onAdd(place)}
                  
                  >
                    <Text style={{ fontSize: 22, color: "black", fontWeight: "bold" }}>
                        Add To Favorites
                    </Text>
                </TouchableOpacity>
        </View>
    )
}

return(
    <SafeAreaView style = {{
        flex:1,
        paddingHorizontal:20,
        backgroundColor:"white",
    }}>
        <View style = {styles.header}>
            <View>
            <Text style={{ fontSize: 38, color: "red", fontWeight: "bold" }}>
                Atharva's travel explore
            </Text>
            </View>
            <Icon
            name = "favorite"
            size = {40}
            color = "red"
            onPress = {()=>{
                navigation.navigate("Favorite")
            }}
            />
             <Text
            style={{
             color: "red",
            width: 1.5,
             }}
            > {noOffavItems} </Text>
        </View>
        <View style={{ marginTop: 30, flexDirection: "row" }}>
            <View  style={styles.searchContainer}>
        
                <Icon name = "search"  size = {25}  style={{ marginLeft: 20 }} />                    
                <TextInput placeholder = "search" style={styles.input} />
            </View>
            <View style={styles.sortBtn}>
            <Icon name="sort" size={30} color="white" />
            </View>
        </View>

        <CategoryList/>

        <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
        marginTop: 10,
        paddingBottom: 50,
        }}
        numColumns={2}
        data={places}
        renderItem={({ item }) => {
        return <Card place={item} />;
    }}
  />


    </SafeAreaView>
)
} 
const styles = StyleSheet.create({
    categoryContainer: {
      flexDirection: "row",
      marginTop: 30,
      marginBottom: 20,
      justifyContent: "space-between",
    },
    categoryText: { fontSize: 16, color: "grey", fontWeight: "bold" },
    categoryTextSelected: {
      color: "pink",
      paddingBottom: 5,
      borderBottomWidth: 2,
      borderColor: "pink",
    },
    card: {
      height: 225,
      backgroundColor: "#F1F1F1",
      width,
      marginHorizontal: 2,
      borderRadius: 10,
      marginBottom: 20,
      padding: 15,
    },
    header: {
      marginTop: 30,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    searchContainer: {
      height: 50,
      backgroundColor: "#F1F1F1",
      borderRadius: 10,
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      fontSize: 18,
      fontWeight: "bold",
      flex: 1,
      color: "black",
    },
    sortBtn: {
      marginLeft: 10,
      height: 50,
      width: 50,
      borderRadius: 10,
      backgroundColor: "pink",
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default HomeScreen ;