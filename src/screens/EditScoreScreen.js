import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, ScrollView} from 'react-native';
import NavigationButton from "../components/NavigationButton";
import ItemContext from "../contexts/ItemContext";


const EditScoreScreen = ({navigation, route}) => {
  
  const { update, state } = useContext(ItemContext);
  const id = route.params.Game;
  const item = state.find((e) => e.id===id) 
  //console.log(item.score)

  //Contains all scores from a Game
  const [newScore, setNewScore] = useState(item.score/*Put in returned value from console.log */)
  const [endID, setEndID] = useState()
  const [newTeam1Score, setNewTeam1Score] = useState()
  const [newTeam2Score, setNewTeam2Score] = useState()


  function pain() {

    if (newTeam1Score > newTeam2Score)
    {
      const arr = item.score.map(obj => {
        if (obj.End === parseInt(endID)) {
          
          return {...obj, Team1Score: parseInt(newTeam1Score), Team2Score: 0};
    
        }
        return obj;
      });
      item.score = arr;
      return item.score
    }
    else if (newTeam2Score > newTeam1Score)
    {
      const arr = item.score.map(obj => {
        if (obj.End === parseInt(endID)) {
          
          return {...obj, Team1Score: 0, Team2Score: parseInt(newTeam2Score)};
    
        }
        return obj;
      }); 
      item.score = arr;
      return item.score
    }
  
  

  }


    return (
  <View>
    
          <Text style={styles.textLabel}>Enter the End Number you want to edit:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder=""
            onChangeText={(text) => {setEndID(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 1 Score:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder=""
            onChangeText={(text) => {setNewTeam1Score(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 2 Score:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder=""
            onChangeText={(text) => {setNewTeam2Score(text); }}
          />


          <Button title="Submit Item" onPress={() => {
            
           var question = pain();
            
            update(item.id, item.compN, item.rinkNo, item.T1, item.T2, item.T1P1, item.T1P2, item.T1P3, item.T1P4, item.T1Skip, item.T2P1, item.T2P2, item.T2P3, item.T2P4, item.T2Skip,
              item.date, question, () => navigation.pop());
          }} />

  </View>
    )
}

  
  

  const styles = StyleSheet.create({
    TextInput: {
      fontSize: 20,
      padding: 10,
      margin: 5,
      borderWidth: 1,
    },
    textLabel: {
      fontSize: 18,
      paddingLeft: 10,
      marginTop: 10,
    },
  });

  export default EditScoreScreen; 