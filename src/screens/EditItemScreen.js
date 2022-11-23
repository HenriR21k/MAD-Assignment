import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, ScrollView} from 'react-native';
import NavigationButton from "../components/NavigationButton";
import ItemContext from "../contexts/ItemContext";

const EditItemScreen = ({navigation, route}) => {
    const {id} = route.params;
    const {state, update} = useContext(ItemContext);
    const currentEntry = state.find((e) => e.id === id);
    const [compN, setCompN] = useState(currentEntry.compN);
    const [rinkNo, setRinkNo] = useState(currentEntry.rinkNo);
    const [T1,setT1] = useState(currentEntry.T1);
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
    const [score, setScore] = useState(currentEntry.score);


    return (
      <View>
        <ScrollView>
  
          <Text style={styles.textLabel}>Enter Competition Name:</Text>
          <TextInput style={styles.TextInput} 
            placeholder="Type competition name here" value={compN}
            onChangeText={(text) => {setCompN(text); }}
          />

          <Text style={styles.textLabel}>Enter Rink Number:</Text>
          <TextInput style={styles.TextInput} 
            placeholder="Type rink number here" value={rinkNo}
            onChangeText={(text) => {setRinkNo(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 1:</Text>
          <TextInput style={styles.TextInput} 
            placeholder="Team name" value={T1}
            onChangeText={(text) => {setT1(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 1 Player 1 Name:</Text>
          <TextInput style={styles.TextInput} 
            placeholder="Type competition name here" value={T1P1}
            onChangeText={(text) => {setT1P1(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 1 Player 2 Name:</Text>
          <TextInput style={styles.TextInput} 
            placeholder="Type competition name here" value={T1P2}
            onChangeText={(text) => {setT1P2(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 1 Player 3 Name:</Text>
          <TextInput style={styles.TextInput} 
            placeholder="Type competition name here" value={T1P3}
            onChangeText={(text) => {setT1P3(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 1 Player 4 Name:</Text>
          <TextInput style={styles.TextInput} 
            placeholder="Type competition name here" value={T1P4}
            onChangeText={(text) => {setT1P4(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 1 Skip Name:</Text>
          <TextInput style={styles.TextInput} 
            placeholder="Type competition name here" value={T1Skip}
            onChangeText={(text) => {setT1Skip(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 2 Name:</Text>
          <TextInput style={styles.TextInput} 
            placeholder="Type competition name here" value={T2}
            onChangeText={(text) => {setT2(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 2 Player 1:</Text>
          <TextInput style={styles.TextInput} 
            placeholder="Type competition name here" value={T2P1}
            onChangeText={(text) => {setT2P1(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 2 Player 2:</Text>
          <TextInput style={styles.TextInput} 
            placeholder="Type competition name here" value={T2P2}
            onChangeText={(text) => {setT2P2(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 2 Player 3:</Text>
          <TextInput style={styles.TextInput} 
            placeholder="Type competition name here" value={T2P3}
            onChangeText={(text) => {setT2P3(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 2 Player 4:</Text>
          <TextInput style={styles.TextInput} 
            placeholder="Type competition name here" value={T2P4}
            onChangeText={(text) => {setT2P4(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 2 Skip:</Text>
          <TextInput style={styles.TextInput} 
            placeholder="Type competition name here" value={T2Skip}
            onChangeText={(text) => {setT2Skip(text); }}
          />

          <Button title="Submit Item" onPress={() => {
            update(currentEntry.id, compN, rinkNo, T1, T2, T1P1, T1P2, T1P3, T1P4, T1Skip, T2P1, T2P2, T2P3, T2P4, T2Skip,
              currentEntry.date, currentEntry.score, () => navigation.pop());
          }} />
          <NavigationButton screenName="Home" navigation={navigation} />
        </ScrollView>
      </View>
    );
};

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

export default EditItemScreen;