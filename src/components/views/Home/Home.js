import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import ViewContainer from '../../atoms/ViewContainer/ViewContainer';

const Home = () => {
    return (
        <View>
            <StatusBar />
            <ViewContainer>
                <Text>HOME</Text>
            </ViewContainer>
        </View >
    );
}


export default Home;
