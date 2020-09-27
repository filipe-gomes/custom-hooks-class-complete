import React from 'react';

import User from './components/user/user.component';
import Post from './components/post/post.component';

import './App.css';

const App = props => {
  return (
    <div className='App'>
      <User userId={1} />
      <Post postId={1} />
    </div>
  );
};

export default App;