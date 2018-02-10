import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { SaveBtn } from "../components/Button/SaveBtn.js";
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid'
import { List, ListItem } from "../components/List";




class UserTable extends Component {


  state = {

    requests: []
  }

  componentDidMount() {

    this.getRequests();

  }


  getRequests = () => {

    API.getRequests()
      .then(res => this.setState({ requests: res.data }))
      .catch(err => console.log(err));

  }




  render() {


    return (
      <div>
        <div>
          <SaveBtn value='Create Request' />
        </div>

        <Container fluid className='card'>

          <Row className='card-header'>
            <Col size="md-2">
              <h6>Request Id </h6>
            </Col>
            <Col size="md-2">
              <h6>Equipment</h6>
            </Col>
            <Col size="md-2">
              <h6>Description</h6>
            </Col>
            <Col size="md-2">
              <h6>Quantity</h6>
            </Col>
            <Col size="md-2">
              <h6>Justification</h6>
            </Col>
          </Row>

          {this.state.requests.length ? (
            <List>
              {this.state.requests.map(requests => (
                <ListItem key={requests._id}>

                  <Row className="card-block">
                    <Col size="md-2">
                      <a href={"/api/user" + requests._id}>{requests._id}</a>
                    </Col>
                    <Col size="md-2">
                      {requests.equipment}
                    </Col>
                    <Col size="md-2">
                      {requests.description}
                    </Col>
                    <Col size="md-2">
                      {requests.quantity}
                    </Col>
                    <Col size="md-2">
                      {requests.justification}
                    </Col>
                  </Row>

                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Requests opened yet</h3>
            )}


        </Container>



      </div>)
  }
}

export default UserTable;