import { Container } from '@mui/material'
import React from 'react'
import TopBar from '../Atom/TopBar'

export const AuthTemplate = ({children}: React.PropsWithChildren) => {
  return (
    <React.Fragment>
      <Container>
        {children}
      </Container>
    </React.Fragment>
  )
}
