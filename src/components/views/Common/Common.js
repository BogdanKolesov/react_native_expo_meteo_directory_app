import React from 'react';
import { View, StatusBar } from 'react-native';
import { ViewContainer, ViewTitle } from '../../atoms';
import { synopticDirectoryData } from '../../../data/directoryLinkData'
import { DirectoryLink } from '../../molecules/';


const Common = () => {
    return (
        <View>
            <StatusBar />
            <ViewContainer>
                <ViewTitle>Общие статьи для синоптиков и метеонаблюдателей</ViewTitle>
                {
                    synopticDirectoryData.map((data, index) => {
                        return (
                            <DirectoryLink key={index} data={data} />
                        )
                    })
                }
            </ViewContainer>
        </View>
    );
}

export default Common;
