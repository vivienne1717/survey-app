import React from "react";
import "./Step1Survey.css";
import { Rate, Button, Radio, Checkbox, message, Input } from 'antd';
import Cookies from 'universal-cookie';

export default class Step4Survey extends React.Component {

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
        visible: true,
        movie: {
            title: null,
            rating: null,
            ans: [8, 8, 8, 8]
        },
    }

    componentWillReceiveProps(nextProps) {
        var movie = nextProps.movie
        this.setState({
          movie:movie
        })
      }
    componentWillMount(){
        var movie = this.props.movie
        this.setState({
            movie:movie
        })
    }

    onCtrl1Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[0] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl2Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[1] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl3Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[2] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl4Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[3] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };

    onMovieTitleChange = e => {
        var movie = this.state.movie
        movie.title = e.target.value
        this.setState({
            movie:movie
        })
    }
    toOptions(selectedGenere) {
        var options = []

        selectedGenere.forEach(o => {
            var option = {
                label: o,
                value: o
            }
            options.push(o)
        });

        return options;
    }

    validateAns = () => {
        var ctrl1 = this.state.ctrl1
        var ctrl2 = this.state.ctrl2
        var ctrl3 = this.state.ctrl3
        var ctrl4 = this.state.ctrl4
        if(this.state.movie.title === null){
            message.error('Please enter movie title')
            return false;
        }
        if(this.state.movie.rating === null){
            message.error('Please rate movie')
            return false;
        }
        if (ctrl1 == null) {
            message.error('Please complete question 1')
            return false;
        }
        if (ctrl2 == null) {
            message.error('Please complete question 2')
            return false;
        }
        if (ctrl3 == null) {
            message.error('Please complete question 3')
            return false;
        }
        if (ctrl4 == null) {
            message.error('Please complete question 4')
            return false;
        }
        return true
    }

    handleRateChange = (number) => {
        var movie = this.state.movie
        movie.rating = number
        this.setState({
            movie: movie
        })
    }


    next = () => {
        if (this.validateAns()) {
            var _survey4 = this.state.movie
            const cookies = new Cookies();
            var survey4 = cookies.get('survey4')
            if(survey4 == null){
                var arr = []
                arr.push(_survey4)
                cookies.set('survey4', arr, { path: '/' });
            }
            survey4.push(_survey4)
            cookies.set('survey4', survey4, { path: '/' });
            this.setState({
                visible: false
            });
        }
    }

    render() {

        return (

            <div style={{textAlign:'left'}}>
            
                <div className='question'>
                    <div className='title'>
                        Movie Title:
                    </div>
                    <Input value={this.state.movie.title} onChange={this.onMovieTitleChange}  style={{ width: '33%' }}/> 
                </div>
                <div className='question'>
                    <div className='title'>
                        Please provide an overall rating of the movie:
                    </div>
                    <Rate allowHalf allowClear onChange={this.handleRateChange} value={this.state.movie.rating}></Rate>
                </div>

                <div className='question'>
                    <div className='title'>
                        I would not normally discover this movie on my own.
                    </div>
                    <Radio.Group onChange={this.onCtrl1Change} value={this.state.movie.ans[0]}>
                            Strongly Disagree &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5</Radio>
                            <Radio value={'6'}>6</Radio>
                            <Radio value={'7'}>7 &nbsp; Strongly Agree</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        This movie is different (e.g., in style, genre, topic) from the movies I usually watch.
                    </div>
                    <Radio.Group onChange={this.onCtrl2Change} value={this.state.movie.ans[1]}>
                            Strongly Disagree &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5</Radio>
                            <Radio value={'6'}>6</Radio>
                            <Radio value={'7'}>7 &nbsp; Strongly Agree</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                    This movie is a pleasant surprise to me.
                        </div>
                    <Radio.Group onChange={this.onCtrl3Change} value={this.state.movie.ans[2]}>
                            Strongly Disagree &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5</Radio>
                            <Radio value={'6'}>6</Radio>
                            <Radio value={'7'}>7 &nbsp; Strongly Agree</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                    I did not expect that I could find this interesting movie.
                        </div>
                    <Radio.Group onChange={this.onCtrl4Change} value={this.state.movie.ans[3]}>
                            Strongly Disagree &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5</Radio>
                            <Radio value={'6'}>6</Radio>
                            <Radio value={'7'}>7 &nbsp; Strongly Agree</Radio>
                    </Radio.Group>
                </div>
              
            </div>
        );
    }

}