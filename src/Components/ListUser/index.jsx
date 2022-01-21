import { Modal, Input, Button } from 'antd';
import './ListUser.css'
import React,{useState,useEffect} from "react";
import {getUser,deleteUser,putUser} from '../../Api/Api'

export const ListUser = () => {

    const [user, setUser] = useState([])
    const [avatar,setAvatar] = useState('')
    const [name,setName] = useState('')
    const [content,setContent] = useState('')
    const [id,setId] = useState('')

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOpenModal = (item) => {
        setIsModalVisible(true)
        setId(item.id)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    //Get
    const callGetUser = async () => {
        const response = await getUser();
        console.log("data",response.data)
        setUser(response.data)
    }

    //Delete
    const onDelete = async (item) => {
        const response = await deleteUser(item.id)
    }

    //Edit
    const onChange = async () => {
        const response = await putUser(id,{avatar: avatar, name: name, description:content})
        //console.log('id',id)
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
                    <li onClick={() => handleOpenModal(item)} className="ant-list-item-btn">
                        <a>Edit</a>
                    </li>
                    <li onClick={() => onDelete(item)} className="ant-list-item-btn">
                        <a>Remove</a>
                    </li>
                </ul>
                <Modal title="Basic Modal" visible={isModalVisible} footer={null} onCancel={handleCancel}>
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
                        <Button onClick={() => onChange()} className="ant-btn ant-btn-primary">
                            Edit User
                        </Button>
                        <Button className="ant-btn" style={{marginLeft: 10}}>
                            Cancel
                        </Button>
                    </div>
                </div>
                </Modal>
            </div>
        ))}
        </div>
        
    </div>
}