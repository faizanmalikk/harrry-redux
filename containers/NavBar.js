import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {useSelector} from 'react-redux'
function NavBar() {
  const amount = useSelector(state => state.amount)
  return (
    <div>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
  
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
  <button className='btn btn-primary' disabled={true}>Total amount : {amount}</button>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBar