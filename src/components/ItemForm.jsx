import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {connect} from 'react-redux';
import {addItem} from './../actions';

const CLOUDINARY_UPLOAD_PRESET = 'vsctkvjo';
const CLOUDINARY_UPLOAD_URL = 'https://cors-anywhere.herokuapp.com/https://api.cloudinary.com/v1_1/evb-cloud/upload';

class ItemForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemName: '',
      quantity: 0,
      uploadedFileCloudinaryUrl: '',
      uploadedFile: null
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
  }

  onImageDrop(files){
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file){
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);
    upload.end((err, response) => {
      if (err){
        console.error(err);
      }
      if (response.body.secure_url !== ''){
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  handleNameChange(e){
    this.setState({itemName: e.target.value});
  }

  handleQuantityChange(e){
    this.setState({quantity: e.target.value});
  }

  handleNewFormSubmission(e){
    const {dispatch} = this.props;
    e.preventDefault();
    this.handleImageUpload(this.state.uploadedFile);
    dispatch(addItem(this.state.itemName, this.state.uploadedFileCloudinaryUrl, this.state.quantity));
    this.setState({itemName: '', quantity: '', uploadedFile: null, uploadedFileCloudinaryUrl: ''});
  }

  render(){
    return (
      <div>
        <h1> Add new item(s) </h1>
        <hr/>
        <form onSubmit={this.handleNewFormSubmission}>
          <label>Name</label>
          <input
            type='text'
            value={this.state.itemName} onChange={this.handleNameChange} />
          <br/>
          <Dropzone
            multiple={false}
            accept='image/*'
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
          <label>Quantity</label>
          <input
            type='text'
            value={this.state.quantity} onChange={this.handleQuantityChange} />
          <button type='submit'>Add Item</button>
        </form>
      </div>
    )
  }
}

export default connect()(ItemForm);
