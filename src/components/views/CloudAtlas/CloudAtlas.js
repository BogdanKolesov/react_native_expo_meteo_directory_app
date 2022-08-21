import React, { useState } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { ViewContainer, ViewTitle } from '../../atoms';
import { cloudAtlasData } from '../../../data/itemLinkData/cloudAtlasData';
import { DirectoryLink } from '../../molecules';

const CloudAtlas = () => {
    const [visible, setVisible] = useState(false);

    return (
        <View>
            <StatusBar />
            <ViewContainer>
                <ViewTitle>Атлас Облаков</ViewTitle>
                {
                    cloudAtlasData.map((data, index) => {
                        return (
                            <DirectoryLink key={index} data={data} onPress={() => !visible} />
                        )
                    })
                }
            </ViewContainer>
        </View>
    );
}


export default CloudAtlas;
