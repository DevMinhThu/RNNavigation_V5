import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index';
import {RVText} from '../core'

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="Home" isHome={true} navigation={this.props.navigation} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <RVText content="Home!"/>
          <TouchableOpacity
            style={{
              marginTop: 20,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: 'blue',
              padding: 10,
            }}
            onPress={() => this.props.navigation.navigate('HomeDetail')}>
            <RVText content="Go to Home Detail!"/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
