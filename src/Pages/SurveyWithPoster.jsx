import React from "react";
import { Checkbox, Row, Col, Radio, Table, Rate } from 'antd';
import MoiveSurvey from '../Assets/MoiveSurvey';

export default class SurveyWithPoster extends React.Component {

  /* example of this.props.movie
  	"movieId": 180471,
	"title": "The Venerable W.",
	"directedBy": "Barbet Schroeder",
	"starring": "Bulle Ogier,Barbet Schroeder,Ashin Wirathu",
	"imdbId": "6642870",
	"genres": "Documentary",
	"year": 2017,
	"posterURL": "https://m.media-amazon.com/images/M/MV5BMjI0MDUxNTAzOF5BMl5BanBnXkFtZTgwOTEwOTIzMjI@._V1_SX300.jpg"
  
  */
  state = {
    ans: this.props.movie.ans//initiate array of anwsers
  }


  componentWillReceiveProps(nextProps) {
    var ans = nextProps.movie.ans
    this.setState({
      ans:ans
    })
  }
  
  createTableDate1 = () => {
    var data = []
    for (var i = 0; i < MoiveSurvey.length/2; i++) {
      var o = {
        key: i,
        Title: MoiveSurvey[i].title
      }
      data.push(o)
    }
    return data
  }
  createTableDate2 = () => {
    var data = []
    for (var i = MoiveSurvey.length/2; i < MoiveSurvey.length; i++) {
      var o = {
        key: i,
        Title: MoiveSurvey[i].title
      }
      data.push(o)
    }
    return data
  }

  selectAns = (index,values) => {
    //console.log("question " + index.key+ " value: "+values+' is selected')
    var questionNumber = index.key 
    var selectedAns = values

    var ans = this.state.ans 
    ans[index.key] = values 
    this.setState({
      ans:ans
    })
  }

  checkSelected = (index,value) =>{
    var selected = this.state.ans[index.key]
    if(selected === value)
      return true 
    else 
      return false
  }

  render() {

    const columns = [
      {
        title: '',
        dataIndex: 'Title',
        key: '0',
        width: 280,
        render: text => (
          <span>
            {text}
          </span>
        )
      },
      {
        title: '1 Strongly Disagree',
        dataIndex: 1,
        key: '1',
        width: 70,
        render: (record,index) => (
          <span>
            <Radio onChange={() => this.selectAns(index,1)} checked={this.checkSelected(index,1)}></Radio>
          </span>
        )
      },
      {
        title: '2',
        dataIndex: 2,
        key: '2',
        width: 50,
        render: (record,index) => (
          <span>
            <Radio onChange={() => this.selectAns(index,2)} checked={this.checkSelected(index,2)}></Radio>
          </span>
        )
      },
      {
        title: '3',
        dataIndex: 3,
        key: '3',
        width: 50,
        render: (record,index) => (
          <span>
            <Radio onChange={() => this.selectAns(index,3)} checked={this.checkSelected(index,3)}></Radio>
          </span>
        )
      },
      {
        title: '4',
        dataIndex: 4,
        key: '4',
        width: 50,
        render: (record,index) => (
          <span>
            <Radio onChange={() => this.selectAns(index,4)} checked={this.checkSelected(index,4)}></Radio>
          </span>
        )
      },
      {
        title: '5',
        dataIndex: 5,
        key: '5',
        width: 50,
        render: (record,index) => (
          <span>
           <Radio onChange={() => this.selectAns(index,5)} checked={this.checkSelected(index,5)}></Radio>
          </span>
        )
      },
      {
        title: '6',
        dataIndex: 6,
        key: '6',
        width: 50,
        render: (record,index) => (
          <span>
           <Radio onChange={() => this.selectAns(index,6)} checked={this.checkSelected(index,6)}></Radio>
          </span>
        )
      },
      {
        title: '7 Strongly Agree',
        dataIndex: 7,
        key: '7',
        width: 70,
        render: (record,index) => (
          <span>
           <Radio onChange={() => this.selectAns(index,7)} checked={this.checkSelected(index,7)}></Radio>
          </span>
        )
      },
    ];

    let movie = this.props.movie
    return (
      <div>
        <Row>
          <Col span={6}>
            {/*
                for movie poster
                */}
            <img style={{ margin: 'auto', marginTop: '30%', cursor: 'zoom-out', width: '80%' }} src={movie.posterURL}></img>
            <p style={{ margin: 'auto', width: '80%'}}> {movie.title} </p>
          </Col>
          <Col span={18}>
            <Table dataSource={this.createTableDate1()} columns={columns} pagination={false}></Table>
            <Table dataSource={this.createTableDate2()} columns={columns} pagination={false}></Table>
          </Col>

        </Row>

      </div>
    );
  }

}