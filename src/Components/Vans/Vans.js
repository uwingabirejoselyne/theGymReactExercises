import React from "react";
import { Link,useSearchParams,useLoaderData,defer,Await } from "react-router-dom";
import { getVans } from "../../api";

export async function loader (){
    return defer({vans:getVans()})
}

const Vans = () => {
  const [searchParams,setSearchParams] = useSearchParams()
//   const [vans,setVans] = React.useState([])
//   const [loading, setLoading]= React.useState(false)
//   const [error, setError] = React.useState(null)
  const dataPromise = useLoaderData()

  const typeFilter = searchParams.get("type")
  console.log(searchParams.toString())

//   React.useEffect(() => {
//     async function loadVans() {
//         setLoading(true)
//         try {
//             const data = await getVans()
//             setVans(data)
//         } catch (err) {
//             setError(err)
//         } finally {
//             setLoading(false)
//         }
//     }

//     loadVans()
// }, [])


 

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

// if (loading) {
//     return <h1>Loading...</h1>
// }
// if (error) {
//     return <h1>There was an error: {error}</h1>
// }
 
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


    function renderVanElements(vans) {
        const displayedVans = typeFilter
            ? vans.filter(van => van.type === typeFilter)
            : vans

        const vanElements = displayedVans.map(van => (
            <div key={van.id} className="van-tile">
                <Link
                    to={van.id}
                    state={{
                        search: `?${searchParams.toString()}`,
                        type: typeFilter
                    }}
                >
                    <img src={van.imageUrl} />
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        ))
        return (
            <>
                <div className="van-list-filter-buttons">
                    <button
                        onClick={() => handleFilterChange("type", "simple")}
                        className={
                            `van-type simple 
                        ${typeFilter === "simple" ? "selected" : ""}`
                        }
                    >Simple</button>
                    <button
                        onClick={() => handleFilterChange("type", "luxury")}
                        className={
                            `van-type luxury 
                        ${typeFilter === "luxury" ? "selected" : ""}`
                        }
                    >Luxury</button>
                    <button
                        onClick={() => handleFilterChange("type", "rugged")}
                        className={
                            `van-type rugged 
                        ${typeFilter === "rugged" ? "selected" : ""}`
                        }
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
            </>
        )
    }

    
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <Await resolve={dataPromise.vans}>
                {renderVanElements}
            </Await>
        </div>
    

};

export default Vans;
