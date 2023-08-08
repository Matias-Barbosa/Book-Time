import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(180deg, #49beb7 80%, #2f89b3 165%);
    color: #000;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #000;
    font-size: 30px;
    text-align: center;
    width: 100%;
    margin-top: -10px
`

const Subtitulo = styled.h3`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 40px;
`

const MostraLivro = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    margin-left: 335px;
    width: 300px;
    border: .3px dotted #FFF;
    :hover {
        box-shadow: 0 0 100px #1F807E, 0 0 50px #63BBB9;
    }

`

const NomeLivro = styled.p`
    font-size: 30px;
    color: #FFFFFF;
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return(
        <PesquisaContainer>
            <Titulo>Do you know where to start?</Titulo>
            <Subtitulo>Find your book in our store (Lideranca and Angular are the only ones :), also click tab for them to show up)</Subtitulo>
            <Input
                placeholder='Find your book...'
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            {livrosPesquisados.map( livro => (
                <MostraLivro>
                    <img src={livro.src}/>
                    <NomeLivro>{livro.nome}</NomeLivro>
                </MostraLivro>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa