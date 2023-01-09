import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
      <div className='container my-3'>
        <div className="card">
          <img src={!imageUrl?"https://img.etimg.com/thumb/msid-96674810,width-1070,height-580,imgsize-45744,overlay-economictimes/photo.jpg":imageUrl} alt="...images loading" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='cart-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
