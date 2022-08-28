import { PreasureTend, Presure, Temperature, Visibility, Wet, Wind } from "../contentData/observerContentData/meteoItemsData"
import { Blizzard, DustStorm, Fog } from "../contentData/observerContentData/phenomenonContentData"

export const meteoItemsData = [
    {
        title: 'Температура',
        link: 'ArticleView',
        content: (<Temperature />)
    },
    {
        title: 'Влажность',
        link: 'ArticleView',
        content: (<Wet />)
    },
    {
        title: 'Атмосферное давление',
        link: 'ArticleView',
        content: (<Presure />)
    },
    {
        title: 'Барическая тенденция',
        link: 'ArticleView',
        content: (<PreasureTend />)
    },
    {
        title: 'Скорость и направление ветра',
        link: 'ArticleView',
        content: (<Wind />)
    },
    {
        title: 'Видимость',
        link: 'ArticleView',
        content: (<Visibility />)
    }
]

export const meteoPhenomenonData = [
    {
        title: 'Туман и дымка',
        link: 'ArticleView',
        content: (<Fog />)
    },
    {
        title: 'Метель и позёмок',
        link: 'ArticleView',
        content: (<Blizzard />)
    },
    {
        title: 'Пыльная и песчаная буря',
        link: 'ArticleView',
        content: (<DustStorm />)
    },
]