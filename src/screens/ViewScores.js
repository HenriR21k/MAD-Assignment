import { View, StyleSheet, Text, FlatList, Pressable, ScrollView, Button, SafeAreaView } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component-2';
import { useContext, useEffect, useReducer } from "react";
import NavigationButton from "../components/NavigationButton";
import { MaterialIcons } from '@expo/vector-icons';
import { actionTypes } from "../helpers/actionTypes";
import ItemContext from "../contexts/ItemContext";



const ViewScores = ({ navigation, route }) => {

  const { state } = useContext(ItemContext);
  const id = route.params.item;
  const item = state.find((e) => e.id===id)
   
  
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('AddScore', {Game: item.id})}>
          <MaterialIcons name="add" size={32} color="black" />
        </Pressable>
        
      
      )
    })
  }, [state]);

  var total1 = 0;
  var total2 = 0;

  for (var i=0; i<item.score.length; i++)
  {
  total1 += item.score[i].Team1Score
  }

  for (var i=0; i<item.score.length; i++)
  {
  total2 += item.score[i].Team2Score
  }

  let compInfo = [
    [`Team 1: ${item.T1}`, `Team 2: ${item.T2}`],
    [`Total: ${total1}`, `Total: ${total2}`]]

    const getHeader = () => {
      return (
      <View>
        <Button title="Edit a Score" onPress={() => navigation.navigate('EditScore', {Game: item.id})}></Button>
        <Button title="Delete a Score" onPress={() => navigation.navigate('DeleteScore', {Game: item.id})}></Button>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#000000' }}>
            <Rows data={compInfo} textStyle={styles.text} />
          </Table>
      </View>)
  };


  
  return (

    <View>
      

      <FlatList
        data={item.score}
        keyExtractor={(e) => e.End.toString()}
        renderItem={({item}) => {

        

          let tableData = [
            [`Score: ${item.Team1Score}`, `End: ${item.End}`, `Score: ${item.Team2Score}`]]
  
          return (
          
          <View>
            
              {
              <Table style={styles.borderStyling}>
                <View style={styles.itemContainer}>
                  <Rows  
                  data={tableData} textStyle={styles.text} />
                </View>
              </Table>
              }
          </View>
          );
        }} 
        ListHeaderComponent={getHeader}
        
        />        
      
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 5,
    padding: 5,
    borderBottomWidth: 1,
   
   
  },
  dateContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  titleText: {
    fontSize: 16,
    paddingLeft: 15,
    flex: 1,
    alignSelf: 'flex-start'
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  borderStyling : { borderWidth: 2, borderColor: '#000000' }
});


export default ViewScores;


