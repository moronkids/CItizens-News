import React, { Component } from 'react';
import HeadCategory from '../components/HeadCategory';
import UserProfile from '../components/UserProfile';
import Footer from '../components/Footer';

export class UserPage extends Component {
  render() {
    return (
      <div>
        <HeadCategory/>
        <UserProfile/>
        <Footer/>
      </div>
    )
  }
}

export default UserPage
