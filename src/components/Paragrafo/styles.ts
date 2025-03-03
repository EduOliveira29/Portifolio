import styled from "styled-components";
import {Props} from '.';

export const P = styled.p<Props>`
  color: ${(props) => (props.fontSize ? props.fontSize +  'px' : '14px' )};
  font-size: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494' )};;
  line-height: 22px;
`
