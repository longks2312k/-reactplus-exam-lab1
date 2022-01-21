import React,{useState,useEffect} from "react";
import { Input } from 'antd';
import {postUser} from '../../Api/Api'

export const AddUserForm = () => {

    const onAdd = async () => {
        const response = await postUser({avatar: avatar, name:name, description:content})
    }
    const [avatar,setAvatar] = useState('')
    const [name,setName] = useState('')
    const [content,setContent] = useState('')

    return <div>
        <div>
            <div className="field-input-group">
                <Input onChangeText={()=> setAvatar()} placeholder="Avatar" type="text" className="ant-input" />
            </div>
            <div className="field-input-group">
                <Input onChangeText={()=> setName()} placeholder="Name" type="text" className="ant-input" />
            </div>
            <div className="field-input-group">
                <Input onChangeText={()=> setContent()} placeholder="Content" type="text" className="ant-input" />
            </div>
            <div className="modal-new-user-footer">
                <button conClick={onAdd} className="ant-btn ant-btn-primary">
                    Save
                </button>
                <button className="ant-btn" style={{marginLeft: 10}}>
                    Cancel
                </button>
            </div>
        </div>
        
    </div>
}
