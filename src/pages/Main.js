import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import noimage from "./../image/noImage";
import Header from "../components/Header";
import Navba from "../components/Navba";
import Footer from "../components/Footer";
import {FacebookShareButton, TwitterShareButton} from 'react-share';
import {FacebookIcon, TwitterIcon} from 'react-share';
import moment from 'moment';
import localization from 'moment/locale/el'

class Main extends Component {
  state = {
    articles: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/${this.props.articles.type}?${
          this.props.articles.query
        }&apiKey=fea61a2af7d74c72b28456e9d38ba8dc&pageSize=15`
      )
      .then(res => {
        this.setState({ articles: res.data.articles, loading: false });
        // console.log(res.data);
      });
  }

  render() {
    return (
      <div className="text-center">
        <Navba />
        <Header />
        {this.state.loading ? (
          <div className="sk-rotating-plane" />
        ) : (
          <div className="container">
            <div className="row">
              {this.state.articles.map(item => {
                return (
                  <div
                    key={item.url}
                    className="col-md-4"
                    style={{ marginBottom: "2rem" }}
                  >
                    <div className="news__box">
                    <a href={item.url} target="_blank">
                      <img
                        className="news__box-img"
                        src={item.urlToImage ? item.urlToImage : noimage}
                        alt={item.author}
                      /></a>
                      <div className="news__text">
                      <a href={item.url} target="_blank">
                        <h5 className="news__title">
                          {/* { item.description.length < 50 ? `${item.description}` : `${item.description.substring(0, 55)}...` } */}
                          {item.title}
                        </h5>
                      </a>
                        <p className="news__subtitle">
                          Source: <span>{item.source.name}</span>
                        </p>
                        <p className="news__subtitle">
                          Author: <span>{item.author}</span>
                        </p>
                        <p className="news__subtitle">
                          Ημ/νία: <span>{moment(item.publishedAt).locale("el", localization).startOf('day').fromNow()}</span>
                        </p>
                      </div>
                      <div className="Demo__container">
                      <div className="Demo__some-network">
                      <FacebookShareButton
                         url={item.url}
                         quote={item.title}
                         className="Demo__some-network__share-button">
                      <FacebookIcon
                      size={32}
                      round />
                      </FacebookShareButton>
                      </div>
                      <div className="Demo__some-network">
                      <TwitterShareButton
                         url={item.url}
                         quote={item.title}
                         className="Demo__some-network__share-button">
                      <TwitterIcon
                      size={32}
                      round />
                      </TwitterShareButton>
                      </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default Main;
