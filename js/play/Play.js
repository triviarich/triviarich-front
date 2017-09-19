import React, { Component } from 'react';
import { Container, Icon, Content, List, ListItem, Text, Right, Left, Body } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const lobbies = [
  { id: 1, name: 'Play for free', icon: 'money' },
  { id: 2, name: 'Play for $1', icon: 'money' },
  { id: 3, name: 'Play for $5', icon: 'money' },
  { id: 4, name: 'Play for $10', icon: 'money' },
  { id: 5, name: 'Play for $25', icon: 'money' },
  { id: 6, name: 'Play for $50', icon: 'money' },
  { id: 7, name: 'Play for $100', icon: 'money' },
];

export default class Play extends Component {
  static navigationOptions = {
    title: 'Play'
  };

  render() {
    return (
      <Container style={{backgroundColor: 'white'}}>
        <Content>
          <List>
            {lobbies.map(lobby => {
              return (
                <ListItem key={lobby.id} button icon onPress={() => this.props.navigation.navigate('FindingGame')}>
                  <Left>
                    <FAIcon name={lobby.icon} size={20} />
                  </Left>
                  <Body>
                  <Text>{lobby.name}</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              )
            })}
          </List>
        </Content>
      </Container>
    );
  }
}
