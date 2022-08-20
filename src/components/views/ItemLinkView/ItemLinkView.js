import React, { useEffect } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { ViewContainer, ViewTitle } from '../../atoms'
import { ItemLink } from '../../molecules';

const ItemLinkView = ({ route }) => {
    const { items, title } = route.params

    return (
        <ViewContainer>
            <ViewTitle>
                {title}
            </ViewTitle>
            <View>
                {items.map((item, index) => {
                    return (
                        <ItemLink key={index} item={item} />
                    )
                })}
            </View>
        </ViewContainer>
    );
}


export default ItemLinkView;
