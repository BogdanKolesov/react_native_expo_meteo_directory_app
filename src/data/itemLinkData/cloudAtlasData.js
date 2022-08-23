import { View } from "react-native";
import { Paragraph, Picture } from "../../components/atoms";
import { altoCumulus, altoStratus, cirrus, cirrusFibratus, cumuloNimbus, fog, forecastClouds, meteo } from "../../constants/images";
import { CirrusFibratus } from "../contentData/cloudContentData/heightClouds";

export const cloudAtlasData = [
    {
        title: 'Облака верхнего яруса',
        description: 'Высота: 6-12 км',
        backgroundImage: cirrus,
        link: 'CloudSubAtlas',
        items: [
            {
                title: 'Перистые волокнистые - Cirrus fibratus (Ci fib)',
                link: 'ArticleView',
                description: 'Являются наиболее общей формой облаков верхнего яруса.',
                height: '7-10 км в умеренных широтах',
                backgroundImage: cirrusFibratus,
                content: (
                    <CirrusFibratus />
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