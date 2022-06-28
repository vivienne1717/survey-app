import React from "react";
import "./MainContentHolder.css";
import { Checkbox } from 'antd';
import movieFullList1 from "../Assets/MovieFullList";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Step1Survery from './Step1Survey';
import axios from "axios";
import movieList from '../Assets/List.js';
//import moviePoster from '../Assets/Movie5Poster.js';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Genre1', 'Genre2', 'Genre3', 'Genre4', 'Genre5', 'Genre6'];
const defaultCheckedList = ['Genre1', 'Genre2', 'Genre3', 'Genre4', 'Genre5', 'Genr6'];
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
// const yearOptions = ['', '1995-1999', '2000-2004', '2005-2009', '2010-2014', '2015-2019']
const yearOptions = ['', 'All Movies','1995-1999', '2000-2004', '2005-2009', '2010-2014', '2015-2019']

export default class MainContentHolder extends React.Component {
    childRef: React.RefObject<MovieList> = React.createRef();
    state = {
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
        plainOptions: plainOptions,
        movieList: movieList,
        //moviePosters: moviePoster,
        selectedYearKey: 1
    };

    onChange = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!this.state.checkedList.length && this.state.checkedList.length < this.state.plainOptions.length,
            checkAll: this.state.checkedList.length === this.state.plainOptions.length,
        }, () => {
            console.log("checked list " + JSON.stringify(this.state.checkedList))
        });
    };

    onCheckAllChange = e => {
        this.setState({
            checkedList: e.target.checked ? this.state.plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        }, () => {
            console.log("checked list " + JSON.stringify(this.state.checkedList))
        });
    };
    componentWillMount() {
        
        var allGenre = this.getAllGenre()
        this.setState({
            plainOptions: allGenre,
            checkedList: allGenre
        })
    }

    getAllGenre() {
        var allGenre = []
        for (var i = 0; i < movieFullList1.length; i++) {
            var movie = movieFullList1[i]
            var genre = movie.genres
            var genresInArr = genre.split(',')
            genresInArr.forEach(elm => {
                if (allGenre.indexOf(elm) === -1 && elm !== '5145828' && elm !== 'IMAX')//delete unusual genre 514 and IMAX
                    allGenre.push(elm)
            })
        }
        return allGenre;
    }

    onMenuItemClick = e => {
        this.setState({
            selectedYearKey: e.key
        })
    }

    componentDidMount() {

        /******** this piece of code for getting post url josn, after this use merge code ***********/
        // --------------for omdbapi
        // var movieList = this.state.movieList;
        // var posterList = [];
        // for(var i=0;i<movieList.length;i++){
        //     var movie =movieList[i]['imdbId'];
        //     console.log("imdbid "+movie)
        //     if(movie.length<7)
        //         movie = '0'+movie;
        //     axios.get('http://www.omdbapi.com/?apikey=c262c17&i='+'tt'+movie)
        // .then(res => {
        //     posterList.push({"imdbId":res.data.imdbID,"poster":res.data.Poster,"title":res.data.Title})
        //     if(posterList.length != movieList.length)
        //         console.log("getting item now")
        //     else
        //         console.log(JSON.stringify(posterList))
        // })
        // .catch(function (error) {
        //     console.log(error);
        // })
        // }
        // ---------------for tmdb api
        var movieList = this.state.movieList;
        var posterList = [];
        for(var i=0;i<movieList.length;i++){
            var movie =movieList[i]['tmdbId'];
            console.log("tmdbid "+movie)
            axios.get('https://api.themoviedb.org/3/movie/'+movie+'?api_key=7566f339e9d2dcb25da3ac78078d1530')
        .then(res => {
            posterList.push({"tmdbId":res.data.id,"poster":res.data.poster_path,"title":res.data.title})
            if(posterList.length != movieList.length)
                console.log("getting item now")
            else
                console.log(JSON.stringify(posterList))
        })
        .catch(function (error) {
            console.log(error);
        })
        }

        /*after getting poster url, use below to merge */
    //     var arr = this.state.movieList
    //     for (var i = 0; i < arr.length; i++) {
    //         var movie = arr[i]
    //         var imdbId = this.parseImdbid(movie.imdbId)
    //         var title = this.updateTitle(imdbId)
    //         arr[i]['title']=title //original titles have formt problem
    //         var poster = this.findPosterByImdbId(imdbId)
    //         arr[i]['posterURL']=poster
    //         var genre = this.updateGenre(imdbId) //original genre has nil value
    //         arr[i]['genres']=genre
    //     }
    //     console.log(JSON.stringify(arr))
    // }

    // parseImdbid(imdbId) {
    //     var movie = ''
    //     if (imdbId.length < 7)
    //         movie = 'tt0' + imdbId;
    //     else
    //         movie = 'tt' + imdbId;
    //     return movie
    // }

    // updateTitle(imdbId) {
    //      var arr2 = this.state.moviePosters
    //      for (var i = 0; i < arr2.length; i++) {
    //          if (arr2[i].imdbID === imdbId)
    //              return arr2[i].Title
    //     }
    // }

    // findPosterByImdbId(imdbId) {
    //      var arr2 = this.state.moviePosters
    //      for (var i = 0; i < arr2.length; i++) {
    //          if (arr2[i].imdbID === imdbId)
    //              return arr2[i].Poster
    //     }
    // } 
    // updateGenre(imdbId) {
    //      var arr2 = this.state.moviePosters
    //      for (var i = 0; i < arr2.length; i++) {
    //          if (arr2[i].imdbID === imdbId)
    //              return arr2[i].Genre
    //      }
    }

     
    render() {
        return (

            <div>
                <Step1Survery></Step1Survery>
                <Layout>
                    <Header className="header">
                        <div className="logo">
                            Movie List
                        </div>

                    </Header>
                    <Layout>
                        <Sider width={200} style={{ background: '#f0f2f5' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                onClick={this.onMenuItemClick}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="video-camera" />
                                            Years of Movies
                                        </span>
                                    }
                                >
                                    <Menu.Item key="1">{yearOptions[1]}</Menu.Item>
                                    <Menu.Item key="2">{yearOptions[2]}</Menu.Item>
                                    <Menu.Item key="3">{yearOptions[3]}</Menu.Item>
                                    <Menu.Item key="4">{yearOptions[4]}</Menu.Item>
                                    <Menu.Item key="5">{yearOptions[5]}</Menu.Item>
                                    <Menu.Item key="6">{yearOptions[6]}</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>

                            <Breadcrumb style={{ margin: '16px 0', textAlign: 'left' }}>
                                <Breadcrumb.Item>Movies</Breadcrumb.Item>
                                <Breadcrumb.Item>{yearOptions[this.state.selectedYearKey]}</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                style={{
                                    // background: 'rgb(253, 254, 255)',
                                    background: '#f0f2f5',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >

                                {/*main content */}
                                <div className={'step2-1'}>
                                    <div className='Genre-filters' style={{ textAlign: 'left' }}>
                                        <div style={{ fontSize: '20px', paddingBottom: '10px', fontWeight: 'bold' }}>
                                            Survey Part 2: Please select and rate 15 movies that you have watched. 
                                            <br />
                                            After you rate 15 movies, 5 out of those 15 movies will be randomly chosen and presented to you. You will need to answer 4 questions for each movie.
                                            <br />
                                            You can browse the movie list according to the released year and genre of movies. 
                                        </div>

                                        <div >
                                            <Checkbox
                                                indeterminate={this.state.indeterminate}
                                                onChange={this.onCheckAllChange}
                                                checked={this.state.checkAll}
                                            >
                                                All genres
                                            </Checkbox>
                                        </div>
                                        <br />
                                        <div style={{ borderBottom: '1px solid grey' }}>
                                            <CheckboxGroup
                                                options={this.state.plainOptions}
                                                value={this.state.checkedList}
                                                onChange={this.onChange}
                                                style={{ marginBottom: '15px' }}
                                            />
                                        </div>
                                    </div>
                                    <div className='Movie-List'>
                                        <MovieList ref={this.childRef} genreFilters={this.state.checkedList} yearFilter={yearOptions[this.state.selectedYearKey]}></MovieList>
                                    </div>
                                </div >
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>


        );
    }
}