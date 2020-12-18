import React from "react";
import "./Movie.css";
import { Checkbox, Rate, Popover, Tooltip } from 'antd';
import Cookies from 'universal-cookie';


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


  // popover window of rating stars
  render() {
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
          <img style={{ margin: 'auto', cursor: 'pointer' }} src={this.props.SingleMovie.posterURL} width="185.33" height="281.19"></img>
        </div>   
        <div className="movie-title">
          {this.props.SingleMovie.title/* {this.props.SingleMovie.title + " (" + parseInt(this.props.SingleMovie.year) + ")"} */}
        </div>
      </Popover>
    </div>
    )
  }
}