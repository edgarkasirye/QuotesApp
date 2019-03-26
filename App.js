/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import * as list from './quotes'

export default class App extends Component {
  state = {
    quotes: list.quotes,
    currentIndex: 0,
    color: ['#93867F', '#343633B', '#7D70A', '#2E86AB', '#890620'],
    colorIndex: 0,
  }
  
  render() {
    let quote = this.state.quotes[this.state.currentIndex];
    let choose_color = Math.floor(this.state.color.length * Math.random());
    return (
      <View style={{flex: 1,
            justifyContent: 'center',
            backgroundColor: this.state.color[choose_color]}}>
      
        <Text style={styles.main}>  {quote.quote}</Text>
        <Text style={styles.side}>  __{quote.author}</Text>

        <TouchableOpacity style={styles.button} onPress={() => {
          if(this.state.currentIndex === this.state.quotes.length - 1){
            this.setState({currentIndex: 0})
          }
          else{
            this.setState({currentIndex: this.state.currentIndex + 1})

          }
        }}>
          <Text style={{fontSize: 18,
                        color: 'black',
                        textAlign: 'center',
                        alignItems: 'center'}}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  main: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
    
  },

  side: {
    fontSize: 24,
    textAlign: 'right',
    color: 'white',
    margin: 10

  },

  button: {
    width: 250,
    height: 40,
    marginTop: 40,
    marginLeft: 80,
    borderRadius: 2,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center'
  },

  net: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    alignItems: 'center'
  }
  
});
