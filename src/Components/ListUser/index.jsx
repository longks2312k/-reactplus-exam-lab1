import './ListUser.css'
import React,{useState,useEffect} from "react";
import {getUser,deleteUser} from '../../Api/Api'

export const ListUser = () => {

    const [user, setUser] = useState([])

    //Get
    const callGetUser = async () => {
        const response = await getUser();
        console.log("data",response.data)
        setUser(response.data)
    }

    //Delete
    const onDelete = async (item) => {
        const response = await deleteUser(item.id)
        console.log(response)
    }

    useEffect(() => {
		callGetUser()
	}, [])

    return <div className="ant-list-items">
        <div>
        {user.map((item) => (
            <div key={item.id} className="ant-list-item-meta">
                <div className="ant-list-item-meta-avatar">
                    <span className="ant-avatar ant-avatar-circle ant-avatar-image">
                        <img src={item.image}/>
                    </span>
                </div>
                <div className="ant-list-item-meta-content">
                    <h4 className="ant-list-item-meta-title">
                        <a>{item.name}</a>
                    </h4>
                    <div className="ant-list-item-meta-description">
                        {item.description}
                    </div>
                </div>
                <ul className="ant-list-item-action">
                    <li className="ant-list-item-btn">
                        <a>Edit</a>
                    </li>
                    <li onClick={() => onDelete(item)} className="ant-list-item-btn">
                        <a>Remove</a>
                    </li>
                </ul>
            </div>
        ))}
        </div>
    </div>
}