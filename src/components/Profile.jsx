import React from 'react'
import { useState } from 'react'



const Profile = () => {

  const [profile, setProfile] = useState({
    name:"",
    age:"",
    });

  const handleChange = (e)=>{
    const{name,value} = e.target;

    setProfile((prevProfile)=>({
      ...prevProfile, 
      [name]: value
    }));
  }

  return (
    <>
    <h1>user Data</h1>
    <div>
      <label>
        Name:
        <input type="text" name='name' onChange={handleChange} value={profile.name} />
      </label>
    </div>

    <div>
      <label>
        Age:
        <input type="number" name="age" value={profile.age} onChange={handleChange} />
      </label>
    </div>

    <h1>User profile updated</h1>
    <p>Name: {profile.name}</p>
    <p>Age: {profile.age}</p>
    </>
  )
}

export default Profile