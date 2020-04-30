import React from "react";
import { Card, Tag } from "antd";
import styled from "styled-components";
import Link from "next/link";

type ImageContainerProps = {
  imageUrl: string;
};

const ImageContainer = styled.div<ImageContainerProps>`
  background-image: ${(props) => `url(${props.imageUrl})`};
  height: 10rem;
  width: 100%;
  background-size: cover;
`;

const BlogContaier = styled.article`
  margin: 1rem;
`;

const defaultProps = {
  author: "",
  description: "",
  publishedDate: "",
  readingTime: "",
  className: "",
};

type BlogBoxProps = {
  id: string;
  slug: string;
  imageUrl: string;
  title: string;
  tags?: Array<{
    fields: {
      name: string
    }
  }>;
} & typeof defaultProps;

export const BlogBox = (props: BlogBoxProps) => {

  return (
    <BlogContaier>
      <Link href="/blog/[slug]" as={`/blog/${props.slug}`} passHref>
        <a className="card_link">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <ImageContainer imageUrl={props.imageUrl} />
            }
          >
            <Card.Meta
              title={props.title}
              description={props.description}
            />
            <br />
            {props.tags && props.tags.map(tag => {
              return <Tag>{tag.fields.name}</Tag>
            })}
          </Card>
        </a>
      </Link>
    </BlogContaier>
    // <div className={`col-lg-4 ${props.className} mt-3`}>
    //   <article className="card">

    //     <div className="card__info">

    //       <Link href="/blog/[slug]" as={`/blog/${props.slug}`} passHref>
    //         <a style={{ color: "#000", textDecoration: "none" }}>
    //           <h3 className="card__title">{props.title}</h3>
    //         </a>
    //       </Link>
    //     </div>

    //     <div className="card__info-hover">
    //       <div className="card__description">{props.description}</div>
    //     </div>
    //   </article>
    // </div>
  );
};

BlogBox.defaultProps = defaultProps;
