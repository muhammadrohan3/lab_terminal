import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

const DataTable = ({ data }) => {
  const [state, setState] = useState({
    tableHead: Object.keys(data[0]),
    tableData: data.map((item) => Object.values(item)),
  });
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    setState({
      tableHead: Object.keys(data[0]),
      tableData: data.map((item) => Object.values(item)),
    });
  }, [data]);

  useEffect(() => {
    setDataList(data);
  }, [data]);
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        paddingTop: 30,
        width: "100%",
      }}
    >
      <ScrollView horizontal>
        
          <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }} style = {
            {
                width : "100%",
                flex : 1,
            }
          }>
            <Row
              data={state.tableHead}
              style={styles.head}
              textStyle={styles.text}
              widthArr={[
                60, 70, 80, 90, 120, 90, 130, 150, 150, 150, 130, 180, 120,
              ]}
            />
            <Rows
              data={state.tableData}
              textStyle={styles.text}
              widthArr={[
                60, 70, 80, 90, 120, 90, 130, 150, 150, 150, 130, 180, 120,
              ]}
            />
          </Table>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 0.7, padding: 16, paddingTop: 30, backgroundColor: "#fff", height : "100%" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});
export default DataTable;
