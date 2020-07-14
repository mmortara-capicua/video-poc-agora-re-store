import { MDBContainer, MDBIframe } from "mdbreact";

import React from "react";

const IframePage = () => {
  return (
    <MDBContainer className="text-center">
      <MDBIframe src="http://localhost:8080" />
    </MDBContainer>
  );
}

export default IframePage;