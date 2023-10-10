import React from 'react'
import { useParams,Link,useLocation, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'

export function loader({params}){
  console.log(params);
  return getVans(params.id)
}

const VansDetail = () => {
  // const params = useParams()

  const location = useLocation()
  const van = useLoaderData()
  console.log(van);

  // const [van, setVan]=React.useState(null)
  // React.useEffect(()=>{
  //   fetch(`/api/vans/${params.id}`)
  //   .then(res => res.json())
  //   .then(data => setVan(data.vans))
  // },[params.id])

  const search = (location.state && location.state.search) || ""
  const type = (location.state?.type )|| "all";


  return (
    <div className="van-detail-container">
      <Link
               to={`..${search}`}
                relative='path'
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
    {/* {
    van ?( */}
        <div className="van-detail">
            <img src={van.imageUrl} />
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price"><span>${van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
    {/* // ) : <h2>Loading...</h2>} */}
</div>
  )
}

export default VansDetail
