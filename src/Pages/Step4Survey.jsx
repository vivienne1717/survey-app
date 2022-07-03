import React from "react";
import "./Step1Survey.css";
import { Rate, Button, Radio, Checkbox, message, Input, Divider } from 'antd';
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
            //rating: null,
            ans: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
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

    onMovieTitleChange = e => {
        var movie=this.state.movie
        var title=movie.title
        title=e.target.value
        movie.title=title
        this.setState({
            movie: movie
        })
    }

    // handleRateChange = (number) => {
    //     var movie=this.state.movie
    //     var rating=movie.rating
    //     rating = number
    //     movie.rating = rating
    //     this.setState({
    //         movie:movie
    //     })
    // }

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
    onCtrl5Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[4] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl6Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[5] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl7Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[6] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl8Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[7] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl9Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[8] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl10Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[9] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl11Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[10] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl12Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[11] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl13Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[12] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl14Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[13] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl15Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[14] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl16Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[15] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl17Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[16] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl18Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[17] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl19Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[18] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };
    onCtrl20Change = e => {
        var movie = this.state.movie
        var ans = movie.ans
        ans[19] = e.target.value
        movie.ans = ans
        this.setState({
            movie:movie
        });
    };


    validateAns = () => {
        var ctrl1 = this.state.ctrl1
        var ctrl2 = this.state.ctrl2
        var ctrl3 = this.state.ctrl3
        var ctrl4 = this.state.ctrl4
        var ctrl5 = this.state.ctrl5
        var ctrl6 = this.state.ctrl6
        var ctrl7 = this.state.ctrl7
        var ctrl8 = this.state.ctrl8
        var ctrl9 = this.state.ctrl9
        var ctrl10 = this.state.ctrl10
        var ctrl11 = this.state.ctrl11
        var ctrl12 = this.state.ctrl12
        var ctrl13 = this.state.ctrl13
        var ctrl14 = this.state.ctrl14
        var ctrl15 = this.state.ctrl15
        var ctrl16 = this.state.ctrl16
        var ctrl17 = this.state.ctrl17
        var ctrl18 = this.state.ctrl18
        var ctrl19 = this.state.ctrl19
        var ctrl20 = this.state.ctrl20

        if(this.state.movie.title === '' || this.state.movie.title === null){
            message.error('Please enter your worker ID')
            return false;
        }
        // if(this.state.movie.rating === null || this.state.movie.rating === 0 ){
        //     message.error('Please rate movie')
        //     return false;
        // }
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
        if (ctrl5 == null) {
            message.error('Please complete question 5')
            return false;
        }
        if (ctrl6 == null) {
            message.error('Please complete question 6')
            return false;
        }
        if (ctrl7 == null) {
            message.error('Please complete question 7')
            return false;
        }
        if (ctrl8 == null) {
            message.error('Please complete question 8')
            return false;
        }
        if (ctrl9 == null) {
            message.error('Please complete question 9')
            return false;
        }
        if (ctrl10 == null) {
            message.error('Please complete question 10')
            return false;
        }
        if (ctrl11 == null) {
            message.error('Please complete question 11')
            return false;
        }
        if (ctrl12 == null) {
            message.error('Please complete question 12')
            return false;
        }
        if (ctrl13 == null) {
            message.error('Please complete question 13')
            return false;
        }
        if (ctrl14 == null) {
            message.error('Please complete question 14')
            return false;
        }
        if (ctrl15 == null) {
            message.error('Please complete question 15')
            return false;
        }
        if (ctrl16 == null) {
            message.error('Please complete question 16')
            return false;
        }
        if (ctrl17 == null) {
            message.error('Please complete question 17')
            return false;
        }
        if (ctrl18 == null) {
            message.error('Please complete question 18')
            return false;
        }
        if (ctrl19 == null) {
            message.error('Please complete question 19')
            return false;
        }
        if (ctrl20 == null) {
            message.error('Please complete question 20')
            return false;
        }
        return true
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
                        Your Worker ID:
                    </div>
                    <Input value={this.state.movie.title} onChange={this.onMovieTitleChange}  style={{ width: '50%' }}/> 
                </div>
                <Divider />
                {/* <div className='question'>
                    <div className='title'>
                        Please provide an overall rating of the movie:
                    </div>
                    <Rate allowHalf allowClear onChange={this.handleRateChange} value={this.state.movie.rating}></Rate>
                </div> */}

                <div className='question'>
                    <div className='title'>
                        Please indicate how accurately the following questions describe you. <br/>
                        Indicate for each statement whether it is: <br/>
                        1. Very Inaccurate, 2. Moderately Inaccurate, 3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a description of you.
                        <Divider dashed/>
                        I am the life of the party.
                    </div>
                    <Radio.Group onChange={this.onCtrl1Change} value={this.state.movie.ans[0]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I sympathize with others’ feelings.
                    </div>
                    <Radio.Group onChange={this.onCtrl2Change} value={this.state.movie.ans[1]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I get chores done right away.
                        </div>
                    <Radio.Group onChange={this.onCtrl3Change} value={this.state.movie.ans[2]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I have frequent mood swings. 
                        </div>
                    <Radio.Group onChange={this.onCtrl4Change} value={this.state.movie.ans[3]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I have a vivid imagination. 
                        </div>
                    <Radio.Group onChange={this.onCtrl5Change} value={this.state.movie.ans[4]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I don’t talk a lot.
                        </div>
                    <Radio.Group onChange={this.onCtrl6Change} value={this.state.movie.ans[5]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I am not interested in other people’s problems.
                        </div>
                    <Radio.Group onChange={this.onCtrl7Change} value={this.state.movie.ans[6]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I often forget to put things back in their proper place.
                        </div>
                    <Radio.Group onChange={this.onCtrl8Change} value={this.state.movie.ans[7]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I am relaxed most of the time.
                        </div>
                    <Radio.Group onChange={this.onCtrl9Change} value={this.state.movie.ans[8]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I am not interested in abstract ideas.
                        </div>
                    <Radio.Group onChange={this.onCtrl10Change} value={this.state.movie.ans[9]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I talk to a lot of different people at parties.
                        </div>
                    <Radio.Group onChange={this.onCtrl11Change} value={this.state.movie.ans[10]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I feel others’ emotions.
                        </div>
                    <Radio.Group onChange={this.onCtrl12Change} value={this.state.movie.ans[11]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I like order.
                        </div>
                    <Radio.Group onChange={this.onCtrl13Change} value={this.state.movie.ans[12]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I get upset easily.
                        </div>
                    <Radio.Group onChange={this.onCtrl14Change} value={this.state.movie.ans[13]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I have difficulty understanding abstract ideas.
                        </div>
                    <Radio.Group onChange={this.onCtrl15Change} value={this.state.movie.ans[14]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I keep in the background.
                        </div>
                    <Radio.Group onChange={this.onCtrl16Change} value={this.state.movie.ans[15]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I am not really interested in others.
                        </div>
                    <Radio.Group onChange={this.onCtrl17Change} value={this.state.movie.ans[16]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I make a mess of things.
                        </div>
                    <Radio.Group onChange={this.onCtrl18Change} value={this.state.movie.ans[17]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I seldom feel blue.
                        </div>
                    <Radio.Group onChange={this.onCtrl19Change} value={this.state.movie.ans[18]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
                <div className='question'>
                    <div className='title'>
                        I do not have a good imagination.
                        </div>
                    <Radio.Group onChange={this.onCtrl20Change} value={this.state.movie.ans[19]}>
                            Very Inaccurate &ensp;
                            <Radio value={'1'}>1</Radio>
                            <Radio value={'2'}>2</Radio>
                            <Radio value={'3'}>3</Radio>
                            <Radio value={'4'}>4</Radio>
                            <Radio value={'5'}>5 &nbsp; Very Accurate</Radio>
                    </Radio.Group>
                </div>
              
            </div>
        );
    }

}