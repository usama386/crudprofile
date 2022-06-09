import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Profile() {
    const location = useLocation();
    const navigate = useNavigate();

    const a = location?.state?.item?.name;
    const b = location?.state?.item?.designatino;
    const c = location?.state?.item?.address;
    const d = location?.state?.data
    const [getInput, setInput] = useState(a);
    const [getDesg, setDesg] = useState(b);
    const [getAdd, setAdd] = useState(c);
    const [editdata, setEditData] = useState(d);



    const handleInput = (e) => {
        setInput(e.target.value);
    }


    const handledesg = (e) => {
        setDesg(e.target.value);
    }

    const handleadd = (e) => {
        setAdd(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const datarecieve = editdata.map((user, index) => {
            const id = location.state.item.id;
            if (user.id === id) {
                editdata[index] = {
                    id: id,
                    name: getInput,
                    designatino: getDesg,
                    address: getAdd
                };
            }
            return user
        }

        )
        setEditData(datarecieve)

        navigate('/Home', {
            state: {
                arr: editdata
            }
        });

        setInput('');
        setDesg('');
        setAdd('');
    }


    return (
        <>

            {location.state === null ? <h1>No data found</h1> : <form onSubmit={handleSubmit}>
                <label>UserName :</label>
                <input
                    value={getInput}
                    onChange={handleInput} />

                <label>Designation :</label>
                <input
                    value={getDesg}
                    onChange={handledesg}
                />

                <label>Address :</label>
                <input
                    value={getAdd}
                    onChange={handleadd}
                />
                <input type='submit' value='Update' />
            </form>}

        </>
    );
}
export default Profile;