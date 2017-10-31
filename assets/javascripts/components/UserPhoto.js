import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserPhoto extends Component {
  render() {
    // munge data
    // const data = this.props.data;
    const { data } = this.props;
    // debugger;
    // const isSelected = data.selected === 'available';

    return (
      <div
        className="user-photos__thumb"
        onMouseDown={() => this.props.updateSelectedPhoto(this.props.id, data.filename)}
        data-selected={this.props.selected === this.props.id}
        role="button"
        tabIndex="0"
      >
        <img
          className="user-photos__target-image"
          src={data.thumbUrl}
          alt={data.filename}
        />
        <small>{data.filename}</small>
      </div>
    );
  }
}

UserPhoto.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  updateSelectedPhoto: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default UserPhoto;
