import React from 'react';
import { ViewContainer, ViewTitle } from '../../atoms';

const ArticleView = ({ route, navigation }) => {
    const { title, content } = route.params

    return (
        <ViewContainer>
            <ViewTitle>
                {title}
            </ViewTitle>
            {content}
        </ViewContainer>
    );
}

export default ArticleView;
