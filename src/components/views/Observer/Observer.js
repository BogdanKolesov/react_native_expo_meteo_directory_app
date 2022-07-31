import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { ViewContainer } from '../../atoms';

const Observer = () => {
    return (
        <View>
            <StatusBar />
            <ViewContainer>
                <Text>Метеонаблюдатель</Text>
            </ViewContainer>
        </View>
    );
}


export default Observer;
