import Logo from '../Logo'
import OptionsHeader from '../OptionsHeader';
import IconsHeader from '../IconsHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #49beb7;
    display: flex;
    justify-content: center;
`

function Header () {
    return (
        <HeaderContainer>
            <Logo/>
            <OptionsHeader/>
            <IconsHeader/>
        </HeaderContainer>
    )
}

export default Header