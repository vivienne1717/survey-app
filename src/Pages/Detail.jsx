import React from "react";

import {Icon, Row, Col } from 'antd';
import Cookies from 'universal-cookie';     
import { withRouter } from 'react-router-dom';


export default class Detail extends React.Component {
    

    state = {
      movie_info: null,
    }

    componentWillMount() {
        this.setState({
          movie_info: JSON.parse(localStorage.getItem('movie'))}, () => {
            console.log("check " + JSON.stringify(this.state.movie_info))
        })
        localStorage.removeItem('movie')
      }


    render() {

        return (
        <div>
          <Row>
            <Col span={6}>
                {/*
                    for movie poster
                    */}
                <img style={{ margin: 'auto', marginTop: '30%', marginLeft: '20%', width: '80%' }} src={this.state.movie_info.posterURL}></img>
            </Col>
            <Col span={18}>
              <p style={{marginTop:'12%', textAlign: 'left', fontSize:30, fontWeight:'bold',marginLeft: '10%' }}>Movie Title: {this.state.movie_info.title}</p>
              <br/>
              <p style={{margin:'auto', textAlign: 'left', fontSize:20, marginLeft: '10%' }}>Year: {this.state.movie_info.year}</p>
              <br/>
              <p style={{margin:'auto', textAlign: 'left', fontSize:20, marginLeft: '10%'}}>Genres: {this.state.movie_info.genres}</p>
              <br/>
              <p style={{margin:'auto', textAlign: 'left', fontSize:20, marginLeft: '10%' }}>Duration: {this.state.movie_info.runtime} minutes</p>
              <br/>
              <p style={{margin:'auto', textAlign: 'left', fontSize:20, marginLeft: '10%' }}>Directors: {this.state.movie_info.directedBy}</p>
              <br/>
              <p style={{margin:'auto', textAlign: 'left', fontSize:20, marginLeft: '10%' }}>Top Cast: {this.state.movie_info.starring}</p>
              <br/>
              <p style={{margin:'auto', textAlign: 'left', fontSize:20, marginRight: '30%', marginLeft: '10%' }}>Description: {this.state.movie_info.description}</p>
            </Col>
          </Row>


        </div>
        );
    }
}

