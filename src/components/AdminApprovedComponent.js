import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getNews } from "../store/actions/getnewsAction";

// import ReactPlayer from "react-player";

import "../assets/scss/AdminNewsComponent.scss";

class AdminNewsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: ""
    };
  }

  componentDidMount() {
    this.props.getNews();
  }

  render() {

    const dataAdmin = this.props.news.map(allnews => {
      // console.log(allnews.status)
      if (
        allnews.status === "Approved"
      ) {
      return(
        <tr className="hover:bg-grey-lighter" key={allnews._id}>
        <td className="py-4 px-4 border-b border-grey-light text-sm font-bold">
          {allnews.user.username}
        </td>
        <td className="py-4 px-6 border-b border-grey-light text-sm">
          {allnews.title}
        </td>
        <td className="py-4 px-6 border-b border-grey-light text-sm font-semibold ">
          {allnews.category}
        </td>
        <td className="py-4 px-6 border-b border-grey-light text-sm">
         <h4 className="bg-transparent text-green-500 font-semibold py-1 px-2 border border-green-500 rounded text-sm">
          {allnews.status}
         </h4>
        </td>
        <td className="py-4 text-center border-b border-grey-light text-sm">
          {allnews.date.substring(0, 10)}
        </td>
        <td className="flex py-6 px-6 border-b border-grey-light">
          <Link to={`/detail/${allnews._id}`}>
        <button className="text-grey-lighter font-bold py-1 px-2 rounded text-xs bg-blue-600 hover:bg-blue-700 text-white">
            View
          </button>
          </Link>
        </td>
      </tr>
      )
    } else {
      return(
        null
      )
    }
    })

    const amountData = this.props.news.map(total => {
      // console.log(total.length)
      return (
        total.length
      )
    })

    // console.log(amountData)
    let i = 0
    this.props.news.map(pendingTotal => {
      // console.log(pendingTotal.status)
      if (pendingTotal.status === "Approved") {
        i++
      } 
    })



    // let arrSum = arr => arr.reduce((a,b) => a + b, 0)


    return (
      <div className="bg-gray-800 h-full w-full">
        <div className="w-4/5 mx-auto">
          <div className="text-5xl font-medium">
            <h1 className="font-bold py-8 pl-2 text-5xl text-white">Citizens Approved</h1>
            <div>
              <ul className="list-reset flex bg-transparent ">
                <li className="py-3 px-4 text-center border-b-2 border-solid border-transparent border-teal bg-gray-100 mx-2 rounded">
                  <Link
                    to="#"
                    className="text-grey-darker no-underline hover:no-underline">
                    <div className="text-sm tracking-tight mb-1 text-blue-500">
                      Total News
                    </div>
                    <div className="text-sm tracking-tight text-blue-500 text-teal">
                    {amountData.length}
                    </div>
                  </Link>
                </li>
                <li className="py-3 px-4 text-center border-b-2 border-solid border-transparent border-teal bg-gray-100 rounded">
                  <Link
                    to="#"
                    className="text-grey-darker no-underline hover:no-underline">
                    <div className="text-sm tracking-tight mb-1 text-green-500">
                      Total Approved
                    </div>
                    <div className="text-sm text-green-500 tracking-tight text-teal">{i}</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white shadow-md rounded mt-6 pb-6 bg-gray-100">
            <table className="text-left w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Author
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Title
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Categories
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Status
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Date
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataAdmin}               
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-gray-800 w-full"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.getnews1.news
  };
};

export default connect(
  mapStateToProps,
  { getNews }
)(withRouter(AdminNewsComponent));