import React,{useState,useEffect} from 'react';
import './Profile.css';
import axios from 'axios';
import {useAuth} from '../../Context/AuthContext';

const Profile = () => {

  const {user} = useAuth();
  const [Profiledata, setProfiledata] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    firstname: '',
    lastname: '',
  });

  const fetchProfileData = async () => {
    try{
      const res = await axios.get(`http://localhost:1010/user/details?email=${user.email}`);
      setProfiledata(res.data.user);
    } catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    
    if(user){
      fetchProfileData();
    }

  }, [user]);

  const handleEditToggle = () => {
    setEditing(!editing);

    if(!editing){
      setEditedData({
        firstname: Profiledata.firstname,
        lastname: Profiledata.lastname,
        password: Profiledata.password,
      });
    }
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdateProfile = async () => {
    try{
      await axios.put(`http://localhost:1010/user/update`, {
        email: user.email,
        ...editedData,
      });

      await fetchProfileData();
      setEditing(false);
      alert('Profile Updated Successfully');
    }catch(error){
      console.log(error);
    }
  };

  return (
    <div className="profile">
      <h2>My Profile</h2>
      {Profiledata? (
        
        <div>

          <div className="profile-data">

          <div className="profile-left">
            <p>First Name : </p>
            <p>Last Name : </p>
            <p>Email : </p>
            <p>Wallet Balance : </p>

          </div>

          <div className="profile-right">        
          <p>
              {editing ? (
                <input 
                type="text" 
                name="firstname" 
                value={editedData.firstname} 
                onChange={handleInputChange} />
                ) : (Profiledata.firstname)}
            </p>
          <p>
            {editing ? (
              <input 
              type="text" 
              name="lastname" 
              value={editedData.lastname} 
              onChange={handleInputChange} />
              ) : (Profiledata.lastname)}
          </p>
          <p>{Profiledata.email}</p>
          <p>{Profiledata.walletAmount}</p>

          </div>

          </div>

          <div className="profile-button">
          
          {editing ? (
            <button onClick={handleUpdateProfile}>Apply Changes</button>
          ) : (
            <button onClick={handleEditToggle}>Update Profile</button>
          )}
          
          </div>

        </div>
      ) : (
        <p>Loading Profile Data...</p>
      )}
    </div>
  )
}

export default Profile