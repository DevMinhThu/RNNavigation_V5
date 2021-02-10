import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index';
import {RVText} from '../core';

export class SettingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="Setting"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <RVText content="Setting!" />
          <TouchableOpacity
            style={{
              marginTop: 20,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: 'red',
              padding: 10,
            }}
            onPress={() => this.props.navigation.navigate('SettingDetail')}>
            <RVText content="Go Setting Detail!" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
