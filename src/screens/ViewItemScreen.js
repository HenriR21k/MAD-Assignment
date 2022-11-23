import React from "react";
import { View, StyleSheet, Text, FlatList, Pressable, ScrollView, Button, } from 'react-native';
import { useContext, useState, useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import ItemContext from "../contexts/ItemContext";
import NavigationButton from "../components/NavigationButton";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component-2';


const ViewItemScreen = ({navigation, route}) => {
  
  const {id,date } = route.params;
  const {state, update} = useContext(ItemContext);
  const currentEntry = state.find((e) => e.id === id);
 
  const [compN, setCompN] = useState(currentEntry.compN);
  const [rinkNo, setRinkNo] = useState(currentEntry.rinkNo);
  const [T1, setT1] = useState(currentEntry.T1);
  const [T1P1, setT1P1] = useState(currentEntry.T1P1);
  const [T1P2, setT1P2] = useState(currentEntry.T1P2);
  const [T1P3, setT1P3] = useState(currentEntry.T1P3);
  const [T1P4, setT1P4] = useState(currentEntry.T1P4);
  const [T1Skip, setT1Skip] = useState(currentEntry.T1Skip);
  const [T2, setT2] = useState(currentEntry.T2);
  const [T2P1, setT2P1] = useState(currentEntry.T2P1);
  const [T2P2, setT2P2] = useState(currentEntry.T2P2);
  const [T2P3, setT2P3] = useState(currentEntry.T2P3);
  const [T2P4, setT2P4] = useState(currentEntry.T2P4);
  const [T2Skip, setT2Skip] = useState(currentEntry.T2Skip);

  
    
    let tableData = [
      [currentEntry.T1P1, '1', currentEntry.T2P1],
      [currentEntry.T1P2, '2', currentEntry.T2P2],
      [currentEntry.T1P3, '3', currentEntry.T2P3],
      [currentEntry.T1P4, '4', currentEntry.T2P4],
      [currentEntry.T1Skip, 'Skip', currentEntry.T2Skip],
    ]
   

  
 
  return (
    <View>
      {/* */}
      <Text>Competition Name: {currentEntry.compN}</Text>

      {/*Together */}
      <Text>Date: {new Date(date).toLocaleDateString()}</Text>
      <Text>Rink No: {currentEntry.rinkNo}</Text>

      
      <Text>Team 1: {currentEntry.T1}</Text>
      <Text>Team 2: {currentEntry.T2}</Text>


      <Table borderStyle={{ borderWidth: 2, borderColor: '#000000' }}>
          <Rows data={tableData} textStyle={styles.text} />
      </Table>

      <Button 
      title = "View all Scores"
      onPress={() => navigation.navigate('ViewScores', { item: currentEntry.id})}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});



export default ViewItemScreen;