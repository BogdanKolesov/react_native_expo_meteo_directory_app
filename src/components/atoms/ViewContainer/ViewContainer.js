import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container } from './ViewContainer.styles';

const ViewContainer = ({ children }) => {
    return (
        <Container contentContainerStyle={{
            flexDirection: 'column'
        }}>
            {children}
        </Container>
    );
}

const styles = StyleSheet.create({})

export default ViewContainer;
