import React,{useState,useEffect} from "react";
import { Button, Input } from 'antd';
import {postUser, putUser} from '../../Api/Api'
import './Adduser.css'

export const AddUserForm = () => {
const [avatar,setAvatar] = useState('')
    const [name,setName] = useState('')
    const [content,setContent] = useState('')
    
    //Add
    const onAdd =  () => {
        const response = postUser({avatar: avatar, name:name, description:content})
    }

    //Edit
    const onChange =  () => {
        const response = putUser({avatar: avatar, name:name, description:content, id:57})
    }

    return <div>
        <div>
            <div className="input-text">
                <Input onChange={(e)=> setAvatar(e.target.value)} placeholder="Avatar" type="text" className="ant-input" />
            </div>
            <div className="input-text">
                <Input onChange={(e)=> setName(e.target.value)} placeholder="Name" type="text" className="ant-input" />
            </div>
            <div className="input-text">
                <Input onChange={(e)=> setContent(e.target.value)} placeholder="Content" type="text" className="ant-input" />
            </div>
            <div className="div-button">
                <Button onClick={onAdd} className="ant-btn ant-btn-primary">
                    Add New User
                </Button>
                <Button onClick={onChange} className="ant-btn ant-btn-primary" style={{marginLeft: 10}}>
                    Edit User
                </Button>
                <Button className="ant-btn" style={{marginLeft: 10}}>
                    Cancel
                </Button>
            </div>
        </div>
        
    </div>
}
