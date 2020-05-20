import React from "react";
import { BlogPost } from "services";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Row, Col } from "reactstrap";

const Image = styled.img`
  max-width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Tag = styled.div`
  background: rgba(0,0,0, .01);
  padding: .2rem .5rem .2rem .5rem;
  border: 1px solid rgba(0,0,0, .1);
  border-radius: 1rem;
  transition: all ease-in-out .25s;

  &::before {
    content: "#";
  }

  &:hover {
    cursor: pointer;
    // background: rgba(0,0,0, .1);
    box-shadow: 1px 1px 7px 1px;
  }
`

type BlogDetailProps = {
  post: BlogPost;
};

export const BlogDetail = (props: BlogDetailProps) => {
  const { post } = props;
  console.log(post.tags);
  return (
    <article className="post-full post">
      {/* <style jsx>{`
        .align-right {
          text-align: right;
        }
      `}
      </style> */}
      <header className="post-full-header">
        <h1 className="post-full-title">{post.title}</h1>
        <Row>
          <Col>
            <span className="">{`${new Date(
              post.publishedDate
            ).toDateString()}`}</span>
          </Col>
        </Row>
        <Row>
        <Col>
            {post.tags && post.tags.map((tag) => {
              return <Tag>{tag.fields.name}</Tag>;
            })}
          </Col>
        </Row>
      </header>
      <figure className="post-full-image text-center">
        <Image src={post.imagePreview.imageUrl} alt={post.imagePreview.title} />
      </figure>
      <section
        style={{ overflowY: "inherit", marginBottom: "2em" }}
        className="post-full-content"
      >
        {documentToReactComponents(post.body, {})}
        {/* <ReactMarkdown source={post.body} /> */}
      </section>
    </article>
  );
};
