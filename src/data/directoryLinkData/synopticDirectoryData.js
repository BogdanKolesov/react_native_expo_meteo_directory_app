import { Text } from "react-native";
import { cyklon, front, mi8, forecast, thunder } from "../../constants/images";
import { forecastsData, frontsData, synopticItemsData, mininumData } from "../itemLinkData/synopticLinkData";

export const synopticDirectoryData = [
    {
        title: 'Фронты',
        description: 'Прогнозирование фронтов',
        link: 'ItemLinkView',
        items: frontsData,
        backgroundImage: front
    },
    {
        title: 'Синоптические объекты',
        description: 'Основные понятия, погода и методы прогнозирования',
        link: 'ItemLinkView',
        items: synopticItemsData,
        backgroundImage: cyklon
    },
    {
        title: 'Методы прогнозирования',
        description: 'Прогнозирование явлений погоды',
        items: forecastsData,
        link: 'ItemLinkView',
        backgroundImage: thunder
    },
    ,
    {
        title: 'Ограничения воздушных судов',
        description: 'Ограничения воздушных судов при обеспечении полётов',
        link: 'ItemLinkView',
        content: (
            <Text>
                Ограничения по ветру, температуре, влажности и тд.
            </Text>
        ),
        items: mininumData,
        backgroundImage: mi8
    },
    {
        title: 'Другое',
        description: 'Дополнительная информация',
        link: 'NotExist',
        backgroundImage: forecast
    }
]
