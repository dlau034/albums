// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create Component
const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Hello'} />
			<AlbumList />
	</View>


);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
