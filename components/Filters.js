import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import data from "../assets/data.json";

const Filters = ({ setFilterOpen, filterOpen, setFilteredData }) => {
  return (
    <View style = {{
        flex : 1,
        alignItems : "center",
        justifyContent : "flex-start",
    }}>
      <Text>Filters</Text>
      <TouchableOpacity onPress={() => setFilterOpen(false)}
        style = {{
            width : 100,
            height : 50,
            backgroundColor : "red",
            alignItems : "center",
            justifyContent : "center",
            borderRadius : 10,
            margin : 10,
        }}
      >
        <Text style = {{
            color : "white",
            fontSize : 20,
        }}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        width : 150, 
        height : 50,
        backgroundColor : "black",
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 10,
        margin : 10,

      }}
        onPress = {() => {
            setFilteredData(data.filter((item) => item.grade == "A"));
            setFilterOpen(false);
        }}
      >
        <Text style = {{
            color : "white",
            fontSize : 20,
        }}>Grade A</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        width : 150, 
        height : 50,
        backgroundColor : "black",
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 10,
        margin : 10

      }}
      onPress = {() => {
        setFilteredData(data.filter((item) => item.grade === "B"));
        setFilterOpen(false);
    }}
      >
        <Text style = {{
            color : "white",
            fontSize : 20,
        }}>Grade B</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        width : 150, 
        height : 50,
        backgroundColor : "black",
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 10,
        margin : 10

      }}
        onPress={()=>{
            setFilteredData(data.filter((item) => item.annual_income < 30000));
            setFilterOpen(false);
        }}
      >
        <Text style = {{
            color : "white",
            fontSize : 20,
        }}>Income 30000+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filters;
