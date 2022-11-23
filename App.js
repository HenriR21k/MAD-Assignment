import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import AddItemScreen from './src/screens/AddItemScreen';
import EditItemScreen from './src/screens/EditItemScreen';
import ListViewScreen from './src/screens/ListViewScreen';
import ViewItemScreen from './src/screens/ViewItemScreen';
import AddScoreScreen from './src/screens/AddScoreScreen';
import EditScoreScreen from './src/screens/EditScoreScreen';
import DeleteScoreScreen from './src/screens/DeleteScoreScreen';

import { ItemProvider } from './src/contexts/ItemContext';
import ViewScores from './src/screens/ViewScores';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <ItemProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
              name="View"
              component={ViewItemScreen}
              options={{title: "View Score Card"}}
            />
            <Stack.Screen
              name="Score Card"
              component={ListViewScreen}
              options={{ title: "View all Score Cards"}}
            />
            <Stack.Screen 
              name="Home"
              component={IndexScreen}
              options={{ title: "Score Card App" }}
            />
            <Stack.Screen
            name='Add'
            component={AddItemScreen}
            options={{ title: "Add a new Score Card"}}
            />
            <Stack.Screen
            name='Edit'
            component={EditItemScreen}
            options={{ title: "Edit Score Card"}}
            />
            <Stack.Screen
            name='AddScore'
            component={AddScoreScreen}
            options={{ title: "Add a Score"}}
            />
            <Stack.Screen
            name='EditScore'
            component={EditScoreScreen}
            options={{ title: "Edit the Score"}}
            />
            <Stack.Screen
            name='DeleteScore'
            component={DeleteScoreScreen}
            options={{ title: "Delete the Score"}}
            />
            
            <Stack.Screen
            name='ViewScores'
            component={ViewScores}
            options={{ title: "View Scores"}}
            />


          </Stack.Navigator>
        </NavigationContainer>
      </ItemProvider>  
  );
}

export default App;

