import React from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans,setVans] = React.useState([])

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, [])

  const vanElements = vans.map(van =>(
    <div key={van.id} className="van-tile   flex flex-col justify-center items-center">
            <Link to={`/vans/${van.id}`}>
            <img src={van.imageUrl} className=""/>
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={` px-8 py-3 bg-slate-500 van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
  ))
  
  return(
    <div className="grid  text-center pt-32 space-y-5 mx-5">
           <h1 className="text-2xl text-black mb-8">Explore our van options</h1>
            <div className="van-list grid grid-cols-4 gap-3">
                {vanElements}
            </div>
        </div>
  );
};

export default Vans;
