import { View } from "react-native";
import { altoCumulus, altoStratus, cirrus, cumuloNimbus, fog, forecastClouds, meteo } from "../../constants/images";

export const cloudAtlasData = [
    {
        title: 'Облака верхнего яруса',
        description: 'Высота: 6-12 км',
        backgroundImage: cirrus,
        link: 'CloudSubAtlas',
        items: [
            {
                title: 'Cirrus - Перистые',
                description: 'Такие облака',
                height: '6-10 км',
                backgroundImage: meteo,
                content: (
                    <View>

                    </View>
                )
            },
            {
                title: 'Cirrus - Перистые',
                description: 'Такие облака',
                height: '6-10 км',
                backgroundImage: meteo,
                content: (
                    <View>

                    </View>
                )
            },
            {
                title: 'Cirrus - Перистые',
                description: 'Такие облака',
                height: '6-10 км',
                backgroundImage: meteo,
                content: (
                    <View>

                    </View>
                )
            },
            {
                title: 'Cirrus - Перистые',
                description: 'Такие облака',
                height: '6-10 км',
                backgroundImage: meteo,
                content: (
                    <View>

                    </View>
                )
            }
        ]
    },
    {
        title: 'Облака среднего яруса',
        description: 'Высота: 2-6 км',
        backgroundImage: altoCumulus,
        link: 'CloudSubAtlas',
        items: [
            {
                title: 'Cirrus - Перистые',
                description: 'Такие облака',
                height: '6-10 км',
                backgroundImage: '',
                content: (
                    <View>

                    </View>
                )
            }
        ]
    },
    {
        title: 'Облака нижнего яруса',
        description: 'Высота: 0м - 2 км',
        link: 'CloudSubAtlas',
        backgroundImage: fog,
        items: [
            {
                title: 'Cirrus - Перистые',
                description: 'Такие облака',
                height: '6-10 км',
                backgroundImage: meteo,
                content: (
                    <View>

                    </View>
                )
            }
        ]
    },
    {
        title: 'Облака вертикального развиния',
        description: 'Нижняя раница - 200-100м, верхняя границы 3-8км',
        backgroundImage: cumuloNimbus,
        link: 'CloudSubAtlas',
        items: [
            {
                title: 'Cirrus - Перистые',
                description: 'Такие облака',
                height: '6-10 км',
                backgroundImage: '',
                content: (
                    <View>

                    </View>
                )
            }
        ]
    },
    {
        title: 'Облака, предсказывающие погоду',
        description: 'Местные признаки для прогнозов погоды',
        backgroundImage: forecastClouds,
        link: 'CloudSubAtlas',
        items: [
            {
                title: 'Cirrus - Перистые',
                backgroundImage: '',
                description: 'Такие облака',
                content: (
                    <View>

                    </View>
                )
            }
        ]
    }

]