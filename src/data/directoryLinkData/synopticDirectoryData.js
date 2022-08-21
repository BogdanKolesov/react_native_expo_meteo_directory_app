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
        title: 'Минимумы воздушных судов',
        description: 'Минимумы воздушных судов для обеспечения полётов',
        link: 'ItemLinkView',
        content: (
            <Text>
                Эксплуатационный минимум в авиации — минимальные значения высоты нижней границы облаков и горизонтальной видимости, при которых возможно выполнение взлётов, посадок и полётов по маршруту. До 2009 года использовался термин метеорологи́ческий ми́нимум (метеоми́нимум).
                Минимум устанавливается раздельно для аэродрома, для типа воздушного судна, видов авиационных работ и для пилотов.
                Для аэродрома минимум может устанавливаться раздельно для разных взлетно-посадочных полос и для разных схем захода на посадку.
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
