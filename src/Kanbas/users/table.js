import React, { useState, useEffect } from "react";
import * as client from "./client";
import { BsFillCheckCircleFill, BsPencil, BsTrash3Fill, BsPlusCircleFill }
    from "react-icons/bs";
import { Link } from "react-router-dom";


function UserTable() {
    const [user, setUser] = useState({ username: "", password: "", role: "USER" });
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        try {
            const users = await client.findAllUsers();
            setUsers(users);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            const use = await client.updateUser(user);
            setUsers(users.map((u) => u._id === user._id ? user : u));
        } catch (err) {
            console.log(err);
        }
    };
    const deleteUser = async (use) => {
        try {
            await client.deleteUser(use);
            setUsers(users.filter((u) => u._id !== use._id));
        } catch (err) {
            console.log(err);
        };
    };
    const selectUser = async (user) => {
        const use = await client.findUserById(user._id);
        setUser(use);
    };
    useEffect(() => { fetchUsers(); }, []);
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>User List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    <tr>
                        <td>
                            <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                            <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                        </td>
                        <td>
                            <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td>
                            <BsFillCheckCircleFill onClick={updateUser} className="me-2 text-success fs-1 text" />
                            <BsPlusCircleFill onClick={createUser} className="text-primary fs-1 text" />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>
                                <Link to={`../Account/${user.username}`}>
                                    {user.username}
                                </Link>
                            </td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <button className="btn btn-warning me-2">
                                <BsPencil onClick={() => selectUser(user)} />
                            </button>
                            <button className="btn btn-danger me-2">
                                <BsTrash3Fill onClick={() => deleteUser(user)} />
                            </button>
                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;