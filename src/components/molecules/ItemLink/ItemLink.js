import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ItemLinkContainer, ItemLinkTitle } from './ItemLink.styles';

const ItemLink = ({ item }) => {
    const navigation = useNavigation()


    return (
        <ItemLinkContainer
            onPress={() => navigation.navigate(item.link)}
        >
            <ItemLinkTitle>
                {item.title}
            </ItemLinkTitle>
        </ItemLinkContainer>
    );
}


export default ItemLink;
