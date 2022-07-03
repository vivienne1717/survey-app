import React from "react";
import "./Step1Survey.css";
import { Modal, Button, Radio, InputNumber, Checkbox, message, Divider } from 'antd';
import Cookies from 'universal-cookie';

export default class Step1Survey extends React.Component {

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
        instructionVisible: false,
        instruction: 'Please select 5 movies that you have NOT watched before. You can select a movie by hovering over the movie poster. You will need to answer 8 questions for each movie. You can click on movie poster to see more movie information.',

        //workerID:'',
        age: null,
        gender: null,
        employment: null,
        moviewatch: null,
        english: null,
        selectedGenere: [],
        rate: null,
        rateNo: null,
        osl1: null,
        osl2: null,
        osl3: null,
        osl4: null,
        survey1: null
    }
    componentWillMount(){
        const cookies = new Cookies();
        cookies.remove('survey1', { path: '/' });
        cookies.remove('survey2', { path: '/' });
        cookies.remove('survey3', { path: '/' });
        //cookies.remove('survey2a', { path: '/' });
        const randomNum = Math.random()
        var random = localStorage.getItem("randomSeed");
        if(random == null){
            localStorage.setItem("randomSeed",randomNum);
        }
    }
    
    // onWorkerIDChange = e => {
    //     this.setState({
    //         workerID:e.target.value
    //     })
    // };
    onAgeChange = value => {
        //console.log("varibale " + window.surveyTwoAComplete)
        this.setState({
            age: value
        })
    };
    onGenderChange = e => {
        //console.log('radio checked', e.target.value);
        this.setState({
            gender: e.target.value,
        });
    };

    onEmploymentChange = e => {
        //console.log('radio checked', e.target.value);
        this.setState({
            employment: e.target.value,
        });
    };
    onMovieWatchChange = e => {
        //console.log('radio checked', e.target.value);
        this.setState({
            moviewatch: e.target.value,
        });
    };
    onEnglishChange = e => {
        //console.log('checked = ', e.target.checked);
        this.setState({
            english: e.target.value,
        });
    };
    onGenreChange = checkedValues => {
        //console.log('checked = ', checkedValues);
        this.setState({
            selectedGenere: checkedValues
        })
    };
    onRateChange = e => {
        //console.log('if rated on movielens', e.target.value);
        this.setState({
            rate: e.target.value
        })
    };
    onActiveChange = value => {
        //console.log('# of rated on movielens', value);
        this.setState({
            rateNo: value
        })
    };
    onOSL1Change = e => {
        //console.log('checked = ', e.target.checked);
        this.setState({
            osl1: e.target.value,
        });
    };
    onOSL2Change = e => {
        //console.log('checked = ', e.target.checked);
        this.setState({
            osl2: e.target.value,
        });
    };
    onOSL3Change = e => {
        //console.log('checked = ', e.target.checked);
        this.setState({
            osl3: e.target.value,
        });
    };
    onOSL4Change = e => {
        //console.log('checked = ', e.target.checked);
        this.setState({
            osl4: e.target.value,
        });
    };
    activeUser(){
        var user = this.state.rate
        if (user === 'Y')
            return true
        else
            return false
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
        //var workerID = this.state.workerID
        var gender = this.state.gender
        var age = this.state.age
        var employment = this.state.employment
        var moviewatch = this.state.moviewatch
        var english = this.state.english
        var selectedGenere = this.state.selectedGenere
        var rate = this.state.rate
        var rateNo = this.state.rateNo
        var osl1 = this.state.osl1
        var osl2 = this.state.osl2
        var osl3 = this.state.osl3
        var osl4 = this.state.osl4
        
        // if (workerID === '') {
        //     message.error('Please enter your worker ID')
        //     return false;
        // }
        if (gender === null) {
            message.error('Please enter your gender')
            return false;
        }
        if (age === null) {
            message.error('Please enter your age')
            return false;
        }
        if (employment === null) {
            message.error('Please enter your employment status')
            return false;
        }
        if (moviewatch === null) {
            message.error('Please enter your movie watching frequency')
            return false;
        }
        if (english === null) {
            message.error('Please enter your experience with watching movies in English')
            return false;
        }
        if (selectedGenere.length !== 3) {
            message.error('Please choose 3 genres')
            return false;
        }
        if (rate == null){
            message.error('Please complete question')
            return false;
        }
        if (osl1==null||osl2==null||osl3==null||osl4==null){
            message.error('Please complete question')
            return false;
        }
        return true
    }

    next = () => {
        if (this.validateAns()) {
            var survey1 = {}
            //survey1['workerID'] = this.state.workerID
            survey1['age'] = this.state.age
            survey1['gender'] = this.state.gender
            survey1['employment'] = this.state.employment
            survey1['moviewatch'] = this.state.moviewatch
            survey1['english'] = this.state.english
            survey1['selectedGenere'] = this.state.selectedGenere
            survey1['movielensRate'] = [this.state.rate, this.state.rateNo]
            survey1['osl'] = [parseInt(this.state.osl1),parseInt(this.state.osl2),parseInt(this.state.osl3),parseInt(this.state.osl4)]
            const cookies = new Cookies();
            cookies.set('survey1', survey1, { path: '/' });
            //console.log("step 1 " + JSON.stringify(survey1))
            this.setState({
                visible: false,
                instructionVisible: true
            });
        }
    }

    handleInstructionOk = () => { 
        this.setState({
           instructionVisible:false
           })
    }

    render() {
        message.config({
            top: 300,
            duration: 2,
            maxCount: 3,
        });

        const options = [
            { label: 'Action', value: 'Action' },
            { label: 'Adventure', value: 'Adventure' },
            { label: 'Animation', value: 'Animation' },
            { label: 'Biography', value: 'Biography' },
            { label: 'Comedy', value: 'Comedy' },
            { label: 'Crime', value: 'Crime' },
            { label: 'Documentary', value: 'Documentary' },
            { label: 'Drama', value: 'Drama' },
            { label: 'Family', value: 'Family' },
            { label: 'Fantasy', value: 'Fantasy' },
            { label: 'History', value: 'History' },
            { label: 'Horror', value: 'Horror' },
            { label: 'Music', value: 'Music' },
            { label: 'Musical', value: 'Musical' },
            { label: 'Mystery', value: 'Mystery' },
            { label: 'Romance', value: 'Romance' },
            { label: 'Science fiction', value: 'Science fiction' },
            { label: 'Sport', value: 'Sport' },
            { label: 'Thriller', value: 'Thriller' },
            { label: 'War', value: 'War' },
            { label: 'Western', value: 'Western' },
            { label: 'Others', value: 'Others' },
        ];

        return (

            <div>
                <Modal
                    visible={this.state.visible}
                    title="Survey Part 1"
                    onOk={this.handleOk}
                    width={window.innerWidth-100}
                    closable={false}
                    maskClosable={false}
                    footer={null}
                >
                    {/* <div className='question'>
                            Please answer the following questions and then proceed to Part 2.
                    </div> */}

                    {/* <div className='question'>
                        <div className='title'>
                            1. Your worker ID:
                        </div>
                        <Input value={this.state.workerID} onChange={this.onWorkerIDChange}  style={{ width: '50%' }}/>
                    </div> */}
                    <div className='question'>
                        <div className='title'>
                            1. Your gender:
                    </div>
                        <Radio.Group onChange={this.onGenderChange} value={this.state.gender}>
                            <Radio value={'F'}>Female</Radio>
                            <Radio value={'M'}>Male</Radio>
                        </Radio.Group>
                    </div>
                    <div className='question'>
                        <div className='title'>
                            2. Age:<br /><InputNumber min={1} max={99} onChange={this.onAgeChange} />
                        </div>
                    </div>
                    <div className='question'>
                        <div className='title'>
                            3. Your employment status:
                    </div>
                        <Radio.Group onChange={this.onEmploymentChange} value={this.state.employment}>
                            <Radio value={'Full'}>Full time (35+ hours per week)</Radio>
                            <Radio value={'Part'}>Part time (1-34 hours per week)</Radio>
                            <Radio value={'No'}>Unemployed</Radio>
                        </Radio.Group>
                    </div>
                    <Divider />
                    <div className='question'>
                        <div className='title'>
                            4. How often do you watch movies?
                    </div>
                        <Radio.Group onChange={this.onMovieWatchChange} value={this.state.moviewatch}>
                            <Radio value={'5'}>More than once a week</Radio>
                            <Radio value={'4'}>Once a week</Radio>
                            <Radio value={'3'}>Once a month</Radio>
                            <Radio value={'2'}>A few times</Radio>
                            <Radio value={'1'}>Did not watch movies in past 12 months</Radio>
                        </Radio.Group>
                    </div>
                    <div className='question'>
                        <div className='title'>
                            5. Is English the most dominant language in the movies you have watched? 
                    </div>
                        <Radio.Group onChange={this.onEnglishChange} value={this.state.english}>
                            <Radio value={'Y'}>Yes</Radio>
                            <Radio value={'N'}>No</Radio>
                        </Radio.Group>
                    </div>
                    <div className='question'>
                        <div className='title'>
                           6.  Which of the following genres of movies do you like best? (Please select 3 genres)
                        </div>
                        <Checkbox.Group options={options} onChange={this.onGenreChange} />
                    </div>
                    <div className='question'>
                        <div className='title'>
                            7. Have you ever rated a movie on MovieLens (movielens.org)?
                    </div>
                        <Radio.Group onChange={this.onRateChange} value={this.state.rate}>
                            <Radio value={'Y'}>Yes</Radio>
                            <Radio value={'N'}>No</Radio>
                        </Radio.Group>
                    </div>
                    <div className={this.activeUser() ? 'question' : 'hidden'} >
                        <div className='title'>
                             7.1. Approximately how many moives have you rated on movielens.org? <br /><InputNumber min={1} max={999} onChange={this.onActiveChange} />
                        </div>
                    </div>
                    <Divider />
                    <div className='question'>
                        <div className='title'>
                            8. I like to experience novelty and change in daily routine.
                    </div>
                        <Radio.Group onChange={this.onOSL1Change} value={this.state.osl1}>
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
                            9. I like activities that offer change and variety.
                    </div>
                        <Radio.Group onChange={this.onOSL2Change} value={this.state.osl2}>
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
                            10. I am continually seeking new ideas and experiences.
                    </div>
                        <Radio.Group onChange={this.onOSL3Change} value={this.state.osl3}>
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
                            11. I like to find new and unfamiliar experiences.
                    </div>
                        <Radio.Group onChange={this.onOSL4Change} value={this.state.osl4}>
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




                    <div style={{ textAlign: "right" }}>
                        <Button style={{ marginLeft: 8 }} type="primary" onClick={() => this.next()}>
                            Proceed to Part 2
                        </Button>
                    </div>
                </Modal>
                <Modal
                    visible={this.state.instructionVisible}
                    title="Survey Part 2"
                    onOk={this.handleOk}
                    // width={1000}
                    width={window.innerWidth-600}
                    closable={false}
                    maskClosable={false}
                    footer={null}
                >

                    <div className='question'>
                        Instruction: 
                        <br /><br />
                        {this.state.instruction}<br /><br />
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