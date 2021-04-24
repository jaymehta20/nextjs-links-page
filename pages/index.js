import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Links | Codegrain</title>
      </Head>
      <div className="wrap">
        <main>
          <div className="container">
            <div className="info-container">
              <div className="background"></div>
              <div className="profile">
                <div className="profile-picture">
                  <a href="https://codegra.in">
                    <img className="head-logo" />
                  </a>
                </div>
                <div className="profile-details">
                  <h1>Shared Resources</h1>
                </div>
              </div>
              <h2>Cool stuff</h2>
              <div className="links-container">
                <div className="link">
                  <a href="design-tools.html">
                    <div className="left">
                      <img
                        src="images/blog-6-cover.jpg"
                        style={{ width: "6rem" }}
                      />
                    </div>
                    <div className="right">
                      <h3>4 less known HTML tags</h3>
                    </div>
                  </a>
                </div>
                <div className="link">
                  <a href="free-ux-courses.html">
                    <div className="left">
                      <img
                        src="images/blog-5-cover.jpg"
                        style={{ width: "6rem" }}
                      />
                    </div>
                    <div className="right">
                      <h3>10 key takeaways from show your work</h3>
                      <p>Lorem ipsum dolor, sit?</p>
                    </div>
                  </a>
                </div>
                <div className="link">
                  <a href="job-boards.html">
                    <div className="left">
                      <img
                        src="images/blog-4-cover.jpg"
                        style={{ width: "6rem" }}
                      />
                    </div>
                    <div className="right">
                      <h3>Open Source Apps for Windows, We use at Codegrain</h3>
                    </div>
                  </a>
                </div>
                <div className="link">
                  <a href="case-studies-template.html">
                    <div className="left">
                      <img
                        src="images/blog-3-cover.jpg"
                        style={{ width: "6rem" }}
                      />
                    </div>
                    <div className="right">
                      <h3>Open Source Apps for Mac OS, We use at Codegrain</h3>
                    </div>
                  </a>
                </div>
                <div className="link">
                  <a href="user-stories-template.html">
                    <div className="left">
                      <img
                        src="images/blog-2-cover.jpg"
                        style={{ width: "6rem" }}
                      />
                    </div>
                    <div className="right">
                      <h3>
                        Master frost gradient, Create frost gradients with ease.
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              <h2 style={{ paddingTop: "24px" }}>Profile &amp; Social</h2>
              <div className="links-container">
                <div className="social-link">
                  <a
                    href="https://www.instagram.com/codegra.in/"
                    target="_blank"
                  >
                    <div className="top">
                      <img src="images/og-social.jpg" />
                    </div>
                    <div className="bottom">
                      <h3>Instagram</h3>
                      <p>@codegra.in</p>
                    </div>
                  </a>
                </div>
                <div className="social-link">
                  <a href="https://www.behance.net/CodeGrain" target="_blank">
                    <div className="top">
                      <img src="images/og-social.jpg" />
                    </div>
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
                    <div className="top">
                      <img src="images/og-social.jpg" />
                    </div>
                    <div className="bottom">
                      <h3>Youtube</h3>
                      <p>@Codegrain</p>
                    </div>
                  </a>
                </div>
                <div className="social-link">
                  <a href="https://twitter.com/codegrain" target="_blank">
                    <div className="top">
                      <img src="images/og-social.jpg" />
                    </div>
                    <div className="bottom">
                      <h3>Twitter</h3>
                      <p>@Codegrain</p>
                    </div>
                  </a>
                </div>
                <div className="social-link">
                  <a href="mailto:codegrain@gmail.com" target="_blank">
                    <div className="top">
                      <img src="images/og-social.jpg" />
                    </div>
                    <div className="bottom">
                      <h3>Let&rsquo;s connect via Mail</h3>
                      <p>codegrain@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer">
                <strong>
                  <p>By Codegrain</p>
                </strong>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
