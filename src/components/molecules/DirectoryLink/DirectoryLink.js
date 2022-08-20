import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
    DarkBackground,
    DirectoryLinkBackgroundImage,
    DirectoryLinkContainer,
    DirectoryLinkDescription,
    DirectoryLinkText,
    DirectoryLinkTitle
} from './DirectoryLink.styles';

const DirectoryLink = ({ data }) => {

    const navigation = useNavigation()

    return (
        <DirectoryLinkContainer
            activeOpacity={0.6}
            onPress={() => navigation.navigate(data.link)}>
            <DirectoryLinkBackgroundImage source={data.backgroundImage} />
            <DarkBackground />
            <DirectoryLinkText>
                <DirectoryLinkTitle>
                    {data.title}
                </DirectoryLinkTitle>
                <DirectoryLinkDescription>
                    {data.description}
                </DirectoryLinkDescription>
            </DirectoryLinkText>
        </DirectoryLinkContainer>
    );
}


export default DirectoryLink;
