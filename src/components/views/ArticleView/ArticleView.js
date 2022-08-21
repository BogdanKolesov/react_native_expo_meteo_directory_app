import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ViewContainer, ViewTitle } from '../../atoms';

const ArticleView = ({ route, navigation }) => {
    const { title, conetnt } = route.params

    return (
        <ViewContainer>
            <ViewTitle>
                {title}
            </ViewTitle>
            {content}
        </ViewContainer>
    );
}

const styles = StyleSheet.create({})

export default ArticleView;
