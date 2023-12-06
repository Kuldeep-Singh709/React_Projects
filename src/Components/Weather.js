import React, { useState } from "react";
import "../Components/Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    fetch(
      `http://api.weatherapi.com/v1/current.json?key=bb1d868a22da4bd1963171321232510&q=${city}`
    )
      .then((response) => response.json())
      .then((data) => {
        setResponse(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching weather data. Please try again later.");
        console.error("Error:", error);
        setLoading(false);
      });
  };

  return (
    <div className="main">
      <div className="searchSection">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="search-input"
            placeholder="Enter the city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="search-button" type="submit">
            &#128269;
          </button>
        </form>
      </div>

      <div className={response ? "upperSection" : "upperSection hidden"}>

        <div>
          {loading && <p className="loading">Loading...</p>} <br/><br/>
          {error && <p>{error}</p>}

          <span className="image">{response && <img alt="" src={response.current.condition.icon} />}</span>
          {/* <span className="temperature">{response && <h1 className="">Temp : {response.current.temp_c} *C</h1>}</span> */}
          <span>{response && <h1  className="temprature">Temp : <span className="temp">{response.current.temp_c} *C</span></h1>}</span>
          {response && (
            <p className="area">
             <span>Country : </span>{response.location.country}<br/> 
              <span>Region:</span>  {response.location.region}
            </p>
          )}
          {response && (
            <p className="climateInfo">
            <span className="windspeed"><span>Wind Speed</span>  <span className="number">{response.current.wind_kph}</span></span>
            <span className="humidity"><span> Humidity</span>  <span className="number">{response.current.humidity}</span></span>
            </p>
   
          )}
        </div>
      </div>

      <div className="lowerSection"></div>
    </div>
  );
}






// import React, { useState } from "react";
// import "../Components/Weather.css";

// export default function Weather() {
//   const [city, setCity] = useState("");
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const submitHandler = async (event) => {
//     event.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       const apiResponse = await fetch(
//         `http://api.weatherapi.com/v1/current.json?key=bb1d868a22da4bd1963171321232510&q=${city}`
//       );

//       if (!apiResponse.ok) {
//         throw new Error("City not found");
//       }

//       const data = await apiResponse.json();
//       setResponse(data);
//     } catch (error) {
//       setError("Error fetching weather data. Please try again later.");
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="main">
//       {response ? (
//         <div className="upperSection">
//           <div>
//             {loading && <p>Loading...</p>}
//             {error && <p>{error}</p>}

//             {response && <img alt="" src={response.current.condition.icon} />}
//             {response && <h1>Temp : {response.current.temp_c} *C</h1>}
//             {response && (
//               <p>
//                 State: {response.location.region}, Country:{" "}
//                 {response.location.country}
//               </p>
//             )}
//             {response && (
//               <p>
//                 Wind Speed : {response.current.wind_kph}, Humidity:{" "}
//                 {response.current.humidity}
//               </p>
//             )}
//           </div>
//         </div>
//       ) : (
//         <div className="searchSection">
//           <form onSubmit={submitHandler}>
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Enter the city"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//             />
//             <button className="search-button" type="submit">
//               &#128269;
//             </button>
//           </form>
//         </div>
//       )}
//       <div className="lowerSection"></div>
//     </div>
//   );
// }

















// import React, { useState } from "react";
// import "../Components/Weather.css";

// export default function Weather() {
//   const [city, setCity] = useState("");
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const submitHandler = (event) => {
//     event.preventDefault();
//     setError(null);
//     setLoading(true);

//     fetch(
//       `http://api.weatherapi.com/v1/current.json?key=bb1d868a22da4bd1963171321232510&q=${city}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         //successful response
//         // setResponse(data.location);
//         setResponse(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         //errors that occurred during the fetch
//         setError("Error fetching weather data. Please try again later.");
//         console.error("Error:", error);
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="main">
//       <div className="searchSection">
//         <form onSubmit={submitHandler}>
//           <input
//             type="text"
//             class="search-input"
//             placeholder="Enter the city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//           <button class="search-button" type="submit">
//             &#128269;
//           </button>
//         </form>
//       </div>

//       <div className="upperSection">
//         <div>
//           {loading && <p>Loading...</p>}
//           {error && <p>{error}</p>}

//         <span className="icon">{response && <img alt="" src={response.current.condition.icon} />}</span>  
//         <span>{response && <h1  className="temprature">Temp : <span className="temp
//         ">{response.current.temp_c} *C</span></h1>}</span>
//           {response && (
//             <p className="area">
//               <span>Country:</span>{response.location.country}<br/> 
//               <span>State</span>: {response.location.region}
//             </p>
//           )}
//           {response && (
//             <p className="climateInfo">
//               <span>Wind Speed</span> : {response.current.wind_kph} 
//               <span> Humidity</span>:{response.current.humidity}
//             </p>
//           )}
//         </div>
//       </div>
//       {/* <div className="lowerSection"></div> */}
//     </div>
//   );
// }
