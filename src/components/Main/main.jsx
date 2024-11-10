import React from "react";
import "./Styles.scss";
import icon from "../assets/markeble-logo.png";
import follower from "../assets/follower.jpeg";
import data from '../assets/PostsData'

function main() {
  return (
    <div className="Main-dashboard">
      <div className="input">
        <input type="text" placeholder="SportyKids AdminShare Some Progress" />
        <button>Post</button> <br />
        <h3 className="followers-heading">People You Follow</h3>
        <div className="followers">
          <img src={follower} alt="follower" />
          <img src={follower} alt="follower" />
          <img src={follower} alt="follower" />
          <img src={follower} alt="follower" />
          <img src={follower} alt="follower" />
          <img src={follower} alt="follower" />
          <img src={follower} alt="follower" />
          <img src={follower} alt="follower" />{" "}
          <img src={follower} alt="follower" />{" "}
          <img src={follower} alt="follower" />
          <span>Show ALL</span>
        </div>
      </div>



      <div className="posts">
        {data.map((item,index) => (
        <div className="post-conatiner" key={index}>
          <div className="post">
            <div className="post-data">
              <img className="post-img" src={item.post.image} alt="icon" />
            </div>
            <div className=" post-description">
              <p className="">
                <span style={{color: 'blue'}}>{item.post.name}</span> <br /><span style={{fontSize: '15px', color:'gray'}}> Posted at {item.post.postedDate}</span> <br /> <span style={{fontSize: '15px', color:'gray'}}>{item.post.hoursProgress}</span> <br />
                <span className="update-btn">Update </span>
              </p>
            </div>
            <div>
            <p
                className=" "
                style={{ marginLeft:'10rem', width: "13rem" ,fontSize: '15px', color:'gray'}}
              >
                {" "}
                {item.post.hoursProgress}
              </p>
            </div>
          </div>{" "}
          
       
          
          <div style={{marginTop: '5rem'}}>
            <p  style={{fontSize: '15px', color:'gray'}}>
              { item.post.content.para1} by { item.post.content.para2} Working on {item.post.content.para3} for {item.post.content.para4}
            </p>{" "}
          </div>
          <div className="comments"  style={{fontSize: '15px', color:'gray'}} >
            <div className="favorite">
              <span class="material-symbols-outlined">favorite</span>
             
            </div>
            <div className="comment">
              <ul>
                <li>0 Comments</li>
                <li>0 Favorites</li>
                <span class="material-symbols-outlined">settings</span>
              </ul>
             <hr />
            </div>

          </div>

          <div className="post-section">
              <img  className="" src={icon} alt="icon" />
              <input className="" type="text" placeholder="Write A Comment" />
              <button className="">
                 post
              </button>
              
            </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default main;
