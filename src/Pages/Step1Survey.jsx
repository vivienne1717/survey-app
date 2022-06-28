import React from "react";
import "./Step1Survey.css";
import { Modal, Button, Radio, InputNumber, Checkbox, message, Input } from 'antd';
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
        instruction: 'Please select and rate 15 movies that you have watched. You can browse the movie list according to the released year and genre of movies. After you rate 15 movies, 5 out of those 15 movies will be randomly chosen and presented to you. You will need to answer 4 questions for each movie.',

        workerID:null,
        age: null,
        gender: null,
        selectedGenere: [],
        favouriteGenere: [],
        ctrl3: null,
        ctrl4: null,
        ctrl5: null,
        survey1: null
    }
    componentWillMount(){
        const cookies = new Cookies();
        cookies.remove('survey1', { path: '/' });
        cookies.remove('survey2', { path: '/' });
        cookies.remove('survey3', { path: '/' });
        cookies.remove('survey2a', { path: '/' });
    }
    
    onWorkerIDChange = e => {
        var workerID = this.state.workerID
        workerID = e.target.value
        this.setState({
            workerID:workerID
        })
    };

    onGenderChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            gender: e.target.value,
        });
    };

    onCtrl3Change = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            ctrl3: e.target.value,
        });
    };
    onCtrl4Change = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            ctrl4: e.target.value,
        });
    };
    onCtrl5Change = e => {
        console.log('checked = ', e.target.checked);
        this.setState({
            ctrl5: e.target.checked,
        });
    };


    onAgeChange = value => {
        console.log("varibale " + window.surveyTwoAComplete)
        this.setState({
            age: value
        })
    }

    onGenreChange = checkedValues => {
        console.log('checked = ', checkedValues);
        this.setState({
            selectedGenere: checkedValues
        })
    }

    //for question 3 original - choose 3 from several watched genres
    // onFavouriteGenreChange = checkedValues => {
    //     console.log('checked = ', checkedValues);
    //     if (checkedValues.length > 3) {
    //         message.warning('Please select 3 only')
    //     }
    //     this.setState({
    //         favouriteGenere: checkedValues
    //     })
    // }

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
        var workerID = this.state.workerID
        var gender = this.state.gender
        var age = this.state.age
        var selectedGenere = this.state.selectedGenere
        // var favouriteGenere = this.state.favouriteGenere
        var ctrl3 = this.state.ctrl3
        var ctrl4 = this.state.ctrl4
        
        if (workerID === null) {
            message.error('Please enter your worker ID')
            return false;
        }
        if (gender === null) {
            message.error('Please enter your gender')
            return false;
        }
        if (age === null) {
            message.error('Please enter your age')
            return false;
        }
        if (selectedGenere.length !== 3) {
            message.error('Please choose 3 genres in question 4')
            return false;
        }
        // if (favouriteGenere.length !== 3) {
        //     message.error('Please select 3 favorite genres in question')
        //     return false;
        // }
        if (ctrl3 == null) {
            message.error('Please complete question 5')
            return false;
        }
        if (ctrl4 == null) {
            message.error('Please complete question 6')
            return false;
        }
        return true
    }

    validateDeclare = () => {
        var ctrl5 = this.state.ctrl5
        if (ctrl5 == null) {
            message.error('Please declare')
            return false;
        }
        return true
    }

    // showFavouriteGenre() {
    //     var genres = this.state.selectedGenere
    //     if (genres.length > 3)
    //         return true
    //     else
    //         return false;
    // }

    next = () => {
        if (this.validateAns()) {
            var survey1 = {}
            survey1['workerID'] = this.state.workerID
            survey1['age'] = this.state.age
            survey1['gender'] = this.state.gender
            survey1['selectedGenere'] = this.state.selectedGenere
            survey1['favouriteGenere'] = this.state.favouriteGenere
            survey1['ans'] = [parseInt(this.state.ctrl3), parseInt(this.state.ctrl4)]
            const cookies = new Cookies();
            cookies.set('survey1', survey1, { path: '/' });
            console.log("step 1 " + JSON.stringify(survey1))
            this.setState({
                visible: false,
                instructionVisible: true
            });
        }
    }

    handleInstructionOk = () => {
       if (this.validateDeclare()) {
           this.setState({
           instructionVisible:false
           })
       }
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
            { label: 'Comedy', value: 'Comedy' },
            { label: 'Crime', value: 'Crime' },
            { label: 'Documentary', value: 'Documentary' },
            { label: 'Drama', value: 'Drama' },
            { label: 'Family', value: 'Family' },
            { label: 'Fantasy', value: 'Fantasy' },
            { label: 'History', value: 'History' },
            { label: 'Horror', value: 'Horror' },
            { label: 'Music', value: 'Music' },
            { label: 'Mystery', value: 'Mystery' },
            { label: 'Romance', value: 'Romance' },
            { label: 'Science fiction', value: 'Science fiction' },
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

                    <div className='question'>
                        <div className='title'>
                            1. Your worker ID:
                        </div>
                        <Input value={this.state.workerID} onChange={this.onWorkerIDChange}  style={{ width: '50%' }}/>
                    </div>
                    <div className='question'>
                        <div className='title'>
                            2. Your gender:
                    </div>
                        <Radio.Group onChange={this.onGenderChange} value={this.state.gender}>
                            <Radio value={'F'}>Female</Radio>
                            <Radio value={'M'}>Male</Radio>
                        </Radio.Group>
                    </div>
                    <div className='question'>
                        <div className='title'>
                            3. Age:<br /><InputNumber min={1} max={99} onChange={this.onAgeChange} />
                        </div>
                    </div>

                    <div className='question'>
                        <div className='title'>
                           4.  Which of the following genres of movies do you like best? (Please select 3 genres)
                        </div>
                        <Checkbox.Group options={options} onChange={this.onGenreChange} />
                    </div>
                    {/* <div className={this.showFavouriteGenre() ? 'question' : 'hidden'} >
                        <div className='title'>
                             Among the above choices, please select three genres of movies that you like best.
                        </div>
                        <Checkbox.Group options={this.toOptions(this.state.selectedGenere)} onChange={this.onFavouriteGenreChange} />
                    </div> */}
                    
                    <div className='question'>
                        <div className='title'>
                            5. Most of movies that I have watched fall in the three genres selected above.
                    </div>
                        <Radio.Group onChange={this.onCtrl3Change} value={this.state.ctrl3}>
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
                            6. I always like movies that are similar in terms of genre.
                        </div>
                        <Radio.Group onChange={this.onCtrl4Change} value={this.state.ctrl4}>
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
                        <Checkbox onChange={this.onCtrl5Change} value={this.state.ctrl5}>I declare that I will only select and rate movies that I have watched before.</Checkbox>
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