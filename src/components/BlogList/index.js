import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {
    isLoading: true,
    blogsData: [],
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    try {
      const response = await fetch('https://apis.ccbp.in/blogs')
      const data = await response.json()
      const updatedData = data.map(eachItem => ({
        id: eachItem.id,
        author: eachItem.author,
        avatarUrl: eachItem.avatar_url,
        imageUrl: eachItem.image_url,
        title: eachItem.title,
        topic: eachItem.topic,
      }))
      console.log(updatedData)
      this.setState({blogsData: updatedData, isLoading: false})
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogsData.map(item => <BlogItem blogData={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
