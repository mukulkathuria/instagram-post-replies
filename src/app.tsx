import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { MyDiv } from './app.style';
import ErrorBoundary from './Components/ErrorBoundary';
import Loader from './Components/Loader';
import { getAllPosts } from './Redux/actions/postReducer.actions';

const Header = lazy(() => import('./Components/Header'));
const PostsComponent = lazy(() => import('./Components/Posts/PostsComponet'));

const App: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <MyDiv>
          <p>App Testing</p>
          <Suspense fallback={<Loader />}>
            <Header />
            <PostsComponent />
          </Suspense>
        </MyDiv>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
export default App;
