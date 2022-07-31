import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { ViewContainer } from '../../atoms';

const Common = () => {
    return (
        <View>
            <StatusBar />
            <ViewContainer>
                <Text>Общее</Text>
            </ViewContainer>
        </View>
    );
}

export default Common;
