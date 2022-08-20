import { Image } from 'react-native';
import styled from 'styled-components/native';



const StyledPicture = styled(Image)`
    width: {props => props.width ? props.width : 100% }
`