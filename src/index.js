import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';
import VideoListItem from './components/video_list_item';

//api key for youtube video
const API_KEY = "AIzaSyDc8wB02pN_2AZ-vpb3c_G1PXtfwMilcDQ";




//create a new component
//Produce some HTML thing
//use arrow to present function
//const App =()=>{

//data change over time so use state
class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      selectedVideo : null,
      videos: []
    };

    //pass data and set them the videos so it will be updated

    YTSearch({key: API_KEY, term: 'street fighter'},(videos)=>{
        //pass directlywhen properties name
        //is the same as argument
        this.setState({
          videos:videos,
          selectedVideo: videos[0]
         });
    });

  }

  //pass data from app to child (for video list)
  //react component must start with capital case
  render(){
    return(
      <div>
        <SearchBar />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

//Take the component;s generated HTML,
//put it on the page in the DOM
//pass the instance
ReactDOM.render(<App />,document.querySelector(".container"));
