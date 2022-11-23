import { View, Text, Image, Button, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import ListItem from "../components/listItem";
import NavigationButton from "../components/NavigationButton";

const IndexScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
          <StatusBar />
          <Text style={styles.heading}>Johnsons sports club</Text>
          
          <NavigationButton screenName="Score Card" navigation={navigation} />
          <ScrollView horizontal={false}>
          <Text style={styles.contents}>This application is intended to be used as a Score Card 
          for local clubs as a means to be more environmentally friendly</Text>
          </ScrollView>
           
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
  },
    heading: {
      fontSize: 30, 
      fontWeight: 'bold', 
      color: 'green'
  },
    contents: {
      fontSize: 16,
      color: 'black'
    }
});

export default IndexScreen;