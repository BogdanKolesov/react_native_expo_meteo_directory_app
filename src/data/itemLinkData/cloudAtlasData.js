import { View } from "react-native";
import { altoCumulus, altoStratus, cirrus, cumuloNimbus, fog, forecastClouds } from "../../constants/images";

export const cloudAtlasData = [
    {
        title: 'Облака верхнего яруса',
        description: 'Высота: 6-12 км',
        backgroundImage: cirrus,
        link: 'ItemLinkView',
        clouds: [
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
        title: 'Облака среднего яруса',
        description: 'Высота: 2-6 км',
        backgroundImage: altoCumulus,
        clouds: [
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
        backgroundImage: fog,
        clouds: [
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
        title: 'Облака вертикального развиния',
        description: 'Нижняя раница - 200-100м, вергняя границы 3-8км',
        backgroundImage: cumuloNimbus,
        clouds: [
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
        clouds: [
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