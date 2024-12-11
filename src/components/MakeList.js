import * as React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {View, TextInput} from 'react-native';
import {Card, Button, Text, RadioButton} from 'react-native-paper';
const MakeList = ({navigation, route}) => {
  const [selected, setSelected] = React.useState('');
  const [checked, setChecked] = React.useState('first');
  const [year, setYear] = React.useState('');
  const [model, setModel] = React.useState('');
  const data = [
    {key: '1', value: 'ACURA', disabled: false},
    {key: '2', value: 'ALFA ROMEO'},
    {key: '3', value: 'ASTON MARTIN'},
    {key: '4', value: 'AUDI', disabled: false},
    {key: '5', value: 'BUGATTI'},
    {key: '6', value: 'FORD'},
    {key: '7', value: 'HONDA'},
  ];

  return (
    <View style={{margin: 5, backgroundColor: '#e8eef7', height: '100%'}}>
      <Text variant="headlineMedium" style={{color: '#043389'}}>
        New Vehicle
      </Text>
      <Card style={{backgroundColor: 'white', width: '99%', margin: 1}}>
        <View style={{marginBottom: 5}}>
          <Text variant="titleMedium" style={{fontWeight: 'bold', padding: 3}}>
            Add Vehicle
          </Text>
        </View>
        <Text
          variant="bodySmall"
          style={{
            padding: 5,
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          Select the year, make, and model of your vehicle or enter your{' '}
          <Text style={{color: '#3180ff'}}>
            Vehicle Identification Number (VIN)
          </Text>
          . VIN is optional for a quote but required to add or replace a vehicle
          on your policy. If your vehicle isn't showing as an option, please use
          your VIN to receive a quote.
        </Text>
        <TextInput
          style={{
            backgroundColor: 'white',
            marginBottom: 5,
            borderWidth: 1,
            margin: 2,
            borderRadius: 8,
            paddingLeft: 20,
          }}
          label="Year*"
          placeholder="Year"
          value={year}
          onChangeText={text => setYear(text)}
        />
        <SelectList
          inputStyles={{textAlign: 'left', color: '#b5b5b5'}}
          placeholder="Make"
          boxStyles={{width: '99%', margin: 2}}
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
        />
        <TextInput
          style={{
            backgroundColor: 'white',
            marginBottom: 5,
            borderWidth: 1,
            margin: 2,
            borderRadius: 8,
            paddingLeft: 20,
          }}
          label="Model*"
          placeholder="Model"
          // textColor="#043389"
          value={model}
          onChangeText={text => setModel(text)}
        />

        <View style={{marginBottom: 15, paddingLeft: 2}}>
          <Text variant="labelSmall" style={{padding: 3}}>
            Can't find your model? Enter VIN instead
          </Text>
        </View>
      </Card>
      <View>
        <Card style={{backgroundColor: 'white', width: '99%', marginTop: 18}}>
          <View style={{marginBottom: 1, margin: 1}}>
            <Text variant="bodySmall" style={{padding: 3}}>
              Do you want to add or replace a vehicle on your auto policy?
            </Text>
          </View>
          <Text variant="bodySmall" style={{padding: 3, marginBottom: 5}}>
            Knowing whether you want to add or replace a vehicle will help us
            give you a more accurate quote
          </Text>
          <Text variant="bodySmall" style={{padding: 5, marginBottom: 15}}>
            <Text style={{fontWeight: 'bold'}}>Please note:</Text>If you would
            like to remove an existing vehicle please select "Replace Vehicle"
            and enter new vehicle details. If you wish to remove existing
            vehicle later, you will have to call your{' '}
            <Text style={{color: '#3180ff'}}>Farmers Agent</Text> for
            assistance.
          </Text>
          <View
            style={{
              borderBottomColor: '#A2A2A2',
              borderBottomWidth: 1,
            }}
          />
          <Card.Actions>
            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'flex-start',
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{paddingTop: 8}}>Add vehicle</Text>
                <RadioButton
                  color="#79797b"
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                />
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{paddingTop: 8}}>Replace vehicle</Text>
                <RadioButton
                  color="#79797b"
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                />
              </View>
            </View>
          </Card.Actions>
        </Card>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 8}}>
        <Button
          textColor="#2e69bc"
          type="outlined"
          // mode="contained"
          onPress={() => navigation.navigate('MakeList', {name: 'Suraj'})}>
          Cancel Quote
        </Button>
        <Button
          style={{backgroundColor: '#2e69bc', width: '30%'}}
          mode="contained"
          onPress={() => navigation.navigate('Home', {name: 'Suraj'})}>
          Back
        </Button>
        <Button
          disabled={true}
          style={{backgroundColor: 'lightgrey', width: '30%', marginLeft: 10}}
          mode="contained"
          onPress={() => navigation.navigate('Home', {name: 'Suraj'})}>
          Next
        </Button>
      </View>
    </View>
  );
};
export default MakeList;
