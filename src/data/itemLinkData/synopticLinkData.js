import { Paragraph, Picture } from "../../components/atoms";
import { cumuloNimbus } from "../../constants/images";

export const frontsData = [
    {
        title: 'Холодный фронт',
        link: 'ArticleView',
        content: (<Paragraph>Hello, world!d</Paragraph>)
    },
    {
        title: 'Тёплый фронт',
        link: 'ArticleView',
        content: (<Paragraph>Hello, world!d</Paragraph>)
    },
    {
        title: 'Фронт окклюзии',
        link: 'ArticleView',
        content: (<>

            <Paragraph>XYZ</Paragraph><Picture source={cumuloNimbus} /></>)
    }
]

export const synopticItemsData = [
    {
        title: 'Циклон',
        link: 'coldFront'
    },
    {
        title: 'Барическая ложбина',
        link: 'coldFront'
    },
    {
        title: 'Антициклон',
        link: 'coldFront'
    },
    {
        title: 'Гребень антициклона',
        link: 'coldFront'
    },
    {
        title: 'Седловина',
        link: 'coldFront'
    }
]

export const forecastsData = [
    {
        title: 'Прогноз гроз',
        link: 'coldFront'
    },
    {
        title: 'Прогноз туманов',
        link: 'coldFront'
    },
    {
        title: 'Прогноз осадков',
        link: 'coldFront'
    },
    {
        title: 'Прогноз температуры',
        link: 'coldFront'
    },
    {
        title: 'Прогноз обледенения',
        link: 'coldFront'
    },
    {
        title: 'Прогноз ветра',
        link: 'coldFront'
    },
]

export const mininumData = [
    {
        title: 'Самолёты',
        link: 'coldFront'
    },
    {
        title: 'Ветролёты',
        link: 'coldFront'
    },
    {
        title: 'Беспилотники',
        link: 'coldFront'
    }
]