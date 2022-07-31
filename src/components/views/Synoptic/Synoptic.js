import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { ViewContainer } from '../../atoms';

const Synoptic = () => {
    return (
        <View>
            <StatusBar />
            <ViewContainer>
                <Text>Синоптик</Text>
            </ViewContainer>
        </View>
    );
}


export default Synoptic;
