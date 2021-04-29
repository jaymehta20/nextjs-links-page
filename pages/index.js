import { createClient } from "contentful";
import Head from "next/head";
import Image from "next/image";
import LinkCard from "../components/LinkCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "links" });

  return {
    props: {
      links: res.items,
    },
    revalidate: 1,
  };
}

const Home = ({ links }) => {
  return (
    <>
      <Head>
        <title>Links | NextJS ;)</title>
      </Head>
      <main>
        <div className="container">
          <div className="info-container">
            <div className="background"></div>
            <div className="profile">
              <div className="profile-picture">
                <a href="https://codegra.in">
                  <Image
                    src="/images/logo.jpg"
                    width="150"
                    height="150"
                    className="head-logo"
                  ></Image>
                </a>
              </div>
              <div className="profile-details">
                <h1>Jay Mehta</h1>
                <p>
                  Front-end Developer, Designer and Founder of{" "}
                  <a
                    className="underline"
                    href="https://codegra.in"
                    target="_blank"
                  >
                    Codegrain
                  </a>{" "}
                  🚀
                </p>
              </div>
            </div>
            <h2>Cool stuff</h2>
            <div className="links-container link-grid">
              {links.map((link) => (
                <LinkCard key={link.sys.id} link={link} />
              ))}
            </div>
            <h2>Profile &amp; Social</h2>
            <div className="links-container grids">
              <div className="social-link">
                <a
                  href="https://www.instagram.com/distracteddesigner/"
                  target="_blank"
                >
                  <div className="bottom">
                    <h3>Instagram</h3>
                    <p>@distracteddesigner</p>
                  </div>
                </a>
              </div>
              <div className="social-link">
                <a href="https://t.me/Elliot_69" target="_blank">
                  <div className="bottom">
                    <h3>Telegram</h3>
                    <p>@Elliot_69</p>
                  </div>
                </a>
              </div>
              <div className="social-link">
                <a
                  href="https://www.youtube.com/channel/UCPKsb4U7x_4Ws-RsKQThVAA"
                  target="_blank"
                >
                  <div className="bottom">
                    <h3>Youtube</h3>
                    <p>@Codegrain</p>
                  </div>
                </a>
              </div>
              <div className="social-link">
                <a href="https://twitter.com/mjay2001007" target="_blank">
                  <div className="bottom">
                    <h3>Twitter</h3>
                    <p>@mjay2001007</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="social-link">
              <a href="mailto:codegrain@gmail.com" target="_blank">
                <div className="bottom">
                  <h3>Let&rsquo;s connect via Mail</h3>
                  <p>jake2001007@gmail.com</p>
                </div>
              </a>
            </div>
            <div className="footer">
              <strong>
                <p>
                  {" "}
                  <a href="https://codegra.in/">Made with ❤️ by Jay Mehta</a>
                </p>
              </strong>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
