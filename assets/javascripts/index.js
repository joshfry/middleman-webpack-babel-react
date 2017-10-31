// React
import React from 'react';
import { render } from 'react-dom';

import '../stylesheets/main.scss';

import UserPhotos from './components/UserPhotos';

render(<UserPhotos />, document.querySelector('#userPhotos'));

// new photo object
window.newPhoto = {
  filename: 'build-mass-sass.jpg',
  filestackUrl: 'https://cdn.filestackcontent.com/gUF1dmuS2vCAtLYmvBdw',
  handle: 'gUF1dmuS2vCAtLYmvBdw',
  largeUrl: 'https://process.filestackapi.com/resize=width:2048,height:2048,fit:clip/quality=value:50/compress/https://cdn.filestackcontent.com/gUF1dmuS2vCAtLYmvBdw',
  thumbUrl: 'https://process.filestackapi.com/resize=width:240,height:240,fit:clip/quality=value:50/compress/https://cdn.filestackcontent.com/gUF1dmuS2vCAtLYmvBdw',
};
// this.addPhoto(newPhoto);
