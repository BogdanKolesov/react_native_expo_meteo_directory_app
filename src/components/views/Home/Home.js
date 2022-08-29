import React from 'react';
import { View, StatusBar, Text, Image } from 'react-native';
import { meteo, thunder, weather } from '../../../constants/images';
import { Paragraph, Picture, ViewContainer, ViewTitle } from '../../atoms';
import { StyledText } from './Home.styles';



const Home = () => {
    return (
        <View>
            <StatusBar />
            <ViewContainer>
                <ViewTitle>Всем хорошей погоды!</ViewTitle>
                <Paragraph bold big>
                    Порядок доклада:
                </Paragraph>
                <Paragraph>
                    Количество облачности, вид облачности, высота нижней границы облаков, явления погоды, видимость, направление ветра, скорость ветра, температура, влажность, давление (для РП)
                </Paragraph>
                <Paragraph bold>
                    Пример:
                </Paragraph>
                <Paragraph>
                    4/2 AcCu ВНГО 1500, дымка, видимость 8км, ветер 30 градусов 8 м/с, температура +23, влажность 92%, давдение 722.6 мм.рт.с
                </Paragraph>
                <Paragraph bold big>
                    Дополнительно:
                </Paragraph>
                <Paragraph>
                    Порывы ветра - превышение максимальной постоянной скокрости ветра на 4 м/с. Напрмер, скорость ветра 8 м/с, порывы 12 м/с
                </Paragraph>
                <Paragraph>
                    Видимость указывается в км от 2 до 10 км, менее 2 км - в метрах
                </Paragraph>
                <Paragraph>
                    При наличии облаков ТОЛЬКО НИЖНЕГО ЯРУСА пишется количество облаков в обе колонки, напрмер 4/4 Cu
                </Paragraph>
                <Paragraph>
                    При наличии облаков ТОЛЬКО верхнего и (или) среднего яруса, в количество облаков нижнего яруса пишется 0. Напрмер, 4/0 CiAs. Докладывается как "4 балла верхней, средней"
                </Paragraph>
                <Paragraph>
                    Если количество облаков 1 балл и менее, пишется "0/0", докладывается "ЯСНО"
                </Paragraph>
                <Paragraph>
                    Если ветер слабее 2 м/с, пишется "ШТИЛЬ"
                </Paragraph>

            </ViewContainer>
        </View>
    );
}


export default Home;
