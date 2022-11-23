import React from 'react';
import { useReducer, useEffect } from 'react';
import { actionTypes } from '../helpers/actionTypes';
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "my_super_secret_key";
const ItemContext = React.createContext();



let score = []

const reducer = (state, action) => {
  switch (action.type) {
    case  actionTypes.create:
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          date: new Date(),
          compN: action.payload.compN,
          rinkNo: action.payload.rinkNo,
          T1: action.payload.T1,
          T2: action.payload.T2,
          T1P1: action.payload.T1P1,
          T1P2: action.payload.T1P2,
          T1P3: action.payload.T1P3,
          T1P4: action.payload.T1P4,
          T1Skip: action.payload.T1Skip,
          T2P1: action.payload.T2P1,
          T2P2: action.payload.T2P2,
          T2P3: action.payload.T2P3,
          T2P4: action.payload.T2P4,
          T2Skip: action.payload.T2Skip,
          score: score
          
        }
      ];
    case actionTypes.update:
      return state.map((e) => {
        if (e.id === action.payload.id) {
          return action.payload;
        } else {
          return e;
        }
      });
      //Incorrect
    case actionTypes.deleteScore:
      console.log(state.score);
      return state.score.filter((e) => e.id !== action.payload.id);
      

    case actionTypes.delete:
      return state.filter((e) => e.id !== action.payload.id);
    default:
      return state;

    case actionTypes.save:
      try {
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch(e) {
        console.log(e);
      } finally {
        return state;
      }
    case actionTypes.load:
      return [
        ...state, {
          id: action.payload.id,
          date: new Date(action.payload.date),
          compN: action.payload.compN,
          rinkNo: action.payload.rinkNo,
          T1: action.payload.T1,
          T2: action.payload.T2,
          T1P1: action.payload.T1P1,
          T1P2: action.payload.T1P2,
          T1P3: action.payload.T1P3,
          T1P4: action.payload.T1P4,
          T1Skip: action.payload.T1Skip,
          T2P1: action.payload.T2P1,
          T2P2: action.payload.T2P2,
          T2P3: action.payload.T2P3,
          T2P4: action.payload.T2P4,
          T2Skip: action.payload.T2Skip,
          score: action.payload.score

        }
      ]
  }
};

let dummyData = []



export const ItemProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, dummyData);
  useEffect(() => {
    const loadStorage = async () => {
      const storage = await AsyncStorage.getItem(STORAGE_KEY);
      if (storage !== null && state.length === 0) {
        dummyData = JSON.parse(storage);
        dummyData.forEach(element => {
          dispatch({ type: actionTypes.load, payload: element });
        })
      }
    }
    loadStorage();
  }, [STORAGE_KEY])

  const addItem = (compN, rinkNo, T1, T2, T1P1, T1P2, T1P3, T1P4, T1Skip, T2P1, T2P2, T2P3, T2P4, T2Skip, score, callback) => {
    dispatch({type: actionTypes.create, payload: { compN, rinkNo, T1, T2, T1P1, T1P2, T1P3, T1P4, T1Skip, T2P1, T2P2, T2P3, T2P4, T2Skip, score}});
    dispatch({ type: actionTypes.save });
    if (callback) { callback(); } 
  };
  const deleteItem = (id, callback) => {
    dispatch({type: actionTypes.delete, payload: {id: id}});
    if (callback) { callback(); }
  };

  const deleteScore = (id, callback) => {
    dispatch({type: actionTypes.deleteScore, payload: {id: id}});
    if (callback) { callback(); }
  };

  const updateItem = (id, compN, rinkNo, T1, T2, T1P1, T1P2, T1P3, T1P4, T1Skip, T2P1, T2P2, T2P3, T2P4, T2Skip, date, score, callback) => {
    dispatch({type: actionTypes.update, payload: {id, compN, rinkNo, T1, T2, T1P1, T1P2, T1P3, T1P4, T1Skip, T2P1, T2P2, T2P3, T2P4, T2Skip, date, score}});
    if (callback) { callback(); }
  }

  return (
    <ItemContext.Provider value={{
      state:state,
      create: addItem,
      remove: deleteItem,
      update: updateItem,
      delScore: deleteScore,
      }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;