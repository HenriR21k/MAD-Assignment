import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button, ScrollView} from 'react-native';
import NavigationButton from "../components/NavigationButton";
import ItemContext from "../contexts/ItemContext";

const AddItemScreen = ({navigation}) => {
  const { create } = useContext(ItemContext);
  const [compN, setCompN] = useState("");
  const [rinkNo, setRinkNo] = useState("");
  const [T1,setT1] = useState("");
  const [T1P1, setT1P1] = useState("");
  const [T1P2, setT1P2] = useState("");
  const [T1P3, setT1P3] = useState("");
  const [T1P4, setT1P4] = useState("");
  const [T1Skip, setT1Skip] = useState("");
  const [T2, setT2] = useState("");
  const [T2P1, setT2P1] = useState("");
  const [T2P2, setT2P2] = useState("");
  const [T2P3, setT2P3] = useState("");
  const [T2P4, setT2P4] = useState("");
  const [T2Skip, setT2Skip] = useState("");

  const [scores, setScores] = useState(null);

  const [score, setScore] = useState(null);

    return (
      <View>
      {
        useEffect(() => {
          setScore(
              {
              "EndNo": 0,
              "Team1Score": 0,
              "Team2Score": 0,
              },
        )},[])
      }

      <ScrollView>
          <Text style={styles.textLabel}>Enter Competition Name:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder="Type competition name here" value={compN}
            onChangeText={(text) => {setCompN(text); }}
          />

          <Text style={styles.textLabel}>Enter Rink No:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder="Type rink number here" value={rinkNo}
            onChangeText={(text) => {setRinkNo(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 1:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder="Team name" value={T1}
            onChangeText={(text) => {setT1(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 1 Player 1 Name:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder="Type competition name here" value={T1P1}
            onChangeText={(text) => {setT1P1(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 1 Player 2 Name:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder="Type competition name here" value={T1P2}
            onChangeText={(text) => {setT1P2(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 1 Player 3 Name:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder="Type competition name here" value={T1P3}
            onChangeText={(text) => {setT1P3(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 1 Player 4 Name:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder="Type competition name here" value={T1P4}
            onChangeText={(text) => {setT1P4(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 1 Skip Name:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder="Type competition name here" value={T1Skip}
            onChangeText={(text) => {setT1Skip(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 2 Name:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder="Type competition name here" value={T2}
            onChangeText={(text) => {setT2(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 2 Player 1:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder="Type competition name here" value={T2P1}
            onChangeText={(text) => {setT2P1(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 2 Player 2:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder="Type competition name here" value={T2P2}
            onChangeText={(text) => {setT2P2(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 2 Player 3:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder="Type competition name here" value={T2P3}
            onChangeText={(text) => {setT2P3(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 2 Player 4:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder="Type competition name here" value={T2P4}
            onChangeText={(text) => {setT2P4(text); }}
          />

          <Text style={styles.textLabel}>Enter Team 2 Skip:</Text>
          <TextInput style={styles.TextInput} multiline
            placeholder="Type competition name here" value={T2Skip}
            onChangeText={(text) => {setT2Skip(text); }}
          />



          <Button title="Submit Item" onPress={() => {
            create(compN, rinkNo, T1, T2, T1P1, T1P2, T1P3, T1P4, T1Skip, T2P1, T2P2, T2P3, T2P4, T2Skip, score, () => navigation.pop());
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

export default AddItemScreen;