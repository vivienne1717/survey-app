import * as React from "react";
import "./MovieList.css";
import "./Movie";
import Movie from "./Movie";
import MovieFullList1 from '../Assets/MovieFullList';
import Part1Modal from "./Part1Modal.jsx";
import { Pagination } from 'antd';
import Cookies from 'universal-cookie';

import { Row, Col } from 'antd';
import SurveyWithPoster from "./SurveyWithPoster";

export default class MovieList extends React.Component {
  childRef: React.RefObject<Part1Modal> = React.createRef();

  state = {
    genre: "Genre 1",
    listOfMovies: Array,
    filteredMovies: Array,
    displayMovies: Array,
    currentPage: 1,
    pageSize: 200,
    selectedMovies: Array,
    surveyMovies: [],
    selectedMovie2: Array,
    surveyComplete: false
  }

  componentWillMount() {
    var genreFilters = this.props.genreFilters
    var yearFilter = this.props.yearFilter

    let filteredMovies = []
    if (genreFilters.length > 0)
      filteredMovies = this.filterMovieList(MovieFullList1, genreFilters, yearFilter)
    this.setState({
      listOfMovies: MovieFullList1,
      displayMovies: [],
      filteredMovies: filteredMovies,
      selectedMovies: [],
      selectedMovies2: []
    })
  }

  componentDidMount() {
    let list = this.createMovieList(this.state.currentPage, this.state.pageSize)
    this.setState({
      displayMovies: list
    })
  }

  componentWillReceiveProps(nextProps) {
    var genreFilters = nextProps.genreFilters
    var yearFilter = nextProps.yearFilter
    let filteredMovies = []
    if (genreFilters.length > 0)
      filteredMovies = this.filterMovieList(MovieFullList1, genreFilters, yearFilter)
    this.setState({
      filteredMovies: filteredMovies
    }, () => {
      //update display list 
      let displayList = this.createMovieList(1, this.state.pageSize)
      this.setState({
        displayMovies: displayList,
        currentPage: 1
      })
    })
  }


  filterMovieList = (movieList, genreList, yearFilter) => {
    let result1 = []
    movieList.forEach(movie => {
      var year = parseInt(movie.year)
      var genres = movie.genres
      var genresInArr = genres.split(',').map(item=>item.trim())
      let intersect = genresInArr.filter(value => -1 !== genreList.indexOf(value))
      let yearStart = 2000
      let yearEnd = 2019

      if(yearFilter !== 'All Movies') {
        yearStart = parseInt(yearFilter.split('-')[0])
        yearEnd = parseInt(yearFilter.split('-')[1])
      }

      if (intersect.length > 0 && yearStart <= year && year <= yearEnd)
        result1.push(movie)
    });
    var ranchoose = []
    var result = []
    while (ranchoose.length < result1.length) {
      var ranum = Math.floor(Math.random() * result1.length) + 0;
      if (ranchoose.indexOf(ranum) == -1) {
        ranchoose.push(ranum)
        result.push(result1[ranum])
      }
    }
    return result;
  }




  createMovieList = (page, pageSize) => {
    let list = [];
    //console.log("now rendering movie list "+ JSON.stringify(this.state.listOfMovies))
    const cookies = new Cookies();
    let survey2 = cookies.get('survey2')
    //console.log('survey 2 now contains' + JSON.stringify(survey2))
    this.state.filteredMovies.forEach(movie => {
      if (!movie['rating'] && movie['rating'] !== 0.0)
        movie['rating'] = 0.0
      if (this.props.fromStep3) {
        if (!this.checkSurvey2Contains(survey2, movie)) {
          var movie_ = <Col span={3} style={{ width: 'auto', height: 425, padding:5 }}> <Movie step3={this.props.fromStep3} SingleMovie={movie} onAddMovie={this.addMovieToSelection} /></Col>
          list.push(movie_)
        }
      } else {
        var movie_ = <Col span={3} style={{ width: 'auto', height: 425, padding:5}}> <Movie step3={this.props.fromStep3} SingleMovie={movie} onAddMovie={this.addMovieToSelection} /></Col>
        list.push(movie_)
      }
    })

    var starting = (page - 1) * pageSize;
    var ending = (starting + pageSize) > this.state.filteredMovies.length ? this.state.filteredMovies.length : starting + pageSize

    return list.slice(starting, ending);
  }

