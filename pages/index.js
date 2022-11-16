import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { LinkFree } from "../data/data";
export default function Home() {
  const { links, header } = LinkFree;
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
          overflow-x: hidden;
        }
      `}</style>
      <Head>
        <title>{header.text} | Home</title>
      </Head>
      <BodySection>
        <ImageConatiner src={header.image} />
        <HeaderText>
          <p>
            <span>{header.text}</span> <br />
            {header.subText}
          </p>
        </HeaderText>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            <LinkContainer>
              <LinkImg id="linkImage" src={link.img} />
              <p>{link.name}</p>
            </LinkContainer>
          </Link>
        ))}
      </BodySection>
    </>
  );
}

const LinkImg = styled.img`
  margin-left: 10px;
  max-width: 50px;
  max-height: 50px;
  border-radius: 10px;
  margin-right: 10px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 50vw;
  color: white;
  width: 50vw;
  height: 10vh;
  background: #222222;
  border-radius: 10px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 90vw;
    text-align: center;
  }
  :hover {
    background: #333333;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

const HeaderText = styled.div`
  text-align: center;
  margin-bottom: 20px;
  span {
    font-size: 18px !important;
    color: white;
  }
  p {
    font-size: 16px;
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
