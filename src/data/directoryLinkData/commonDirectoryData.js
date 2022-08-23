import { cloudAtlas, codes, dove, meteo } from "../../constants/images";
import { synoptikLinkData } from "../itemLinkData";

export const commonDirectoryData = [
    {
        title: 'Атлас облаков',
        description: 'Виды, форма и классификация облаков',
        link: 'CloudAtlas',
        backgroundImage: cloudAtlas
    },
    {
        title: 'Орнитологический атлас',
        description: 'Пособие для определения вида птиц',
        link: 'ItemLinkView',
        items: synoptikLinkData,
        backgroundImage: dove
    },
    {
        title: 'Технические средства метеослужбы',
        description: 'Термометры, гигрометры, барометры и тд.',
        link: 'ItemLinkView',
        items: synoptikLinkData,
        backgroundImage: meteo
    }, {
        title: 'Метеорологические коды',
        description: 'КН-01, КН-04, METAR, TAF, КМИ-85 и тд.',
        link: 'ItemLinkView',
        items: synoptikLinkData,
        backgroundImage: codes
    }
]