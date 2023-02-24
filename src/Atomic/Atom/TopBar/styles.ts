import styled from "styled-components"

export const Container = styled.div`
  background-image: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  z-index: 1100;
  top: 0px;
  right: 0px;
  padding: 8px 16px;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: none;
  backdrop-filter: blur(8px);
  border-style: solid;
  border-color: rgba(194, 224, 255, 0.08);
  border-width: 0px 0px thin;
  background-color: rgba(15, 15, 15, 0.7);
  color: rgb(160, 170, 180);
  justify-content: center;
  align-items: space-around;
`