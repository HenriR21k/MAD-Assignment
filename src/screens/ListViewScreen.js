import { View, StyleSheet, Text, FlatList, Pressable, ScrollView } from "react-native";
import { useContext, useEffect, useReducer } from "react";
import NavigationButton from "../components/NavigationButton";
import { MaterialIcons } from '@expo/vector-icons';
import { actionTypes } from "../helpers/actionTypes";
import ItemContext from "../contexts/ItemContext";


const ListViewScreen = ({ navigation }) => {
  const { state, remove } = useContext(ItemContext);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('Add')}>
          <MaterialIcons name="add" size={24} color="black" />
        </Pressable>
      )
    })
  }, [state]);

  return (

  <View>
    
      <FlatList
        data={state}
        keyExtractor={(e) => e.id.toString()}
        renderItem={({item}) => {

          return (
            <Pressable onPress={() => navigation.navigate('View', {
              id: item.id,
              compN: item.compN,
              date: item.date.toUTCString()

              })}>
          
              <View style={styles.itemContainer}>
                {/*DateHere*/}
                <Text style={styles.dateText}>
                    {item.date.toLocaleDateString()}
                </Text>

                <Text style={styles.titleText}>{item.compN}</Text>
                <Pressable
                  onPress={() => {
                  remove(item.id)
                  }}>
                  <MaterialIcons name="delete" size={38} color="black" />
                </Pressable>

                <MaterialIcons name="update" size={38} onPress={() => {
                  navigation.navigate('Edit', {id: item.id});
                  }} />
             
              </View>
            </Pressable>  
          );
        }} 
        ListFooterComponent={
        <NavigationButton screenName="Home" navigation={navigation} />
        }
        />
  </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 15,
    padding: 15,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
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
  }
});



export default ListViewScreen;