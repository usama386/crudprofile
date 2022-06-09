import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
function AddProfile() {
    const navigate = useNavigate();
    const [data, setdata] = useState([]);
    const [enterName, setEnterName] = useState('')
    const [enterDesg, setEnterDesg] = useState('')
    const [enterAdd, setEnterAdd] = useState('')

    const nameChaneHandler = (event) => {
        setEnterName(event.target.value)
    }
    const desgChaneHandler = (event) => {
        setEnterDesg(event.target.value)
    }
    const addressChaneHandler = (event) => {
        setEnterAdd(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data1 = {
            id: new Date().getTime().toString(),
            name: enterName,
            designatino: enterDesg,
            address: enterAdd
        }
        if (!enterName && !enterDesg && !enterAdd) {
            alert('please fill the form');
        } else {
            setdata([...data, data1]);
            alert('data is stored successfully');
            setEnterName('');
            setEnterDesg('');
            setEnterAdd('');
        }

    }

    const goHome = () => {
        navigate('/Home', {
            state: {
                arr: data
            }
        });
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className="form-control">
                        <label htmlFor="userName">Name</label>
                        <input type='text' name="userName" id="username" value={enterName} onChange={nameChaneHandler} />
                    </div>
                    <div className="form-control">
                        <label htmlFor='designation'>Designation</label>
                        <input type='text' name="designation" id="Designation"
                            value={enterDesg}
                            onChange={desgChaneHandler} />
                    </div>
                    <div className="form-control">
                        <label htmlFor='address'>Address</label>
                        <input type='text' name="address" id="Address"
                            value={enterAdd}
                            onChange={addressChaneHandler} />
                    </div>

                    <div className="submit-form">
                        <input type='submit' value="Add Profile" />
                    </div>
                    <button onClick={goHome}>Check All Profiles Data</button>
                </div>
            </form>
        </>
    );
}

export default AddProfile;