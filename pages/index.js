import Head from "next/head";
import styled from "styled-components";
export default function Home() {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap");
        html,
        body {
          padding: 0;
          margin: 0;
          background: black;
          font-family: "Inter", sans-serif;
        }
      `}</style>
      <Head>
        <title>Delta SJEC | Linktree</title>
        <link rel="png" href="https://delta-sjec.tech/favicon.png" />
      </Head>
      <BodySection>
        <ImageConatiner src="https://github.com/DeLTA-SJEC.png" />
        <HeaderText>
          <p>
            <span>Delta SJEC</span> <br />
            Building an Inclusive Developer Group!
          </p>
        </HeaderText>

        <LinkContainer>
          <LinkImg id="linkImage" src="https://delta-sjec.tech/favicon.png" />
          <p>Discord</p>
        </LinkContainer>
      </BodySection>
    </>
  );
}

const LinkImg = styled.img`
  margin-left: 10px;
  max-width: 60px;
  max-height: 60px;
  border-radius: 2px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  width: 50vw;
  height: 10vh;
  background: #222222;
  border-radius: 10px;
  margin-bottom: 10px;
  :hover {
    background: #333333;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

const HeaderText = styled.div`
  text-align: center;
  span {
    font-size: 16px !important;
    color: white;
  }
  p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }
`;
const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  width: 100vw;
  height: 100vh;
`;

const ImageConatiner = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-top: 50px;
`;
