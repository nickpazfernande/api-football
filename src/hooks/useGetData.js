import React, {useState, useEffect} from 'react'

const useGetData = (API) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch({API}, {
          method: "GET",
          headers: {
            "x-rapidapi-key": "ccf0502781334fde338f2391b1c5e51f",
            "x-rapidapi-host": "v3.football.api-sports.io",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.response);
            setData(data.response);
          })
          .catch((error) => console.log("error", error));
      }, []);


    return data;
}

export default useGetData
