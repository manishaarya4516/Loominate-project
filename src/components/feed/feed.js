import React, { useState, useEffect } from "react";
import { Dropdown, Space } from "antd";
import {
  CommentOutlined,
  DislikeFilled,
  LikeFilled,
  SendOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { items } from "../items/Items";
import AddPostModal from "../add-post/add-post";
import axios from "axios";

const Feed = () => {
  const [contentData, setContentData] = useState(null);

  useEffect(() => {
    axios
      .get("https://loominatebackend-manishaarya4516.b4a.run/api/content/data")
      .then(async (response) => {
        const data = await response.data;
        console.log(data);
        setContentData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log();
  return (
    <div>
      <AddPostModal />
      <div className="filter-bar">
        <div className="filter-sub-list">
          <p>All</p>
          <p>Polls</p>
          <p>Initiatives</p>
        </div>
        <p>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Space>
                Click me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </p>
      </div>
      {contentData
        ? contentData.map((data) => {
            return (
              <>
                <div className="post-container">
                  <div className="head-stack">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      className="top"
                    >
                      <button>catagories</button>
                      <p>...</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                      }}
                      className="head"
                    >
                      <img
                        className="avatar-head"
                        src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                        alt=""
                      />
                      <p>manish</p>
                    </div>
                    <div className="content">
                      <h3>{data.title}</h3>
                      <p>Description</p>
                      <p style={{ color: "red" }}>#tags</p>
                      <img src={data.image} alt="" />
                    </div>
                  </div>
                  <div className="body-stack">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <LikeFilled />
                      <p>0</p>
                      <DislikeFilled />
                      <p>0</p>
                      <CommentOutlined />
                      <p>0</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        className="avatar-head"
                        src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                        alt=""
                      />
                      <div className="comment-box">
                        <input type="text" className="comment-input" />
                        <button>
                          Post <SendOutlined />
                        </button>
                      </div>
                    </div>
                    <p
                      style={{
                        margin: "20px 0px 0px 0px ",
                        fontSize: "14px",
                        color: "blue",
                      }}
                    >
                      View all comments
                    </p>
                  </div>
                </div>
              </>
            );
          })
        : ""}
    </div>
  );
};

export default Feed;
