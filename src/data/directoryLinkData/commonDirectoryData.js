import { cloudAtlas, meteo } from "../../constants/images";
import { synoptikLinkData } from "../itemLinkData";

export const commonDirectoryData = [
    {
        title: 'Атлас облаков',
        description: 'Виды, форма и классификация облаков',
        link: 'ItemLinkView',
        items: synoptikLinkData,
        backgroundImage: cloudAtlas
    },
    {
        title: 'Технические средства метеослужбы',
        description: 'Термометры, гигрометры, барометры и тд.',
        link: 'ItemLinkView',
        items: synoptikLinkData,
        backgroundImage: meteo
    }
]