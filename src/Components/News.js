// import { Pagination } from '@mui/material';
// import { Pagination } from './Pagination';
import React, { Component } from 'react'
import NewsArticles from './NewsArticles'
// import {Link} from 'react-router-dom'

export class News extends Component {
    // articles =[]
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount(props) {
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/in.json`

        // let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1d8f5fc8e73147b48bcc1198b10e183f';
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
        // console.log(parsedData.articles);
    }

    render() {
        return (
            <>

                <div className="container my-3">
                    <h2 className='text-center my-4 mb-4'>Top Headlines of the Day</h2>
                    <div className="row my-3" >
                        {this.state.articles.map((element, idx) => {
                            if (idx < 18) {
                                return (

                                    <div className="col-md-4" key={element.url}>
                                        <NewsArticles title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                                    </div>
                                )
                            }
                            {/* else if(idx>12 && idx<24){
                            return(
                            
                            <div className="col-md-4" key= {element.url}>
                                <NewsArticles  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                            )
                        } */}
                        })}
                        {/* <div className="container mt-5">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabindex="-1">Previous</a>
                                    </li>
                                    <li className="page-item"><Link className="page-link" to="/" >1</Link></li>
                                    <li className="page-item"><a className="page-link" href="#" >2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}
                        {/* <Pagination next='idx'/> */}
                    </div>

                </div>

            </>
        )
    }
}

export default News;