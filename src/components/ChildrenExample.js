import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChildrenExample = ({title, children}) => {
  return (
    <>
      <Text>{title}</Text>
      {children}
      <Text>Footer Content</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default ChildrenExample;