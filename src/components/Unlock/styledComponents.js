import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(#0b0c1e, #3c2940);
  min-height: 100vh;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  height: 150px;
  width: 150px;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 300;
  font-size: 22px;
`

export const Button = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  border: none;
  font-family: 'Roboto';
  border-radius: 12px;
  padding: 12px 32px;
  cursor: pointer;
  margin-top: 62px;
`
