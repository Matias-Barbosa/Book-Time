import styled from 'styled-components'

const Option = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
  margin-top: 10px;
`

  const Options = styled.ul`
    display: flex;
    align-items: center;
  `

const textoOpcoes = ['CATEGORIES', 'FAVORITES', 'MY BOOKSHELL']

function OptionsHeader() {
    return (
      
        <Options>
        { textoOpcoes.map( (texto) => (
          <Option><p>{texto}</p></Option>
        ) ) }
        </Options>
    )
}

export default OptionsHeader

