import React from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import CategoryItem from './components/categoryItem';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

