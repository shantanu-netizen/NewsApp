import React, { Component } from "react";
import Navitems from "./Navitems";
import p1 from "../assets/image1.jpg";
import p2 from "../assets/image2.jpg";
import p3 from "../assets/image3.jpg";
import p4 from "../assets/image4.jpg";
import p5 from "../assets/image5.jpg";
import p6 from "../assets/image6.jpg";
import p7 from "../assets/image7.jpg";
import p8 from "../assets/image8.jpg";
import p9 from "../assets/image9.jpg";
import p10 from "../assets/image10.jpg";
import p11 from "../assets/image11.jpg";
import p12 from "../assets/image12.jpg";
import p13 from "../assets/image13.jpg";
import p14 from "../assets/image14.jpg";
import p15 from "../assets/image15.jpg";
import p16 from "../assets/image16.jpg";
import p17 from "../assets/image17.jpg";
import p18 from "../assets/image18.jpg";
export class News extends Component {
  article = [
    {
      source: {
        id: 1,
        name: "BBC News",
      },

      title:
        "Republican senators join calls for fuller investigation into Minneapolis killing - BBC",
      description:
        'Trump says his administration is "reviewing everything" after the fatal shooting of Alex Pretti as one Republican governor says "enough is enough".',
      url: "https://www.bbc.com/news/live/c3ve67195gyt",
      urlToImage: p1,
      publishedAt: "2026-01-26T12:43:21Z",
      content:
        "Jack GreyLive reporter\r\nSince Trump began his second term as US president, he has significantly expanded the budget and mission of Immigration and Customs Enforcement (ICE), following through on a ce… [+1895 chars]",
    },
    {
      source: {
        id: 2,
        name: "CNBC",
      },

      title:
        "Stock futures are little changed as traders get set for a big week of trading: Live updates - CNBC",
      description:
        "Stock futures were relatively unchanged on Monday as traders braced for a big week, with key earnings reports and a U.S. monetary policy meeting.",
      url: "https://www.cnbc.com/2026/01/25/stock-market-today-live-updates.html",
      urlToImage: p2,
      publishedAt: "2026-01-26T11:02:00Z",
      content:
        "Stock futures were relatively unchanged on Monday as traders braced for a big week, with key earnings reports and a U.S. monetary policy meeting.\r\nS&amp;P 500 fell 0.1%, while Nasdaq-100 futures shed… [+2021 chars]",
    },
    {
      source: {
        id: 3,
        name: "Associated Press",
      },

      title:
        "Gunmen open fire at soccer field in central Mexico, killing 11 and wounding 12 - AP News",
      description:
        "Authorities say gunmen opened fire at a soccer field in central Mexico, killing at least 11 people and wounding 12 others. The attack happened Sunday at the end of a match in Salamanca. Ten people died at the scene, and another died at a hospital. A woman and…",
      url: "https://apnews.com/article/mexico-cartel-salamanca-guanajuato-sheinbaum-f25805cde730397abafeb73ac451c49f",
      urlToImage: p3,
      publishedAt: "2026-01-26T06:36:00Z",
      content:
        "MEXICO CITY (AP) Gunmen opened fire at a soccer field in central Mexico on Sunday, killing at least 11 people and wounding 12, authorities said.\r\nSalamanca Mayor Cesar Prieto said in a statement post… [+988 chars]",
    },
    {
      source: {
        id: 4,
        name: "ABC News",
      },
      author: "MIKE STOBBE AP medical writer",
      title:
        "Dr. William Foege, leader in smallpox eradication, dies - ABC News",
      description:
        "The 6-foot-7 inch Foege literally stood out in the field of public health.",
      url: "https://abcnews.go.com/Health/wireStory/dr-william-foege-leader-smallpox-eradication-dies-129543666",
      urlToImage: p4,
      publishedAt: "2026-01-26T05:22:10Z",
      content:
        "ATLANTA -- Dr. William Foege, a leader of one of humanity's greatest public health victories the global eradication of smallpox has died.\r\nFoege died Saturday in Atlanta at the age of 89, according t… [+3127 chars]",
    },
    {
      source: {
        id: 5,
        name: "CBS News",
      },

      title:
        "Dangerous winter storm arrives in NYC, Tri-State Area with heavy snow, sleet - CBS News",
      description:
        "The monster winter storm that New York City and the Tri-State Area have been bracing for arrived Sunday, bringing heavy snow, sleet and frigid temperatures.",
      url: "https://www.cbsnews.com/newyork/live-updates/winter-storm-nyc-weather-how-much-snow-new-jersey-connecticut/",
      urlToImage: p5,
      publishedAt: "2026-01-26T04:37:18Z",
      content:
        "Gov. Mikie Sherrill praised the response of New Jersey residents, first responders and utility crews. \r\n\"As you may know, we're the most densely populated state in the nation, and New Jerseyans made … [+934 chars]",
    },
    {
      source: {
        id: 6,
        name: "The Wall Street Journal",
      },

      title:
        "Iran Is Selling More Oil but Making Less Money - The Wall Street Journal",
      description:
        "Middlemen and buyers take advantage of embattled regime’s limited options for unloading crude",
      url: "https://www.wsj.com/world/middle-east/iran-is-selling-more-oil-but-making-less-money-841985ea",
      urlToImage: p6,
      publishedAt: "2026-01-26T04:00:00Z",
      content:
        "Iran exported more oil in 2025 than it had done in years, smuggling crude in defiance of sanctions, mainly to China. At the same time, the regimes profits from the commodity collapsed. \r\nThe falling … [+504 chars]",
    },
    {
      source: {
        id: 7,
        name: "Ctinsider.com",
      },

      title:
        "Snow piles up in Connecticut as winter storm rages on: Recap - ctinsider.com",
      description:
        "The massive winter storm has continued to churn through Connecticut, bringing more than a foot of snow to the state by Sunday night.",
      url: "https://www.ctinsider.com/weather/article/ct-sunday-weather-snow-storm-live-updates-21311636.php",
      urlToImage: p7,
      publishedAt: "2026-01-26T03:45:00Z",
      content:
        "The Norwalk harbor covered in snow on Sunday, Jan. 25, 2026.\r\nPatrick Sikes/For Hearst Connnecticut Media\r\nCristian Andronic and Jungeun Lee of Stamford play in the snow with their 17 month old son, … [+30745 chars]",
    },
    {
      source: {
        id: 8,
        name: "BBC News",
      },

      title: "Japan returns pandas to China amid strained ties - BBC",
      description:
        "The twin cubs' departure will leave Japan without any pandas for the first time since 1972.",
      url: "https://www.bbc.com/news/articles/c8d0l778dero",
      urlToImage: p8,
      publishedAt: "2026-01-26T03:08:21Z",
      content:
        "Thousands of people flocked to a zoo in Japan on Sunday to say farewell to the country's last two giant pandas, who are set to return to China on Tuesday.\r\nEmotions ran high at the Ueno zoo in Tokyo … [+2443 chars]",
    },
    {
      source: {
        id: 9,
        name: "NBCSports.com",
      },
      author: "Mike Florio",
      title:
        "Alex Kemp explains officiating error on Jarrett Stidham fumble - NBC Sports",
      description:
        "The first half of Sunday's AFC Championship included an officiating error that robbed the Patriots of a defensive touchdown.",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/alex-kemp-explains-officiating-error-on-jarrett-stidham-fumble",
      urlToImage: p9,
      publishedAt: "2026-01-26T02:32:54Z",
      content:
        "The first half of Sundays AFC Championship included an officiating error that robbed the Patriots of a defensive touchdown. And while they still ended up with possession (and scoring on a 12-yard dri… [+1551 chars]",
    },
    {
      source: {
        id: 10,
        name: "The Wall Street Journal",
      },
      author: "Kosaku Narioka",
      title:
        "Japan Government Bond Yields, Stocks Fall After Yen’s Rebound - The Wall Street Journal",
      description:
        "The yen’s moves eased concerns about higher import costs and reduced expectations of a near-term interest-rate increase",
      url: "https://www.wsj.com/finance/japan-government-bond-yields-stocks-fall-after-yens-rebound-8c6a1914",
      urlToImage: p10,
      publishedAt: "2026-01-26T02:15:00Z",
      content:
        "Japanese stocks fell and long-term government bonds rose Monday after U.S. and Japanese authorities signaled that they are ready to step in to support the yen, sparking a rebound in the currency.\r\nJa… [+310 chars]",
    },
    {
      source: {
        id: 11,
        name: "Bloomberg",
      },
      author: "Anand Krishnamoorthy, Ruth Carson",
      title:
        "Yen Extends Gains Amid Threat of Intervention: Markets Wrap - Bloomberg.com",
      description:
        "The dollar fell against all of its major peers after a rate check Friday by the Federal Reserve Bank of New York spurred speculation the US may assist Japan in efforts to boost the yen. Gold rose above $5,000 for the first time and US stock futures dropped wi…",
      url: "https://www.bloomberg.com/news/articles/2026-01-25/yen-extends-gains-amid-threat-of-intervention-markets-wrap",
      urlToImage: p11,
      publishedAt: "2026-01-26T02:00:00Z",
      content:
        "The dollar fell against all of its major peers after a rate check Friday by the Federal Reserve Bank of New York spurred speculation the US may assist Japan in efforts to boost the yen. Gold rose abo… [+520 chars]",
    },
    {
      source: {
        id: 12,
        name: "CNBC",
      },
      author: "Lim Hui Jie",
      title:
        "Carney says Canada not pursuing free trade deal with China as Trump threatens 100% tariffs - CNBC",
      description:
        'Trump\'s rhetoric on Truth Social contrasts with what he said after the agreement between Ottawa and Beijing: "If you can get a deal with China, you should do that."',
      url: "https://www.cnbc.com/2026/01/26/canada-china-trade-deal-tariffs-trump.html",
      urlToImage: p12,
      publishedAt: "2026-01-26T01:45:00Z",
      content:
        'Canada has "no intention" of pursuing a free trade deal with China, Prime Minister Mark Carney said, after U.S. President Donald Trump threatened to slap punitive tariffs on Ottawa.\r\nSpeaking to repo… [+2732 chars]',
    },
    {
      source: {
        id: 13,
        name: "Associated Press",
      },
      title:
        "Democrats vow to oppose homeland security funds after Minnesota shooting as shutdown risk grows - AP News",
      description:
        "Democratic senators are vowing to oppose a funding bill for the Department of Homeland Security following the shooting death of a man in Minnesota. And that opposition increases the prospect of a partial government shutdown by week's end. Six of the 12 annual…",
      url: "https://apnews.com/article/senate-democrats-homeland-security-funding-government-shutdown-f727fa0f3865990f191d4d5770e04752",
      urlToImage: p13,

      publishedAt: "2026-01-26T01:02:00Z",
      content:
        "WASHINGTON (AP) Democratic senators are vowing to oppose a funding bill for the Department of Homeland Security following the shooting death of a 37-year-old Minnesota man, a stand that increases the… [+7763 chars]",
    },
    {
      source: {
        id: 14,
        name: "CBS News",
      },
      author: "Camilo  Montoya-Galvez, Joe  Walsh",
      title:
        "Minneapolis becomes ground zero in Trump's immigration crackdown: Arrests, protests and 2 fatal shootings by agents - CBS News",
      description:
        "The fatal shooting of Alex Pretti by Border Patrol agents has further inflamed tensions in Minneapolis, a city at the center of America's immigration debate in recent months. Here's a look at how it started.",
      url: "https://www.cbsnews.com/news/minneapolis-trump-immigration-ice-border-patrol-arrests-protests-shootings/",
      urlToImage: p14,
      publishedAt: "2026-01-26T01:01:00Z",
      content:
        "The fatal shooting of 37-year-old Alex Pretti by Border Patrol agents on Saturday has further escalated tensions in Minneapolis, a city now at the center of America's heated battle over immigration e… [+17132 chars]",
    },
    {
      source: {
        id: 15,
        name: "Seeking Alpha",
      },

      title: "Odds of a government shutdown surge to 80% - Seeking Alpha",
      description:
        "Prediction markets surge to 80% odds of a US government shutdown by Jan 31 as Democrats block $1.2T DHS funding; track key votes and updates now.",
      url: "https://seekingalpha.com/news/4542297-odds-of-a-government-shutdown-surge-to-80",
      urlToImage: p15,
      publishedAt: "2026-01-26T00:13:01Z",
      content:
        "Stockyme\r\nThe odds of a government shutdown rocketed higher on prediction markets after Senate Democrats vowed to block a $1.2T funding package that includes appropriations for the Department of Home… [+68 chars]",
    },
    {
      source: {
        id: 16,
        name: "WAMU 88.5",
      },
      author: "Sarah Y. Kim, Tyrone Turner",
      title:
        "A major winter storm has hit the D.C. region. Here’s what to know - wamu.org",
      description:
        "Snow, extreme cold, and sleet will disrupt travel, business, and services in the D.C. area Sunday and throughout the week.",
      url: "https://wamu.org/story/26/01/25/major-winter-storm-has-hit-the-dc-region/",
      urlToImage: p16,
      publishedAt: "2026-01-25T23:55:00Z",
      content:
        "Privacy OverviewThis website uses cookies so that we can provide you with the best user experience possible. Cookie information is stored in your browser and performs functions such as recognising yo… [+134 chars]",
    },
    {
      source: {
        id: 17,
        name: "PBS",
      },

      title:
        "Winter storm leaves hundreds of thousands of customers without power across the South - PBS",
      description:
        "A massive winter storm dumped sleet, freezing rain and snow across much of the U.S. on Sunday, leaving hundreds of thousands of homes and businesses in the Southeast without electricity.",
      url: "https://www.pbs.org/newshour/nation/winter-storm-leaves-hundreds-of-thousands-of-customers-without-power-across-the-south",
      urlToImage: p17,
      publishedAt: "2026-01-25T23:09:14Z",
      content:
        "A massive winter storm dumped sleet, freezing rain and snow across much of the U.S. on Sunday, bringing subzero temperatures and halting air and road traffic. Tree branches and power lines snapped un… [+5838 chars]",
    },
    {
      source: {
        id: 18,
        name: "WABE 90.1 FM",
      },

      title:
        "Georgia ice storm causing thousands of power outages in metro Atlanta - wabe.org",
      description:
        "Freezing rain and sleet is falling in North Georgia on Sunday morning, and power outages and flight cancellations are mounting as a winter storm finally arrived in the region.",
      url: "https://www.wabe.org/ice-storm-arrives-in-georgia-bringing-thousands-of-power-outages-in-metro-atlanta/",
      urlToImage: p18,
      publishedAt: "2026-01-25T22:41:15Z",
      content: null,
    },
    {
      source: {
        id: 19,
        name: "The Wall Street Journal",
      },

      title:
        "Iran Is Selling More Oil but Making Less Money - The Wall Street Journal",
      description:
        "Middlemen and buyers take advantage of embattled regime’s limited options for unloading crude",
      url: "https://www.wsj.com/world/middle-east/iran-is-selling-more-oil-but-making-less-money-841985ea",
      urlToImage: p9,
      publishedAt: "2026-01-26T04:00:00Z",
      content:
        "Iran exported more oil in 2025 than it had done in years, smuggling crude in defiance of sanctions, mainly to China. At the same time, the regimes profits from the commodity collapsed. \r\nThe falling … [+504 chars]",
    },
    {
      source: {
        id: 20,
        name: "Ctinsider.com",
      },
      author: "Nathaniel Rosenberg, Peter Yankowski, Jessica Bravo",
      title:
        "Snow piles up in Connecticut as winter storm rages on: Recap - ctinsider.com",
      description:
        "The massive winter storm has continued to churn through Connecticut, bringing more than a foot of snow to the state by Sunday night.",
      url: "https://www.ctinsider.com/weather/article/ct-sunday-weather-snow-storm-live-updates-21311636.php",
      urlToImage: p4,
      publishedAt: "2026-01-26T03:45:00Z",
      content:
        "The Norwalk harbor covered in snow on Sunday, Jan. 25, 2026.\r\nPatrick Sikes/For Hearst Connnecticut Media\r\nCristian Andronic and Jungeun Lee of Stamford play in the snow with their 17 month old son, … [+30745 chars]",
    },
    {
      source: {
        id: 21,
        name: "BBC News",
      },
      author: null,
      title: "Japan returns pandas to China amid strained ties - BBC",
      description:
        "The twin cubs' departure will leave Japan without any pandas for the first time since 1972.",
      url: "https://www.bbc.com/news/articles/c8d0l778dero",
      urlToImage: p3,
      publishedAt: "2026-01-26T03:08:21Z",
      content:
        "Thousands of people flocked to a zoo in Japan on Sunday to say farewell to the country's last two giant pandas, who are set to return to China on Tuesday.\r\nEmotions ran high at the Ueno zoo in Tokyo … [+2443 chars]",
    },
    {
      source: {
        id: 22,
        name: "NBCSports.com",
      },

      title:
        "Alex Kemp explains officiating error on Jarrett Stidham fumble - NBC Sports",
      description:
        "The first half of Sunday's AFC Championship included an officiating error that robbed the Patriots of a defensive touchdown.",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/alex-kemp-explains-officiating-error-on-jarrett-stidham-fumble",
      urlToImage: p2,
      publishedAt: "2026-01-26T02:32:54Z",
      content:
        "The first half of Sundays AFC Championship included an officiating error that robbed the Patriots of a defensive touchdown. And while they still ended up with possession (and scoring on a 12-yard dri… [+1551 chars]",
    },
    {
      source: {
        id: 23,
        name: "BBC News",
      },

      title:
        "Republican senators join calls for fuller investigation into Minneapolis killing - BBC",
      description:
        'Trump says his administration is "reviewing everything" after the fatal shooting of Alex Pretti as one Republican governor says "enough is enough".',
      url: "https://www.bbc.com/news/live/c3ve67195gyt",
      urlToImage: p1,
      publishedAt: "2026-01-26T12:43:21Z",
      content:
        "Jack GreyLive reporter\r\nSince Trump began his second term as US president, he has significantly expanded the budget and mission of Immigration and Customs Enforcement (ICE), following through on a ce… [+1895 chars]",
    },
    {
      source: {
        id: 24,
        name: "CNBC",
      },

      title:
        "Stock futures are little changed as traders get set for a big week of trading: Live updates - CNBC",
      description:
        "Stock futures were relatively unchanged on Monday as traders braced for a big week, with key earnings reports and a U.S. monetary policy meeting.",
      url: "https://www.cnbc.com/2026/01/25/stock-market-today-live-updates.html",
      urlToImage: p2,
      publishedAt: "2026-01-26T11:02:00Z",
      content:
        "Stock futures were relatively unchanged on Monday as traders braced for a big week, with key earnings reports and a U.S. monetary policy meeting.\r\nS&amp;P 500 fell 0.1%, while Nasdaq-100 futures shed… [+2021 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      article: this.article,
      loading: false,
      page: 1,
      totalArticles: this.article.length,
    };
  }
  handlePre = () => {
    console.log("Previous");
    this.setState({
      page: this.state.page - 1,
    });
  };
  handleNext = () => {
    console.log("Next");
    if (this.state.page + 1 <= Math.ceil(this.state.totalArticles / 12)) {
      this.setState({
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <div className="container my-4">
        <h2 className="mb-3">Top Headlines</h2>
        <div className="row g-3">
          {this.state.article
            .slice((this.state.page - 1) * 12, this.state.page * 12)
            .map((ele) => {
              return (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                  key={ele.url}
                >
                  <Navitems
                    title={ele.title ? ele.title.slice(0, 60) : ""}
                    description={
                      ele.description ? ele.description.slice(0, 120) : ""
                    }
                    imageUrl={ele.urlToImage}
                    url={ele.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePre}
            disabled={this.state.page <= 1}
          >
            &#8592; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalArticles / 12)
            }
          >
            Next &#8594;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
