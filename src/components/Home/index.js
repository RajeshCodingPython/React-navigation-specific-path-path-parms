import UserInfo from '../UserInfo'

import BlogList from '../BlogList'

import './index.css'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <div data-testid="loader">
      <BlogList />
    </div>
  </div>
)

export default Home
