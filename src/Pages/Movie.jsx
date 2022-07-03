import React from "react";
import "./Movie.css";
import { Checkbox, Rate, Popover, Button, Tooltip } from 'antd';
import { BrowserRouter, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Detail from './Detail';




export default class Movie extends React.Component {

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
    SingleMovie: null,
  }
  componentWillMount() {
    this.setState({
      SingleMovie: this.props.SingleMovie
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      SingleMovie: nextProps.SingleMovie
    })
  }

  handleRateChange = (number) => {
    //console.log("rate changed " + number)
    var SingleMovie = this.state.SingleMovie
    SingleMovie['rating'] = number
    this.setState({
      SingleMovie: SingleMovie
    })

    this.props.onAddMovie(this.state.SingleMovie)

  }
  
  handleSelectChange = e => {
    //console.log("rate changed " + number)
    var SingleMovie = this.state.SingleMovie
    //SingleMovie['rating'] = number
    this.setState({
      SingleMovie: SingleMovie
    })
    this.props.onAddMovie(this.state.SingleMovie)
  }

  handleClickPoster = e => {
    localStorage.setItem('movie', JSON.stringify(this.state.SingleMovie))
    // console.log(this.state.SingleMovie.movieId)
    // return (
    //   <Detail dataparent={this.state.SingleMovie.movieId} />
    // )
  }


  // popover window of rating stars
  render() {
    if (this.props.step3){
      return (
        <div>
          <Popover placement="bottom"
            content = {(
                <div>
                    <text style={{ fontSize: '15px', color:'green', fontWeight: 'bold',  }}>Please rate: </text> <br />
                    <Rate allowHalf allowClear onChange={this.handleRateChange} value={this.state.SingleMovie['rating']}></Rate>
                </div>
            )}
            >
            <div className="movie-img">
              {/* <Link to={{
                pathname: '/Detail',
                state: {datapassed:this.props.SingleMovie.movieId}
               }} target='_blank'> */}
              <Link to='/Detail' target='_blank'>
                <img style={{ margin: 'auto', cursor: 'pointer' }} src={this.props.SingleMovie.posterURL} width="185.33" height="281.19"
                onClick={this.handleClickPoster}></img>
              </Link> 
            </div>   
            <div className="movie-title">
              {this.props.SingleMovie.title}
            </div>
          </Popover>
        </div>
        )
    } else {
      return (
        <div>
          <Popover placement="bottom"
            content = {(
                <div>
                    <Button type="primary" onClick={this.handleSelectChange}> Select </Button>
                </div>
            )}
            >
            <div className="movie-img">
              <Link to='/Detail' target='_blank'>
                <img style={{ margin: 'auto', cursor: 'pointer' }} src={this.props.SingleMovie.posterURL} width="185.33" height="281.19"
                onClick={this.handleClickPoster}></img>
              </Link> 
            </div>   
            <div className="movie-title">
              {this.props.SingleMovie.title}
            </div>
          </Popover>
        </div>
        )
    }
    
  }
}