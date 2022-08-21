import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { ViewContainer, ViewTitle } from '../../atoms';
import { StyledText } from './Home.styles';



const Home = () => {
    return (
        <View>
            <StatusBar />
            <ViewContainer>
                <ViewTitle>Всем хорошей погоды!</ViewTitle>
                <StyledText>
                    <Text>
                        Данное приложение создано метеорологом для метеорологов и не претендует на уникальность в плане контената 🐺🐺🐺. Статьи были взяты из различных открытых источников в сети "ИНТЕРНЕТ" 🗺.
                        Надеюсь, данное приложение будет полезно для Вас!

                    </Text>
                </StyledText>
            </ViewContainer>
        </View>
    );
}


export default Home;
