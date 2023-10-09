import React from "react";
import { Link,useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

const Vans = () => {
  const [searchParams,setSearchParams] = useSearchParams()
  const [vans,setVans] = React.useState([])
  const [loading, setLoading]= React.useState(false)
  const [error, setError] = React.useState(null)

  const typeFilter = searchParams.get("type")
  console.log(searchParams.toString())

  React.useEffect(() => {
    async function loadVans() {
        setLoading(true)
        try {
            const data = await getVans()
            setVans(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    loadVans()
}, [])


  const displayedVans = typeFilter
  ? vans.filter(van => van.type === typeFilter)
  : vans

  const vanElements = displayedVans.map(van =>(
    <div key={van.id} className="van-tile   flex flex-col justify-center items-center">
            <Link to={van.id} state={{ search: searchParams.toString() }}>
            <img src={van.imageUrl} className=""/>
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={` px-8 py-3 bg-slate-500 van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
  ))

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
}

if (loading) {
    return <h1>Loading...</h1>
}
if (error) {
    return <h1>There was an error: {error}</h1>
}
  return(
    // <div className="van-list-container">
    //         <h1>Explore our van options</h1>
    //         <div className="van-list-filter-buttons">
    //             <button 
    //                 onClick={() => setSearchParams({type: "simple"})}
    //                 className="van-type simple"
    //             >Simple</button>
    //             <button 
    //                 onClick={() => setSearchParams({type: "luxury"})}
    //                 className="van-type luxury"
    //             >Luxury</button>
    //             <button 
    //                 onClick={() => setSearchParams({type: "rugged"})}
    //                 className="van-type rugged"
    //             >Rugged</button>
    //             <button 
    //                 onClick={() => setSearchParams({})}
    //                 className="van-type clear-filters"
    //             >Clear filter</button>
            
    //         </div>
    //         <div className="van-list">
    //             {vanElements}
    //         </div>
    //     </div>


    <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className="van-type simple"
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className="van-type luxury"
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className="van-type rugged"
                >Rugged</button>
                 {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
  );
};

export default Vans;
