import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title , description ,imgUrl, newsUrl, author, date, source} = this.props
    return (
      <div className='my-3'>
         <div className="card" >
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
          <span  className=" badge rounded-pills bg-danger" >{source}</span>
          </div>
        <img src={!imgUrl?"https://media.cnn.com/api/v1/images/stellar/prod/c-2026-06-24t193926z-1897672110-rc2i0ma5ndfi-rtrmadp-3-people-taylor-swift-kelce-new-york.jpg?c=16x9&q=w_800,c_fill":imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"> <small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small> </p>
            {/* <p className="card-text">{source}</p>  */}
            <a href={newsUrl} target='_blank' className="btn btm-sm btn-primary">Read More</a>
        </div>
        </div>
    </div>   
    )
  }
}

export default NewsItem