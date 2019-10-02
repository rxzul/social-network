import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
          <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt=""/>
      </header>
      <nav className="nav">
          <div><a href="#">Profile</a></div>
          <div><a href="#">Messages</a></div>
          <div><a href="#">News</a></div>
          <div><a href="#">Music</a></div>
          <div><a href="#">Settings</a></div>
      </nav>
        <div className="content">
            <div>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            </div>
            <div>
                ava + descr
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default App;