import { Container } from '@mui/material'
import React from 'react'
import TopBar from '../Atom/TopBar'

export const AppTemplate = ({children}: React.PropsWithChildren) => {
  return (
    <React.Fragment>
      <TopBar />
      <Container sx={{ paddingTop: "70px" }}>
        {children}
      </Container>
    </React.Fragment>
  )
}
