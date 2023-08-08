import styled from "styled-components"

const Input = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 0.1px dashed #FFF;
    padding: 10px 100px;
    border-radius: 20px;
    width: 130px;
    color: #FFF;
    font-size: 20px;
    margin-bottom: 10px;
    opacity: 0.6;
    
    &::placeholder {
            color: #FFF;
            font-size: 16px;
            opacity: 0.9;
    }
`

export default Input