import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import data from "../assets/data.json";
import Table from "./Table";
import db from "../firebase";
import { Picker } from "@react-native-picker/picker";

import {
  getDatabase,
  ref,
  onValue,
  query,
  orderByKey,
  push,
  set,
} from "firebase/database";
import Filters from "./Filters";

const DataView = () => {
  const dbRef = ref(db, "viewType");
  const newRef = ref(db, "viewType");
  const [viewData, setViewData] = useState([]);
  const [viewType, setViewType] = useState("");
  const [pageNo, setPageNo] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterData, setFilterData] = useState([]);
  useEffect(()=>{
    console.log(filterData);
    if(filterData.length == 0){
        setViewData(data);
        return;
    };
    setViewData(filterData);
  }, [filterData, filterOpen])
  useEffect(() => {
    onValue(query(dbRef, orderByKey()), (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setViewType(data);
    });
  }, []);
  
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "fit-content",
      }}
    >
      {filterOpen ? (
        <><Filters  setFilterOpen={setFilterOpen} filterOpen={filterOpen} filterData = {filterData} setFilteredData={setFilterData} /></>
      ) : (
        <>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity
              style={{
                width: "30%",
                height: 30,
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30,
                margin: 5,
              }}
              onPress={() => {
                if (viewType == "table") {
                  set(newRef, "list");
                  setViewType("list");
                } else {
                  set(newRef, "table");
                  setViewType("table");
                }
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                }}
              >
                {viewType}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "30%",
                height: 30,
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30,
                margin: 5,
              }}
              onPress={() => {
                setFilterOpen(true);
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                }}
              >
                Filters
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "black",
              }}
              onPress={() => {
                if (pageNo == 0) return;

                setPageNo(pageNo - 1);
              }}
            >
              Prev
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "black",
              }}
            >
              {pageNo + 1}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "black",
              }}
              onPress={() => {
                setPageNo(pageNo + 1);
              }}
            >
              Next
            </Text>
          </View>
          {viewType == "table" ? (
            <Table data={viewData.slice(0 + pageNo * 10, 12 + pageNo * 10)} />
          ) : (
            <View style = {{
                width : "100%",
                alignItems : "center",
                flex : 1,
            }}>
              <FlatList
              style = {{
                    width : "90%",
              }}
                data={viewData.slice(0 + pageNo * 10, 12 + pageNo * 10)}
                renderItem={({ item }) => (
                  <View
                    style={{
                      width: "90%",

                      justifyContent: "space-between",
                      alignItems: "center",
                      
                      borderWidth: 1,
                      borderColor: "black",
                      margin: 5,
                    }}
                  >
                    {Object.keys(item).map((key) => {
                        return (
                            <View style = {{
                                flexDirection : "row",
                                justifyContent : "space-between",
                                width : "100%",
                                paddingHorizontal : 10,
                                paddingVertical : 5,
                            }}>
                                <Text style = {{
                                    fontSize : 16,
                                    fontWeight : "bold",
                                }}>{key}</Text>
                                <Text style = {{
                                    fontSize : 16,
                                }}>{item[key]}</Text>
                            </View>
                        )
                    })}

                  </View>
                )}
              />
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default DataView;
