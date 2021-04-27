import Head from "next/head";

const Home = () => {
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
                  <img className="head-logo"></img>
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
              <div className="link">
                <a href="https://codegra.in/blog/blog-6" target="_blank">
                  <div className="right">
                    <h3>4 less known HTML tags</h3>
                    <p>Lorem ipsum dolor, sit?</p>
                  </div>
                </a>
              </div>
              <div className="link">
                <a href="https://codegra.in/blog/blog-5" target="_blank">
                  <div className="right">
                    <h3>10 key takeaways from show your work</h3>
                    <p>Lorem ipsum dolor, sit?</p>
                  </div>
                </a>
              </div>
              <div className="link">
                <a href="https://codegra.in/blog/blog-4" target="_blank">
                  <div className="right">
                    <h3>Open Source Apps for Windows, We use at Codegrain</h3>
                    <p>Lorem ipsum dolor, sit?</p>
                  </div>
                </a>
              </div>
              <div className="link">
                <a href="https://codegra.in/blog/blog-3" target="_blank">
                  <div className="right">
                    <h3>Open Source Apps for Mac OS, We use at Codegrain</h3>
                    <p>Lorem ipsum dolor, sit?</p>
                  </div>
                </a>
              </div>
              <div className="link">
                <a href="https://codegra.in/blog/blog-2" target="_blank">
                  <div className="right">
                    <h3>
                      Master frost gradient, Create frost gradients with ease.
                    </h3>
                    <p>Lorem ipsum dolor, sit?</p>
                  </div>
                </a>
              </div>
            </div>
            <h2>Profile &amp; Social</h2>
            <div className="links-container grids">
              <div className="social-link">
                <a href="https://www.instagram.com/codegra.in/" target="_blank">
                  <div className="bottom">
                    <h3>Instagram</h3>
                    <p>@codegra.in</p>
                  </div>
                </a>
              </div>
              <div className="social-link">
                <a href="https://www.behance.net/CodeGrain" target="_blank">
                  <div className="bottom">
                    <h3>Behance</h3>
                    <p>@CodeGrain</p>
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
                <a href="https://twitter.com/codegrain" target="_blank">
                  <div className="bottom">
                    <h3>Twitter</h3>
                    <p>@Codegrain</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="social-link">
              <a href="mailto:codegrain@gmail.com" target="_blank">
                <div className="bottom">
                  <h3>Let&rsquo;s connect via Mail</h3>
                  <p>codegrain@gmail.com</p>
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
