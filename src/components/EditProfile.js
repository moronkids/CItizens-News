import React, { Component } from "react";
import {withRouter, Link} from 'react-router-dom';
import axios from 'axios';

// import User from '../assets/img/user.svg'

import "../assets/scss/EditProfile.scss";

class EditProfile extends Component {
  constructor (props) {
    super (props);

    this.state = {
      email : '',
      fullname : '',
      birthday : '',
      gender : '',
      address : '',
    }
  }


  handleChange = (e) => {
    this.setState ({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = async e =>{
    e.preventDefault();

    const {email, gender, birthday, fullname, address} = this.state;

    

  }
  



  render() {

    const {email, fullname, birthday, address} = this.state

    return (
      <div>
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden lg:w-3/4 xl:w-3/4 bg-gray-400">
            <div>
              <div className="md:flex rounded-lg p-6">
                <div className="image-upload">
                  <form>
                  <label htmlFor="img-input">
                    <img
                      className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6 object-cover cursor-pointer"
                      src="https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="your-pict"
                    />
                  </label>
                  <input type="file" id="img-input" />
                  </form>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-xl">Erin Lindford</h2>
                  <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-3 rounded text-xs">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>

            <div>
              <form className="edit-form" onSubmit={this.handleSubmit}>
                <div className="col-3">
                  <input 
                  className="effect-1" 
                  type="email" 
                  name = "email"
                  value = {email}
                  onChange={this.handleChange}
                  placeholder="Email" 
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="col-3">
                  <input
                    className="effect-1"
                    type="text"
                    name="fullname"
                    value={fullname}
                    onChange={this.handleChange}
                    placeholder="Full Name"
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="col-3">
                  <label className="label-date text-white">
                    <p>Birthday</p>
                    <input
                      type="date"
                      min="1945-01-01"
                      max="2020-01-01"
                      className="unstyled"
                      name="birthday"
                      value={birthday}
                      onChange={this.handleChange} 
                    />
                  </label>
                </div>

                <div className="flex col-3 radio">
                  <label htmlFor="opt1" className="radio">
                    <input
                      type="radio"
                      name="gender"
                      value="M"
                      onChange={this.handleChange}
                      className="hidden"
                      id="opt1"
                    />
                    <span className="label"></span>Male
                  </label>
                  <label htmlFor="opt2" className="radio">
                    <input
                      type="radio"
                      name="gender"
                      value="F"
                      onChange={this.handleChange}
                      className="hidden"
                      id="opt2"
                    />
                    <span className="label"></span>Female
                  </label>
                </div>

                <div className="col-3">
                  <textarea
                    className="effect-1"
                    type="text"
                    name="address"
                    onChange={this.handleChange}
                    value={address}
                    placeholder="Addres"
                  />
                </div>

                <div className="col-3">
                  <button 
                    className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-3 rounded text-xs"
                    type="submit"
                    >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full overflow-hidden lg:w-1/4 xl:w-1/4 bg-blue-300">
            <div className="fixed">
              <div className="p-4 mx-auto">
                <h2 className="text-lg font-bold mb-2">Profile</h2>
                <p className="text-sm">
                  This information appears on your public profile, search
                  results, and beyond. It helps instanly identify you those
                  following you, and tells those who aren't more about you.
                </p>
              </div>
              <div className="p-4 mx-auto">
                <h2 className="text-lg font-bold mb-2">Tips</h2>
                <p className="text-sm">
                  Filling your profile information will help people find you on
                  Citizens. For exampl. you'll be more likely to turn up in a
                  Citizens search if you've added your real name. <br />
                  Your Citizens profile picture helps instanly indentify you to
                  those following you and tells those who aren't more about you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
