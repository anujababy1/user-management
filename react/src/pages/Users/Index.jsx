import {Link} from 'react-router-dom';
import { useState,useEffect, useCallback } from 'react';
import axiosClient from "../../axios-client";

const Users = ()=>{


    const [loading,setLoading] = useState(false);
    const [users,setUsers] = useState([]);
    const [page,setPage] = useState(1);
    const [lastPage,setLastPage] = useState(1);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = useCallback( async(currentpage=1)=>{
        setLoading(true);
        try {
            const response = await axiosClient.get('/users',{
              params: {
                page: currentpage
              }
            });
            //console.log(response);
            setUsers(response.data.users.data);
            setPage(response.data.users.current_page);
            setLastPage(response.data.users.last_page);
        } catch (error) {
           //console.log(error);
        } 
        setLoading(false);
    },[]);

    

    

    function onDeleteHandler(user){
        if (!window.confirm("Are you sure you want to delete this user?")) {
            return
          }
          axiosClient.delete(`/users/${user.id}`)
            .then(() => {
            getUsers()
        })
    }

    function previousPage(e){
      e.preventDefault();
        if(page <=1){
          return;
        }
        getUsers(page-1);
    }

    function nextPage(e){
      e.preventDefault();
      if(page >= lastPage){
        return;
      }
      getUsers(page+1);
    }

    return (
        <div>
        <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
          <h1>Users</h1>
          <Link className="btn-add" to="/users/create">Add new</Link>
        </div>
        <div className="card animated fadeInDown">
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Create Date</th>
              <th>Actions</th>
            </tr>
            </thead>
            {loading &&
              <tbody>
              <tr>
                <td colSpan="5" className="text-center">
                  Loading...
                </td>
              </tr>
              </tbody>
            }
            {!loading &&
              <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.created_at}</td>
                  <td>
                    <Link className="btn-edit" to={'/users/' + u.id}>Edit</Link>
                    &nbsp;
                    <button className="btn-delete" onClick={ev => onDeleteHandler(u)}>Delete</button>
                  </td>
                </tr>
              ))}
              </tbody>
            }
          </table>

          {!loading && lastPage >1 &&  <div className="pagination">
            <a href="#" onClick={previousPage}>❮ Previous</a>
            <a href="#" onClick={nextPage}>Next ❯</a>
          </div>}


        </div>
      </div>
    )

};

export default Users;