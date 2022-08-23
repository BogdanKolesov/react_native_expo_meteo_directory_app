import { AppWrapper, ArticleView, CloudAtlas, CloudSubAtlas, NotExist } from "../components/views";
import ItemLinkView from "../components/views/ItemLinkView/ItemLinkView";

export const navigationData = [
    {
        name: 'AppWrapper',
        component: AppWrapper,
        options: { headerShown: false }
    },
    {
        name: 'NotExist',
        component: NotExist,
        options: { headerShown: false }
    },
    {
        name: 'ItemLinkView',
        component: ItemLinkView,
        options: { headerShown: false }
    },
    {
        name: 'CloudAtlas',
        component: CloudAtlas,
        options: { headerShown: false }
    },
    {
        name: 'CloudSubAtlas',
        component: CloudSubAtlas,
        options: { headerShown: false }
    },
    {
        name: 'ArticleView',
        component: ArticleView,
        options: { headerShown: false }
    },
]