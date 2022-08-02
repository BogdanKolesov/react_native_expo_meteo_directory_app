import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { ViewContainer, ViewTitle } from '../../atoms';
import { synopticDirectoryData } from '../../../data/directoryLinkData'
import { DirectoryLink } from '../../molecules/';
import { cyklon } from '../../../constants/images';

const Synoptic = () => {
    return (
        <View>
            <StatusBar />
            <ViewContainer>
                <ViewTitle>Статьи для синоптиков</ViewTitle>
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


export default Synoptic;
