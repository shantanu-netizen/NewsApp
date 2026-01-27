import React, { Component } from "react";
import Navitems from "./Navitems";
import styles from "./News.module.css";
export class News extends Component {
  article = [
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Republican senators join calls for fuller investigation into Minneapolis killing - BBC",
      description:
        'Trump says his administration is "reviewing everything" after the fatal shooting of Alex Pretti as one Republican governor says "enough is enough".',
      url: "https://www.bbc.com/news/live/c3ve67195gyt",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/1ea4/live/e490f400-faa8-11f0-a40e-2dd9c2184c76.jpg",
      publishedAt: "2026-01-26T12:43:21Z",
      content:
        "Jack GreyLive reporter\r\nSince Trump began his second term as US president, he has significantly expanded the budget and mission of Immigration and Customs Enforcement (ICE), following through on a ce… [+1895 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Sean Conlon, Fred Imbert",
      title:
        "Stock futures are little changed as traders get set for a big week of trading: Live updates - CNBC",
      description:
        "Stock futures were relatively unchanged on Monday as traders braced for a big week, with key earnings reports and a U.S. monetary policy meeting.",
      url: "https://www.cnbc.com/2026/01/25/stock-market-today-live-updates.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/108255823-1769115929731-108255823-17691004432026-01-22t163423z_210834275_rc2d6jaudhs3_rtrmadp_0_usa-stocks.jpeg?v=1769115947&w=1920&h=1080",
      publishedAt: "2026-01-26T11:02:00Z",
      content:
        "Stock futures were relatively unchanged on Monday as traders braced for a big week, with key earnings reports and a U.S. monetary policy meeting.\r\nS&amp;P 500 fell 0.1%, while Nasdaq-100 futures shed… [+2021 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Georgi Kantchev, Summer Said",
      title:
        "Iran Is Selling More Oil but Making Less Money - The Wall Street Journal",
      description:
        "Middlemen and buyers take advantage of embattled regime’s limited options for unloading crude",
      url: "https://www.wsj.com/world/middle-east/iran-is-selling-more-oil-but-making-less-money-841985ea",
      urlToImage: "https://images.wsj.net/im-56986350/social",
      publishedAt: "2026-01-26T04:00:00Z",
      content:
        "Iran exported more oil in 2025 than it had done in years, smuggling crude in defiance of sanctions, mainly to China. At the same time, the regimes profits from the commodity collapsed. \r\nThe falling … [+504 chars]",
    },
  ];
  constructor() {
    super();
    console.log("hy i am news components");
    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9af2ed9eb8e84c0aab3774939700a027&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    // NewsAPI returns an `articles` array, not `article`
    this.setState({ article: parsedData.articles || [] });
  }
  handlePre = async () => {
    console.log("Previous");
     let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9af2ed9eb8e84c0aab3774939700a027&page=${this.state.page - 1}`;
     let data = await fetch(url);
     let parsedData = await data.json();
     console.log(parsedData);

     this.setState({
       page: this.state.page - 1,
       article: parsedData.articles,
     });
  };
  handleNext = async () => {
    console.log("Next");
    
     let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9af2ed9eb8e84c0aab3774939700a027&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    
    
    this.setState({
      page: this.state.page + 1,
      article: parsedData.articles
    })
  };

  render() {
    return (
      <div className="container  my-3">
        <h2>Top-headlines</h2>
        <div className={styles.news}>
          {this.state.article.map((ele) => {
            return (
              <div className="row-md-4 my-3" key={ele.url}>
                <Navitems
                  title={ele.title ? ele.title.slice(0, 40) : ""}
                  description={
                    ele.description ? ele.description.slice(0, 93) : ""
                  }
                  imageUrl={ele.urlToImage}
                  url={ele.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePre}
            disabled={this.state.page<=1}
          >
            &#8592; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &#8594;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
