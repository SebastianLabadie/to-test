import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';


export default function TestScreen({route}:any) {
  const {info} = route.params
  const navigation =  useNavigation<NativeStackNavigationProp<any, any>>();
  
  const LeftSwipeActions = () => {
    return (
      <View
        style={{ flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center' }}
      >
        <Text
          style={{
            color: '#40394a',
            paddingHorizontal: 10,
            fontWeight: '600',
            paddingVertical: 20,
          }}
        >
          Bookmark
        </Text>
      </View>
    );
  };
  const rightSwipeActions = () => {
    return (
      <View
        style={{
          backgroundColor: '#ff8303',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <Text
          style={{
            color: '#1b1a17',
            paddingHorizontal: 10,
            fontWeight: '600',
            paddingVertical: 20,
          }}
        >
          Delete
        </Text>
      </View>
    );
  };
  const swipeFromLeftOpen = () => {
    alert('Swipe from left');
  };
  const swipeFromRightOpen = () => {
    alert('Swipe from right');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{info}</Text>
      <Button title='cambiar' onPress={()=>navigation.navigate('TestScreen',{info:Math.random()})} ></Button>
      <Swipeable
    renderLeftActions={LeftSwipeActions}
    renderRightActions={rightSwipeActions}
    onSwipeableRightOpen={swipeFromRightOpen}
    onSwipeableLeftOpen={swipeFromLeftOpen}
  >
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: 'white',
      }}
    >
      <Text style={{ fontSize: 24 }} >
        sdfsdfsdf
      </Text>
    </View>
  </Swipeable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
