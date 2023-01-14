import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResult] = useState(0)


  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&
apiKey=425bc8058f6a437b8afcd4324233bc97&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json()
    setArticles(parseData.articles)
    setLoading(false)

  }
  useEffect(() => {
    updateNews();
  }, [])

  const handlePreviousClick = async () => {
    setPage(page - 1);
    updateNews();
  }
  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  }

  return (

    <div className='container' my-3>
      <h1 className="text-center" style={{ margin: '40px 0px' }}>NewsMania-Top HeadLines</h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading && articles.map((element) => {
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 88) : ""}
              imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
          </div>
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className='btn btn-dark' onClick={handlePreviousClick}> &larr; previous</button>
        <button disabled={page + 1 > Math.ceil(setTotalResult / props.pageSize)} type="button" className='btn btn-dark' onClick={handleNextClick}>Next &rarr;</button>
      </div>
    </div>
  );
}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number
}

export default News
