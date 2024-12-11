import * as React from 'react';
import {View} from 'react-native';
import {Card, Button, Text} from 'react-native-paper';

const Home = ({navigation}) => (
  <View style={{margin: 5, backgroundColor: '#e8eef7', height: '100%'}}>
    <Text variant="headlineMedium" style={{color: '#043389'}}>
      Get a quote
    </Text>
    <Card style={{backgroundColor: 'white', width: '99%', margin: 2}}>
      <View style={{marginBottom: 5}}>
        <Text variant="titleMedium" style={{fontWeight: 'bold', padding: 3}}>
          Do you know the Vehicle Identification Number (VIN)?
        </Text>
      </View>
      <Text variant="bodySmall" style={{padding: 3}}>
        You can still get a quote but we will need the VIN before we can add or
        replace a vehicle{' '}
      </Text>
      <Card.Actions>
        <Button
          onPress={() => navigation.navigate('MakeList', {name: 'Suraj'})}>
          No, I don't
        </Button>
        <Button
          onPress={() => navigation.navigate('MakeList', {name: 'Suraj'})}>
          Yes, I know
        </Button>
      </Card.Actions>
    </Card>
  </View>
);

export default Home;
