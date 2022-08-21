import { Image } from 'react-native';
import styled from 'styled-components/native';


export const Picture = styled(Image)`
    width: ${props => props.wight ? props.wight : 'auto'};
    height: ${props => props.height ? props.height : '250px'};
`