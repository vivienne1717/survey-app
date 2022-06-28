import React from "react";
import "./MainContentHolder.css";
import { Checkbox } from 'antd';
import MovieList from './MovieList';
import movieFullList1 from "../Assets/MovieFullList";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Step1Survery from './Step1Survey';


const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Genre1', 'Genre2', 'Genre3', 'Genre4', 'Genre5', 'Genre6'];
const defaultCheckedList = ['Genre1', 'Genre2', 'Genre3', 'Genre4', 'Genre5', 'Genr6'];
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const yearOptions = ['', 'All Movies','2000-2004', '2005-2009', '2010-2014', '2015-2019']

export default class MainContentHolder extends React.Component {
    childRef: React.RefObject<MovieList> = React.createRef();
    state = {
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
        plainOptions: plainOptions,
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
            var genresInArr = genre.split(',').map(item=>item.trim())
            genresInArr.forEach(elm => {
                if (allGenre.indexOf(elm) === -1 && elm !== 'News' )
                    allGenre.push(elm)
            })
        }
        return allGenre.sort();
    }

    onMenuItemClick = e => {
        this.setState({
            selectedYearKey: e.key
        })
    }

    componentDidMount() {
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
                                            Survey Part 2: 
                                            <br />
                                            Please select 5 movies that you have NOT watched before. You will need to answer 8 questions for each movie. 
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