import React from 'react';
import { ViewContainter } from '../../atoms'
import { ItemLink } from '../../molecules';

const ItemLinkView = () => {
    const linkItem = [
        {
            title: 'ЖОПА',
            link: 'NotExist'
        }
    ]
    return (
        <ViewContainter>
            {
                linkItem.map((item, index) => {
                    return (
                        <ItemLink key={index} item={item} />
                    )
                })
            }
        </ViewContainter>
    );
}


export default ItemLinkView;
