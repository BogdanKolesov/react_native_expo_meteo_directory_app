import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const ItemLinkContainer = styled(View)`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-top: 10px;

`

export const ItemLinkTitle = styled(Text)`
    font-size: 16px;
    color: #000;
    font-family: Roboto_100Thin;
    letter-spacing: 1.5px;
    text-shadow: 4px 4px 23px rgba(0, 0, 0, 1);
`