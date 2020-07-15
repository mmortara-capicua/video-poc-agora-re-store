import { MDBContainer, MDBIframe } from "mdbreact";

import React from "react";

const IframePage = () => {
  return (
    <MDBContainer className="text-center">
      <MDBIframe src="https://chat-test.knocknock.tv" />
    </MDBContainer>
  );
}

export default IframePage;