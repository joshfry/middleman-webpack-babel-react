// React
import React from 'react';
import { render } from 'react-dom';

import '../stylesheets/main.scss';

import UserPhotos from './components/UserPhotos';

render(<UserPhotos />, document.querySelector('#userPhotos'));
