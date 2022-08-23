import {
    AppWrapper,
    Article,
    ArticleView,
    CloudAtlas,
    CloudSubAtlas,
    ItemLinkView,
    NotExist
} from "../components/views";

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
    {
        name: 'Article',
        component: Article,
        options: { headerShown: false }
    },
]