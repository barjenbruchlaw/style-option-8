import React, {useState} from 'react'
import { Container, Navbar, Nav, Table, Row, Col, Modal, Form, Button } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'
import { HouseDoorFill } from 'react-bootstrap-icons'
import { BookmarkCheck } from 'react-bootstrap-icons'
import { FileEarmarkFill } from 'react-bootstrap-icons'
import { FolderFill } from 'react-bootstrap-icons'
import { ListCheck } from 'react-bootstrap-icons'
import { CurrencyDollar } from 'react-bootstrap-icons'
import { Gear } from 'react-bootstrap-icons'
import { GearFill } from 'react-bootstrap-icons'
import './bootstrap.min.spacelab.css'

const App = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>


      <Navbar bg="light">
        <Container className='fw-bold text-center'>
          <Nav.Link href="#dash"><HouseDoorFill className='fs-3' /><br />Dashboard</Nav.Link>
          <Nav.Link href="#search"><Search className='fs-3' /><br />Search for a case</Nav.Link>
          <Nav.Link href="#addcase"><BookmarkCheck className='fs-3' /><br />Add new case</Nav.Link>
          <Nav.Link href="#createdoc" disabled><FileEarmarkFill className='fs-3' /><br />Create Documents</Nav.Link>
          <Nav.Link href="#filecase" disabled><FolderFill className='fs-3' /><br />File case with court</Nav.Link>
          <Nav.Link href="#docket" disabled><ListCheck className='fs-3' /><br />Prepare docket for court</Nav.Link>
          <Nav.Link href="#invoice" disabled><CurrencyDollar className='fs-3' /><br />Prepare invoices</Nav.Link>
          <Nav.Link href="#system" ><Gear className='fs-3' /><br />System Maintenance</Nav.Link>
          <Nav.Link href="#settings"><GearFill className='fs-3' /><br />Settings</Nav.Link>
        </Container>
      </Navbar>

<h2 className='m-5 pt-5'>Search for a case:</h2>

<Form inline>
      <Form.Control placeholder='Search by Property Manager, Defendant or Address'/>
</Form> <br /> <br />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date placed</th>
            <th>Status</th>
            <th>Property Manager</th>
            <th>Defendant 1</th>
            <th>Address</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>2022-01-21</th>
            <th>Out for service</th>
            <th>Prism Real Estate Services</th>
            <th>John L. Smith</th>
            <th>1234 Main Street #101</th>
            <th><Button onClick={handleShow}>Edit</Button></th>
          </tr>
          <tr>
            <th>2</th>
            <th>2022-02-01</th>
            <th>Out for service</th>
            <th>Prism Real Estate Services</th>
            <th>Mary A. Jones</th>
            <th>1234 Main Street #201</th>
            <th><Button disabled>Edit</Button></th>
          </tr>
          <tr>
          <th>3</th>
            <th>2022-02-10</th>
            <th>Out for service</th>
            <th>Prism Real Estate Services</th>
            <th>Frank R. Baker</th>
            <th>1234 Main Street #302</th>
            <th><Button disabled>Edit</Button></th>
          </tr>
          <tr>
          <th>4</th>
            <th>2022-02-21</th>
            <th>Petition Filed</th>
            <th>Prism Real Estate Services</th>
            <th>Jane M. Jones</th>
            <th>1234 Main Street #405</th>
            <th><Button disabled>Edit</Button></th>
          </tr>
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose} size='xl'>
        <Modal.Header className='bg-light' closeButton>
          <Modal.Title>Edit Case</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Container>
                <Row className='pt-3'>
                  <Col>
                    <Form.Label>Property Manager:</Form.Label>
                    <Form.Select><option>Prism Real Estate Services</option></Form.Select>
                  </Col>
                  <Col>
                    <Form.Label>Property Owner:</Form.Label>
                    <Form.Select>
                      <option>123 Main, LLC</option>
                      <option>456 Main, LLC</option>
                      <option>789 Main, LLC</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row className='pt-3'>
                  <Col>
                    <Form.Label>Street Address:</Form.Label>
                    <Form.Control value='1234 Main Street' />
                  </Col>
                  <Col>
                    <Form.Label>Unit:</Form.Label>
                    <Form.Control value='101' />
                  </Col>
                </Row>
                <Row className='pt-3'>
                  <Col>
                    <Form.Label>City:</Form.Label>
                    <Form.Control value='Kansas City' />
                  </Col>
                  <Col xs={2}>
                  <Form.Label>State:</Form.Label>
                  <Form.Select>
                      <option>Missouri</option>
                      <option>Kansas</option>
                  </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label>ZIP:</Form.Label>
                    <Form.Control value='64106' />
                  </Col>
                </Row>
                <Row className='pt-3'>
                  <Col>
                    <Form.Label>Resident 1:</Form.Label>
                    <Form.Control value='John L. Smith' />
                  </Col>
                </Row>
                <Row className='pt-3'>
                  <Col>
                    <Form.Label>Resident 2:</Form.Label>
                    <Form.Control value='Mary L. Smith' />
                  </Col>
                </Row>
              </Container>
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        </>
    )
}

export default App
