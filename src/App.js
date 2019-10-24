
import React, { Component } from 'react';
import ContentCard from './components/contentCard';
import CarouselCard from './components/carouselCard';
import './scss/ContentCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  state = {
    content         : [
      { id : 0, mediaSource : 'https://i.vimeocdn.com/video/595198868_505x160.jpg', header : 'MONSOON III', text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt impsum augue. In faucibus vehicular magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus.' },
      { id : 1, mediaSource : 'https://i.vimeocdn.com/video/589972810_530x315.jpg', header : 'BEAMS', text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt impsum augue. In faucibus vehicular magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus.' },
      { id : 2, mediaSource : 'https://i.vimeocdn.com/video/590587169_530x315.jpg', header : 'Move 2', text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt impsum augue. In faucibus vehicular magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus.' }
    ],
    carouselContent : [
      { id : 0, mediaPictureSource : 'https://i.vimeocdn.com/video/751531321_640x360.jpg?r=pad', captionTitle : 'Roamers', captionText : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
      { id : 1, mediaPictureSource : 'https://i.vimeocdn.com/video/745160367_640x360.jpg?r=pad', captionTitle : 'Push forward.', captionText : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
      { id : 2, mediaPictureSource : 'https://i.vimeocdn.com/video/820713918_640x360.jpg?r=pad', captionTitle : 'make time.', captionText : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
    ]
  }

  makeVimeoAPICall() {
    let Vimeo = require('vimeo').Vimeo;
    let client = new Vimeo('ea3f3e1afb470f36e200db02c87238db8d057d6c', 'ervORJHg+i+DspfPd79lBZvhJPONofInFpJCQX8SXkfLOFd/buPLyyrkL52uRfdhn7mRlfBEVRNEl54nlY7gJUCWxKr/o9nSSAVP/EYWcGc3UfKTG156JLHUkup3wPqX', 'e731625001a6d79f0a4b599cafef49d1');

    client.request({
      method: 'GET',
      path: '/videos/366940631/pictures'
    }, function (error, body, status_code, headers) {
      if (error) {
        console.log(error);
      }
      console.log(body);
      // url1 = body.data[0].sizes[3].link;

    });

  }

  renderContentCard() {
    return (
      this.state.content.map(content => (
        <ContentCard key={content.id} id={content.id} cardHeader={content.header} cardText={content.text} mediaSource={content.mediaSource} />
      ))
    );

  }


  render() {

    this.makeVimeoAPICall();

    return (
      <div className='App'>
        <div className='layout-container'>
          {this.renderContentCard()}
          <CarouselCard carouselContent={this.state.carouselContent} />          
        </div>
      </div>
    );

  }

}


export default App;
