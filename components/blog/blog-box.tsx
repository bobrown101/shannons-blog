import React from "react";
import styled from "styled-components";
import Link from "next/link";

type ImageContainerProps = {
  imageUrl: string;
};

const borderRadius = "1rem";
const height = "12rem";
const oneThird = 100 / 3;
const twoThirds = oneThird * 2;

const Container = styled.article`
  width: 100%;
  height: ${height};
  margin-bottom: 2rem;
  // padding: 1rem;
  background-color: white;
  // border-top-right-radius: ${borderRadius};
  box-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
`;

const Side = styled.div`
  height: 100%;
  display: inline-block;
  float: left;
`;
const LeftSide = styled(Side)`
  width: ${oneThird}%;
`;

const RightSide = styled(Side)`
  width: ${twoThirds}%;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div<ImageContainerProps>`
  background-image: ${(props) => `url(${props.imageUrl})`};
  height: 10rem;
  width: 100%;
  background-size: cover;
  // border-top-left-radius: ${borderRadius};
  // border-bottom-left-radius: ${borderRadius};
  height: ${height}
`;

const Header = styled.h1`
  background-color: white;
  padding: .5rem;
  flex-grow: 1;
  line-height: 100%;
  margin: 0;
  color: black;
`;

const Description = styled.p`
  word-break: break-all;
  flex-grow: 10;
  background-color: #e2e8f0;
  margin: 0;
  padding: .5rem;
  color: rgba(0,0,0,.7)
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
      name: string;
    };
  }>;
} & typeof defaultProps;

export const BlogBox = (props: BlogBoxProps) => {
  return (
    <Link href="/blog/[slug]" as={`/blog/${props.slug}`} passHref>
      <a>
        <Container>
          <LeftSide>
            <ImageContainer imageUrl={props.imageUrl} />
          </LeftSide>
          <RightSide>
            <Header>{props.title}</Header>

            <Description>{props.description}</Description>
          </RightSide>
        </Container>
      </a>
    </Link>
  );
};

BlogBox.defaultProps = defaultProps;
