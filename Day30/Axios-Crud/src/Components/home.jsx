import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ApiExample = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    company: {
      name: '',
    },
    website: '',
  });

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    // Check if the input field is in the nested 'company' object
    if (e.target.name.startsWith('company.')) {
      const companyField = e.target.name.split('.')[1];
      setNewUser({
        ...newUser,
        company: { ...newUser.company, [companyField]: e.target.value },
      });
    } else {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }
  };

  const addUser = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: '', email: '', company: { name: '' }, website: '' });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const updateUser = async (id) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, newUser);
      const updatedUsers = users.map((user) => (user.id === id ? response.data : user));
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      const filteredUsers = users.filter((user) => user.id !== id);
      setUsers(filteredUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div>
    <h1>Axios Task</h1>
      <h2 className="mt-4 mb-2">Add User</h2>
      <div className="d-flex justify-content-center gap-5">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Company"
            name="company.name"
            value={newUser.company.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Website"
            name="website"
            value={newUser.website}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={addUser}>
        Add User
      </button>
    </div>

      <div className="container mt-5">
        <h1 className="mb-4">User List</h1>
        <div className="row ">
          {users.map((user) => (
            <div key={user.id} className="col-md-4 col-lg-3 col-sm-12  mb-3">
              <div className="card rounded">
                <div className="card-body ">
                  <h5 className="card-title pb-2"> {user.name}</h5>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">Company: {user.company.name}</p>
                  <p className="card-text">Website: {user.website}</p>
                  <div className="d-flex justify-content-center gap-4">
                    <button className="btn btn-warning" onClick={() => updateUser(user.id)}>
                      Update
                    </button>
                    <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ApiExample;
