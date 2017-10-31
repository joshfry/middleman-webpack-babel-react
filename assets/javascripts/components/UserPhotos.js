import React, { Component } from 'react';
import sampleUploads from '../sample-uploads';
import UserPhoto from './UserPhoto';

class UserPhotos extends Component {
  constructor() {
    super();

    this.state = {
      selected: '',
      uploads: {},
    };

    // bind this to custom methods
    this.updateSelectedPhoto = this.updateSelectedPhoto.bind(this);
  }

  componentWillMount() {
    // this would come from an
    // ajax call and return JSON
    this.setState({
      uploads: sampleUploads,
    });
  }

  updateSelectedPhoto(selected, selectedFilename) {
    this.setState({ selected, selectedFilename });
  }

  render() {
    return (
      <div id="userPhotosView" className="user-photos-view">
        <div><a id="uploadPhotos" className="button mb-1" href="#">Upload Photos</a></div>
        <div><a id="removePhotos" className="button mb-1" href="#">Remove Photos</a></div>
        {Object.keys(this.state.uploads).map(key => (
          <UserPhoto
            key={key} // can't reference `key` inside component
            id={key} // create `index` with reference to `key`
            selected={this.state.selected}
            data={this.state.uploads[key]}
            updateSelectedPhoto={this.updateSelectedPhoto}
          />),
          )
        }
        <br clear="all" />
        <h1>Selected: {this.state.selected || 'Select Photo'}</h1>
      </div>
    );
  }
}

export default UserPhotos;
