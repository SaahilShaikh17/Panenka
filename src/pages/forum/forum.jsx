import React from 'react'
import './forum.css'
import { Link } from "react-router-dom";


export const Forum = () => {
  return (
    <div>
      <div className="newsTitle">
        <h1>Forum</h1>
      </div>

      {/* <div className="posts list-group">
      {posts.map((post) => (
        <Link
          className="list-group-item list-group-item-action flex-column align-items-start"
          to={`/post/${post._id}`}
        >
          <div className="d-flex w-100 justify-content-between" key={post._id}>
            <h5 className="mb-1">{post.title}</h5>
          </div>
          <small>Created by {post.author.name}</small>
          <br />
          <small className="overflow-hidden">{post.description}</small>
          <div className="mt-1">
            Related Topics:
            {post.tags.map((tag) => (
              <span className="badge badge-secondary m-1 p-2">{tag.name}</span>
            ))}
            <h6 className="mt-2">
              {post.upvotes.length} Likes | {post.views} Views
            </h6>
          </div>
        </Link>
      ))}
    </div> */}


        {/* <Link
          className="list-group-item list-group-item-action flex-column align-items-start"
          to={`/post/${post._id}`}
        > */}
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-warning border-top-0 border-right-0 border-bottom-0 rounded-0">
          <div className="row align-items-center">
            <div className="col-md-8 mb-3 mb-sm-0">
              <h5>
                <a href="#" className="text-primary">Drupal 8 quick starter guide</a>
              </h5>
              <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">20 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">KenyeW</a></p>
              <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#C++</a> <a className="text-black mr-2" href="#">#AppStrap Theme</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
            </div>
            <div className="col-md-4 op-7">
              <div className="row text-center op-7">
                <div className="col px-1"> <i className="ion-connection-bars icon-1x" /> <span className="d-block text-sm">141 Votes</span> </div>
                <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x" /> <span className="d-block text-sm">122 Replys</span> </div>
                <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x" /> <span className="d-block text-sm">290 Views</span> </div>
              </div>
            </div>
          </div>
        </div>
        {/* post 2 */}

                <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
          <div className="row align-items-center">
            <div className="col-md-8 mb-3 mb-sm-0">
              <h5>
                <a href="#" className="text-primary">HELP! My Windows XP machine is down</a>
              </h5>
              <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">54 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">DanielD</a></p>
              <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#AppStrap Theme</a> </div>
            </div>
            <div className="col-md-4 op-7">
              <div className="row text-center op-7">
                <div className="col px-1"> <i className="ion-connection-bars icon-1x" /> <span className="d-block text-sm">256 Votes</span> </div>
                <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x" /> <span className="d-block text-sm">251 Replys</span> </div>
                <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x" /> <span className="d-block text-sm">223 Views</span> </div>
              </div>
            </div>
          </div>
        </div>
          
          
    </div>
  )
}
