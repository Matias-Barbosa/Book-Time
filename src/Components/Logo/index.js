import logo from '../../imagens/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    padding-left: 10px;
    height: 50px;
`
const LogoImage = styled.img`
    margin-right: 10px;
    padding-top: 25px;
    height: 45px;
`

function Logo () {
    return(
        <LogoContainer>
            <LogoImage 
            src={logo} 
            alt='Logo' 
           />
            <p><strong>Book</strong>Time</p>
        </LogoContainer>
    )
}

export default Logo