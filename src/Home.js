import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function Home() {

  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {

    if (location?.state?.arr) {
      setData(location.state.arr);
    }

    if (location?.state?.editdata) {
      setData([location.state.arr]);
    }
  }, [location.state]);


  const edit = (item) => {

    navigate('/Profile', {
      state: { item, data }
    });
  }


  return (
    <>
      <h1>User Profile Data</h1>
      <div>

        <table>
          <thead ></thead>
          <tbody>

            {data?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.designatino}</td>
                  <td>{item.address}</td>
                  <td onClick={() => edit(item)} className='editBtn'>Edit</td>
                </tr>
              )
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>

    </>
  );
}

export default Home;
