import React, { Component } from "react";
import { Layout } from "components/layout";
import styled from "styled-components";

type ImageContainerProps = {
  imageUrl: string;
};

const ImageContainer = styled.div<ImageContainerProps>`
  background-image: ${(props) => `url(${props.imageUrl})`};
  height: 100vh;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col-12">
            <h1>Hey, I'm Shannon!</h1>
            <ImageContainer imageUrl="/static/images/under-construction.jpg" />
            <a href="https://www.freepik.com/free-photos-vectors/design">
              Design vector created by freepik - www.freepik.com
            </a>
          </div>
        </div>
      </Layout>
    );
  }
}
