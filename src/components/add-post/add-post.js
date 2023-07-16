import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Upload } from "antd";
import { useState } from "react";
import "./add-post-style.css";
import { Catagories } from "../category-list/category-list";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import axios from "axios";

const AddPostModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    axios
    .post(
      "https://loominatebackend-manishaarya4516.b4a.run/api/content/post",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ).then(async response =>{
      const data = await response.data;
      console.log(data);
      setTitle("")
      setDescription("")
      setImage(null)
    }).catch(err=>console.log(err))


  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <p className="post-bar" onClick={showModal}>
        <p>Post Something...</p>

        <Button type="primary" shape="circle">
          <PlusOutlined />
        </Button>
      </p>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h1>Create Post</h1>
        <div className="post-form">
          <form onSubmit={handleSubmit}>
            <div className="detail-inputs">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="detail-inputs">
              <label>Content</label>
              <textarea
                id="content"
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="detail-inputs">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>

            <button type="submit">post</button>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default AddPostModal;
