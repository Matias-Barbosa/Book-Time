import perfil2 from '../../imagens/userLogo.png'
import carrinho from '../../imagens/shopping-cart.png'
import styled from 'styled-components'

const icones = [perfil2, carrinho]

const Icon = styled.li`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 40px;
  cursor: pointer;
  width: 25px;
  margin-top: 10px;
  margin-right: 50px;
  `

  const Icons = styled.ul`
    display: flex;
    align-items: center;
  `

function IconsHeader() {
    return(
        <Icons>
        { icones.map( (icone) => (
          <Icon><img src={icone} alt='icon'/></Icon>
        ))}
        </Icons>
    )
}

export default IconsHeader