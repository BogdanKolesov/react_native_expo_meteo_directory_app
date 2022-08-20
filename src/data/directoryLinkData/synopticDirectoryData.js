import { cyklon, front, mi8, forecast, thunder } from "../../constants/images";
import { synoptikLinkData } from "../itemLinkData";

export const synopticDirectoryData = [
    {
        title: 'Фронты',
        description: 'Прогнозирование фронтов',
        link: 'ItemLinkView',
        items: synoptikLinkData,
        backgroundImage: front
    },
    {
        title: 'Синоптические объекты',
        description: 'Основные понятия, погода и методы прогнозирования',
        link: 'NotExist',
        backgroundImage: cyklon
    },
    {
        title: 'Методы прогнозирования',
        description: 'Прогнозирование явлений погоды',
        link: 'NotExist',
        backgroundImage: thunder
    },
    ,
    {
        title: 'Минимумы воздушных судов',
        description: 'Минимумы воздушных судов для обеспечения полётов',
        link: 'NotExist',
        backgroundImage: mi8
    },
    {
        title: 'Другое',
        description: 'Дополнительная информация',
        link: 'NotExist',
        backgroundImage: forecast
    }
]