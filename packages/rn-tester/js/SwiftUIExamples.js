import React from 'react';
import { View, Text, TouchableOpacity, Button, UIManager, NativeModules } from 'react-native';

const colors = ['black', 'blue', 'orange', 'green', 'pink', 'yellow', 'purple', 'red', 'transparent'];

class SwiftUIExamples extends React.PureComponent {
  state = {
    colorIndex: 0,
  }

  componentDidMount() {
    // this.interval = setInterval(() => {
    //   const colorIndex = (this.state.colorIndex + 1) % colors.length;
    //   this.setState({ colorIndex });
    // }, 500);
  }

  componentWillUnmount() {
    this.interval = clearInterval(this.interval);
  }

  onPress = () => {
    alert('pressed!');
  }

  onLongPress = () => {
    alert('long pressed');
  }

  tapGreen = () => {
    alert('green tapped');
  }

  tapBlue = () => {
    alert('blue tapped');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 44 }}>
        {/* <View style={{ marginVertical: 20, flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 60,
              height: 60,
              borderLeftWidth: 40,
              borderLeftColor: 'white',
              backgroundColor: '#fa5637',
              marginLeft: 0,
              marginTop: 44,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 70,
              height: 30,
              backgroundColor: colors[this.state.colorIndex],
              borderLeftWidth: 20,
              borderLeftColor: 'green',
              marginTop: 50,
              marginLeft: 30,
            }}
          />
        </View>
        <View style={{ marginVertical: 20, flexDirection: 'row', alignItems: 'flex-start' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
          <Text style={{ maxWidth: 100, backgroundColor: 'orange', color: 'white' }} numberOfLines={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
          <Text style={{ flex: 1, backgroundColor: 'green', color: 'white' }} numberOfLines={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
        </View> */}
        <View style={{ backgroundColor: 'orange', alignItems: 'center' }}>
          <View onTap={this.onPress} onLongPress={this.onLongPress}>
            <Text style={{ margin: 10, color: 'white', fontSize: 20 }}>Press me!</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default SwiftUIExamples;