  onShowSizeChange = (current, pageSize) => {
    var list = this.createMovieList(1, pageSize)
    this.setState({
      currentPage: 1,
      pageSize: pageSize,
      displayMovies: list
    })
  }

  checkSurvey2Contains(survey2, movie) {
    var result = false;
    for (var i = 0; i < survey2.length; i++) {
      var movieId = survey2[i].movieId
      var _movieId = movie.movieId
      if (movieId === _movieId)
        result = true
    }
    return result;
  }
  onPageChange = (page, pageSize) => {
    var list = this.createMovieList(page, pageSize)

    this.setState({
      currentPage: page,
      displayMovies: list
    })
  }

  addMovieToSelection = (movie) => {
    var fromStep3 = this.props.fromStep3
    //console.log("from Step 3 " + fromStep3)
    const cookies = new Cookies();

    if (fromStep3) {
      var selectedMovies = this.state.selectedMovies
      if (selectedMovies.length >= 0 && selectedMovies.length < 6) {
        if (selectedMovies.indexOf(movie) === -1)
          selectedMovies.push(movie)
        else {
          if (movie['rating'] <= 0) {
            var index = selectedMovies.indexOf(movie)
            selectedMovies.splice(index, 1)
          }
        }
      }
      if (selectedMovies.length === 5) {
        selectedMovies.forEach(movie => {
          movie.ans = [8, 8, 8, 8, 8, 8, 8, 8] // initialze ans for survery qns
        });
        this.childRef.current.toggleVisible()
      }
      this.setState({
        surveyMovies: selectedMovies
      })
    } else {
      var selectedMovies = this.state.selectedMovies
      if (selectedMovies.length >= 0 && selectedMovies.length < 6) {
        if (selectedMovies.indexOf(movie) === -1)
          selectedMovies.push(movie)
        else {
          if (movie['rating'] <= 0) {
            var index = selectedMovies.indexOf(movie)
            selectedMovies.splice(index, 1)
          }
        }
      }
      //set the number of movies required selection 
      if (selectedMovies.length === 5) {
        //cookies.set('survey2a', this.reduceCookieSize(selectedMovies), { path: '/' });
        //console.log("survey 2a " + JSON.stringify(selectedMovies))
        //selectedMovies = this.selectRandomMovies(selectedMovies, 5, 15) //change no. as well if change no. of selected movies
        selectedMovies.forEach(movie => {
          movie.ans = [8, 8, 8, 8, 8, 8, 8, 8] // initialze ans for survery qns
        });
        this.childRef.current.toggleVisible()
      }
      this.setState({
        surveyMovies: selectedMovies
      })
    }
  }

  selectRandomMovies(movies, wantNumber, maxNumber) {
    var numberList = []
    var movieList = []
    while (numberList.length < wantNumber) {
      var num = Math.floor(Math.random() * ((maxNumber - 1) - 0 + 1)) + 0;
      if (numberList.indexOf(num) == -1) {
        numberList.push(num)
        movieList.push(movies[num])
      }
    }
    return movieList
  }

  checkSurveyComplete = (value) => {

    this.setState({
      surveyComplete: true
    })
  }

  reduceCookieSize(selectedMovies){
    let slimCookie = [] 
    for(var i=0;i<selectedMovies.length;i++){
      var movie = {}
      movie.title = selectedMovies[i].title
      movie.movieId = selectedMovies[i].movieId
      movie.rating = selectedMovies[i].rating
      movie.ans = selectedMovies[i].ans
      slimCookie.push(movie)
    }

    return slimCookie;
  }

  render() {

    return (
      <div>
        <div className="movie-counter">
          You have selected {this.state.selectedMovies.length}/{this.props.fromStep3 ? 5 : 5} movies
          </div>
        <div className="list-panel">

          <div className="display-movie">
            <Row gutter={[24, 20]} justify="space-between" >
              {this.state.displayMovies}
            </Row>
          </div>

          <Pagination
            showSizeChanger
            pageSizeOptions={['50', '100', '150', '200']}
            onShowSizeChange={this.onShowSizeChange}
            current={this.state.currentPage}
            defaultCurrent={2}
            pageSize={this.state.pageSize}
            onChange={this.onPageChange}
            total={this.state.filteredMovies.length}
          />
          <Part1Modal ref={this.childRef} selectedMovies={this.state.surveyMovies} onSurveyComplete={this.checkSurveyComplete} fromStep3={this.props.fromStep3}></Part1Modal>
        </div>
      </div>

    );
  }

}