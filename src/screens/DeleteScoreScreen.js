import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, ScrollView} from 'react-native';
import NavigationButton from "../components/NavigationButton";
import ItemContext from "../contexts/ItemContext";


const DeleteScoreScreen = ({navigation, route}) => {
  
  const { update, state } = useContext(ItemContext);
  const id = route.params.Game;
  const item = state.find((e) => e.id===id) 
  
  const [currentScore, setCurrentScore] = useState(item.score);
  const [delScore, setDelScore] = useState()

  //filter the current score/ or splice with the delScore as the ID.
  function deleteScore() {
    currentScore.splice(currentScore.findIndex(e => e.End === delScore),1);
  }

    return (
  <View>
          <Button title="Delete Score" onPress={() => {
            deleteScore();
            update(item.id, item.compN, item.rinkNo, item.T1, item.T2, item.T1P1, item.T1P2, item.T1P3, item.T1P4, item.T1Skip, item.T2P1, item.T2P2, item.T2P3, item.T2P4, item.T2Skip,
              item.date, currentScore, () => navigation.pop());
          }} />

          <Text>This will delete the last end</Text>
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

  export default DeleteScoreScreen; 