import React from "react";
import "./Part1Modal.css";
import { Modal, Button } from 'antd';
import { Steps, message } from 'antd';
import SurveyWithPoster from './SurveyWithPoster';
import Step4Survey from './Step4Survey';
import Cookies from 'universal-cookie';

export default class Part1Modal extends React.Component {

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
    visible: false,
    step4visible: false,
    current: 0,
    current2: 0,
    navigate: false,
    step4movies: [
      {
        title: null,
        //rating: null,
        //ans: [8, 8, 8, 8, 8, 8, 8, 8]
      }],
    instructionVisible: false
  }

  toggleVisible = () => {
    var visible = this.state.visible
    this.setState({
      visible: !visible
    })
  }

  handleOk = () => {

  }
  handleCancel = () => {
    var visible = false;
    this.setState({
      visible: false
    })
  }

  next() {
    //console.log("value " + JSON.stringify(this.props.selectedMovies))
    if (this.validationSingleRating(this.props.selectedMovies[this.state.current])) {
      const current = this.state.current + 1;
      this.setState({ current });
    }
  }

  validationSingleRating(movie) {
    var ans = movie.ans
    if (ans.length == 8) {
      if (ans[0] == 8 || ans[1] == 8 || ans[2] == 8 || ans[3] == 8 || ans[4] == 8 || ans[5] == 8 || ans[6] ==8|| ans[7] ==8){
        message.error('Please complete all questions')
        return false;
      } else {
        return true;
      }
    } }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  handleCancel2 = () => {
    var visible = false;
    this.setState({
      visible: false
    })
  }

  validateSingleStep4Movie(movie) {
    var title = movie.title
    //var rating = movie.rating
    //var ans = movie.ans
    if (title==null || title==''){
    //if (title == null || title == '' ||rating == null || rating == 0 || ans[0] == 8 || ans[1] == 8 || ans[2] == 8 || ans[3] == 8 || ans[4] == 8 || ans[5] == 8 || ans[6] ==8){
      message.error('Please complete all questions')
      return false;
    } else {
      return true;
    }

  }
  next2() {
    var step4movies = this.state.step4movies
    if (this.validateSingleStep4Movie(step4movies[this.state.current2])) {
      const current2 = this.state.current2 + 1;
      this.setState({ current2 });
    }
  }

  prev2() {
    const current2 = this.state.current2 - 1;
    this.setState({ current2 });
  }
  done() {
    //validate all answers 
    if (!this.props.fromStep3) {
      var selectedMovies = this.props.selectedMovies

      for (var i = 0; i < selectedMovies.length; i++) {
        var movie = selectedMovies[i]
        var ans = movie.ans
        for (var i = 0; i < ans.length; i++) {
          if (ans === 8) {
            message.error('Please complete survery for movie: ' + movie.title)
            return false;
          }
        }
      }
      const cookies = new Cookies();
      cookies.set('survey2', this.reduceCookieSize(selectedMovies), { path: '/' });
     // console.log("survey 2a "+ JSON.stringify(cookies.get('survey2a')))
      console.log("survey 2 " + JSON.stringify(selectedMovies))

      this.setState({
        instructionVisible: true
      })
    } else {
      var selectedMovies = this.props.selectedMovies

      const cookies = new Cookies();
      cookies.set('survey3', this.reduceCookieSize(selectedMovies), { path: '/' });
      console.log("survey 3: " + JSON.stringify(selectedMovies))
      this.setState({
        visible: false,
        step4visible: true
      })
    }
  }
  handleInstructionOk = () => {
    this.setState({
      instructionVisible: false
    }, () => {
      window.location.href = '../Step3'
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

  done2() {

    const cookies = new Cookies();

    // console.log("step 1 " + JSON.stringify(cookies.get('survey1')))
    // console.log("Survey 2a "+JSON.stringify(cookies.get('survey2a')))
    // console.log("survey 2 " + JSON.stringify(cookies.get('survey2')))

    // console.log("survey 3: " + JSON.stringify(cookies.get('survey3')))

    // console.log("Step 4 " + JSON.stringify(this.state.step4movies))
    var survey1 = cookies.get('survey1')
    var survey2 = cookies.get('survey2')
    var survey3 = cookies.get('survey3')
    //var survey2a =  cookies.get('survey2a')
    var survey4 = this.state.step4movies

    //for console print only, to generate sample upload file
    /*var result = {
         survey1: survey1,
        survey2: survey2,
        survey2a:survey2a,
        survey3: survey3,
        survey4: survey4
    }
    console.log('result '+JSON.stringify(result))*/
    
    //need to only validate last survey question survey[2] for three movies
    if (this.validateSingleStep4Movie(survey4[0])) {
  

      //var db = new window.restdb("5e3e33014c212c51488ad26a");
      var db = new window.restdb("5e3e82974c212c51488ad271");
      var p = new db.response({
        survey1: survey1,
        survey2: survey2,
        //survey2a:survey2a,
        survey3: survey3,
        survey4: survey4
      });
      p.save();

      const key = 'updatable';
      message.loading({ content: 'Submitting...', key });
      setTimeout(() => {
        message.success({ content: 'Sumbitted!', key, duration: 2 });
           cookies.remove('survey1', { path: '/' });
       cookies.remove('survey2', { path: '/' });
       //cookies.remove('survey2a', { path: '/' });
       cookies.remove('survey3', { path: '/' });
        window.location.href = '../Acknowledge'
      }, 5000);//change the submit wating time (2000=2s)
    }
  }

  

  render() {

    var selectedMovies = this.props.selectedMovies
    var step4movies = this.state.step4movies

    const { Step } = Steps;

    var steps;
    if (this.props.fromStep3) {
      steps = [
        {
          title: '1st Movie',
          content: <SurveyWithPoster movie={selectedMovies[0]}>1</SurveyWithPoster>
          ,
        },
        {
          title: '2nd Movie',
          content: <SurveyWithPoster movie={selectedMovies[1]}>2</SurveyWithPoster>
          ,
        },
        {
          title: '3rd Movie',
          content: <SurveyWithPoster movie={selectedMovies[2]}>3</SurveyWithPoster>
          ,
        },
        {
          title: '4th Movie',
          content: <SurveyWithPoster movie={selectedMovies[3]}>4</SurveyWithPoster>
          ,
        },
        {
          title: '5th Movie',
          content: <SurveyWithPoster movie={selectedMovies[4]}>5</SurveyWithPoster>
          ,
        }
      ];

    } else {
      steps = [
        {
          title: '1st Movie',
          content: <SurveyWithPoster movie={selectedMovies[0]}>1</SurveyWithPoster>
          ,
        },
        {
          title: '2nd Movie',
          content: <SurveyWithPoster movie={selectedMovies[1]}>2</SurveyWithPoster>
          ,
        },
        {
          title: '3rd Movie',
          content: <SurveyWithPoster movie={selectedMovies[2]}>3</SurveyWithPoster>
          ,
        },
        {
          title: '4th Movie',
          content: <SurveyWithPoster movie={selectedMovies[3]}>4</SurveyWithPoster>
          ,
        },
        {
          title: '5th Movie',
          content: <SurveyWithPoster movie={selectedMovies[4]}>5</SurveyWithPoster>
          ,
        }
      ];
    }

    const step4Survey = [
      {
        title: 'Movie',
        content: <Step4Survey movie={step4movies[0]}></Step4Survey>
      }]


    const { current } = this.state;
    const { current2 } = this.state;

    return (

      <div>
        <Modal
          visible={this.state.visible}
          title={this.props.fromStep3 ? '' : "Survey Part 2"}
          onOk={this.handleOk}
          width={1300}
          closable={false}
          maskClosable={false}
          onCancel={this.handleCancel}
          footer={null}
        >
          
          <div className='instruction'>
            Please answer 8 questions for each movie.  
          </div>
         
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current > 0 && (
              <Button onClick={() => this.prev()}>
                Previous
            </Button>
            )}
            {current < steps.length - 1 && (
              <Button style={{ marginLeft: 8 }} type="primary" onClick={() => this.next()}>
                Next
            </Button>
            )}
            {current === steps.length - 1 && (
              <Button style={{ marginLeft: 8 }} type="primary" onClick={() => this.done()}>

                {this.props.fromStep3 ? 'Proceed to part 4' : 'Proceed to part 3'}
              </Button>
            )}

          </div>

        </Modal>
        
        <Modal
          visible={this.state.step4visible}
          title="Survey Part 4"
          onOk={this.handleOk}
          width={window.innerWidth-100}
          closable={false}
          maskClosable={false}
          onCancel={this.handleCancel}
          footer={null}
        >
          {/* <div className='instruction'>
            Please list one movie that is different from the movies you usually watch, yet you will find interesting if your friend recommends it to you. 
            <br />
            This movie should not be one of the movies that you have just rated.
          </div> */}
          <Steps current={current2}>
            {step4Survey.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{step4Survey[current2].content}</div>
          <div className="steps-action">
            {current2 > 0 && (
              <Button onClick={() => this.prev2()}>
                Previous
            </Button>
            )}
            {current2 < step4Survey.length - 1 && (
              <Button style={{ marginLeft: 8 }} type="primary" onClick={() => this.next2()}>
                Next
            </Button>
            )}
            {current2 === step4Survey.length - 1 && (
              <Button style={{ marginLeft: 8 }} type="primary" onClick={() => this.done2()}>
                Sumbit Survey
              </Button>
            )}

          </div>
        </Modal>

        <Modal
          visible={this.state.instructionVisible}
          title="Survey Part 3"
          onOk={this.handleOk}
          width={window.innerWidth-500}
          closable={false}
          maskClosable={false}
          footer={null}
        >
          <div className='question'>
            Instruction: 
            <br /><br />
            Please select and rate 5 movies that you WATCHED before. You will answer 8 questions for each movie.
          </div>

          <div style={{ textAlign: "right" }}>
            <Button style={{ marginLeft: 8 }} type="primary" onClick={() => this.handleInstructionOk()}>
              Proceed
                        </Button>
          </div>
        </Modal>
      </div>
    );
  }
}  
