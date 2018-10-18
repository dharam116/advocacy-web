import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import Coverflow from 'react-coverflow';
import {Animation} from 'mdbreact';
import Divider from '@material-ui/core/Divider';
import 'react-image-lightbox/style.css';
import '../App.css';

const images = [
  'https://steemitimages.com/DQmUHTLCqQnYeoXyzjUChmsixsSReqRWJJJqeKZoWi3mwTM/about_law.png',
  'http://www.behtarlife.com/wp-content/uploads/2018/02/law.jpg',
  'http://www.infipark.com/articles/wp-content/uploads/2016/10/gavel-scale-book.jpg',
  'https://cdn-images-1.medium.com/max/2000/1*PwXaZrVqmx1pgN3IhwbXfQ.jpeg',
  'https://us.123rf.com/450wm/dzejmsdin/dzejmsdin1312/dzejmsdin131200010/24259170-%E6%B3%95%E5%BE%8B%E3%81%A8%E7%A9%BA%E3%81%AE%E6%B3%95%E5%BB%B7%E3%80%81%E6%B3%95%E5%BE%8B%E3%81%A8%E6%AD%A3%E7%BE%A9%E3%81%AE%E6%A6%82%E5%BF%B5%E3%80%81%E9%9D%92%E3%81%84%E3%83%88%E3%83%BC%E3%83%B3%E3%81%AB%E6%AD%A3%E7%BE%A9%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AB.jpg?ver=6',
  'http://www.seekgif.com/uploads/justice-law-background-10.jpg',
  'http://sourcereserve.com/wp-content/uploads/2018/04/Foundation.jpg',
  'http://www.aeo.org.tr/Helpers/DuyuruIcon.ashx?yayinyeri=sayfaicerik&Id=17782',
];

class Portfolio extends Component {
  constructor(props) {
    super(props);

    window.scrollTo({
      top: 0,
      behaviour: "smooth"
    });

    this.state = {
      active: 0,
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div style= {{background: 'linear-gradient(to bottom, white, #C0C0C0)', padding: '4%', paddingTop: '10%'}}>
        <Animation type="zoomIn" duration="2s">
        <h2 className="text-center font-weight-bold my-4">Portfolio</h2>
        </Animation><Divider />

          <Coverflow
            height={400}
            displayQuantityOfSide={2}
            navigation={false}
            enableHeading={false}
            enableScroll={true}
            clickable={true}
            active={this.state.active}
          >
            <img src='https://steemitimages.com/DQmUHTLCqQnYeoXyzjUChmsixsSReqRWJJJqeKZoWi3mwTM/about_law.png' alt='1'  onClick={() => this.setState({ photoIndex: 0, isOpen: true })} />
            <img src='http://www.behtarlife.com/wp-content/uploads/2018/02/law.jpg' alt='2' onClick={() => this.setState({ photoIndex: 1, isOpen: true })} />
            <img src='http://www.infipark.com/articles/wp-content/uploads/2016/10/gavel-scale-book.jpg' alt='3' onClick={() => this.setState({ photoIndex: 2, isOpen: true })} />
            <img src='https://cdn-images-1.medium.com/max/2000/1*PwXaZrVqmx1pgN3IhwbXfQ.jpeg' alt='4' onClick={() => this.setState({ photoIndex: 3, isOpen: true })} />
            <img src='https://us.123rf.com/450wm/dzejmsdin/dzejmsdin1312/dzejmsdin131200010/24259170-%E6%B3%95%E5%BE%8B%E3%81%A8%E7%A9%BA%E3%81%AE%E6%B3%95%E5%BB%B7%E3%80%81%E6%B3%95%E5%BE%8B%E3%81%A8%E6%AD%A3%E7%BE%A9%E3%81%AE%E6%A6%82%E5%BF%B5%E3%80%81%E9%9D%92%E3%81%84%E3%83%88%E3%83%BC%E3%83%B3%E3%81%AB%E6%AD%A3%E7%BE%A9%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AB.jpg?ver=6' alt='5' onClick={() => this.setState({ photoIndex: 4, isOpen: true })} />
            <img src='http://www.seekgif.com/uploads/justice-law-background-10.jpg' alt='6' onClick={() => this.setState({ photoIndex: 5, isOpen: true })} />
            <img src='http://sourcereserve.com/wp-content/uploads/2018/04/Foundation.jpg' alt='7' onClick={() => this.setState({ photoIndex: 6, isOpen: true })} />
            <img src='http://www.aeo.org.tr/Helpers/DuyuruIcon.ashx?yayinyeri=sayfaicerik&Id=17782' alt='8' onClick={() => this.setState({ photoIndex: 7, isOpen: true })} />
            </Coverflow>

            {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              } />
            )}
      </div>
    );
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
};

export default Portfolio;