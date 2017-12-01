import React, { Component } from 'react';
import { AppRegistry, TextInput, View } from 'react-native';

export default class Lat extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Lat' };
  }

  render() {
    return (
      <View>

      <TextInput
      placeholder = 'Lat'
      keyboardType = 'numeric'
      onChangeText = {(text)=> this.onChanged(text)}
      value = {this.state.myNumber}
        
    style={{
      height: 40,
      width:200, 
      borderColor: 'blue', 
      borderWidth: 3,
      textAlign:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      fontSize: 20,
      }}
    onChangeText={(text) => this.setState({myNumber: text})}
        
      />
      <TextInput
      placeholder = 'Long'
      keyboardType = 'numeric'
      
      
    style={{
      height: 40,
      width:200, 
      borderColor: 'black', 
      borderWidth: 3,
      textAlign:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      fontSize: 20,
      }}
    onChangeText={(text) => this.setState({myNumber: text})}
   
      />
      </View>
    );
  }
}


      
