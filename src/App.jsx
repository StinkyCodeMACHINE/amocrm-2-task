import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <img src="/assets/logo.svg" alt="logo" />
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Team</li>
            <li>Shop</li>
            <li>Pages</li>
          </ul>
        </nav>
        <div className="navbar-options">
          <div className="navbar-cart-icon-container">
            <img src="/assets/cart.svg" alt="cart" />
            <div className="navbar-cart-counter">0</div>
          </div>
          <button>Contact Us</button>
        </div>
      </header>
      <main>
        <h1 class="sr-only">Next generation of gaming</h1>
        <div className="fragment-1">
          <div className="inner-fragment-container">
            <div className="fragment-1-links">
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitch</li>
              </ul>
            </div>
            <div className="fragment-1-info-and-img-container">
              <div className="fragment-1-info">
                <div className="future-of-esports-container">
                  <img src="/assets/flame.svg" alt="raging fire" />
                  <div>FUTURE OF eSPORTS</div>
                </div>
                <h2 className="fragment-1-heading">
                  Unleash the Next <span>Generation</span> of Gaming
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.
                </p>
                <div className="fragment-1-options">
                  <button>Explore More</button>
                  <div>View our team</div>
                </div>
              </div>
              <img src="/assets/fr1img.png" alt="someguy1" />
            </div>
          </div>
        </div>
        <div className="fragment-2">
          <div className="inner-fragment-container">
            <img src="/assets/fr2img.png" alt="someguy2" />
            <div className="fragment-2-info">
              <div className="future-of-esports-container">
                <img src="/assets/flame.svg" alt="hellish flame" />
                <div>FUTURE OF eSPORTS</div>
              </div>
              <h2 className="fragment-2-heading">
                Customize your own character
              </h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae.
              </p>
              <div className="fragment-2-imgs-container">
                <img src="/assets/fr2img21.png" alt="someguy2" />
                <img src="/assets/fr2img22.png" alt="someguy3" />
                <img src="/assets/fr2img23.png" alt="someguy4" />
              </div>
            </div>
          </div>
        </div>
        <div className="fragment-3">
          <div className="inner-fragment-container">
            <div className="future-of-esports-container">
              <img src="/assets/flame.svg" alt="fiery gehenna" />
              <div>FUTURE OF eSPORTS</div>
            </div>
            <div className="fragment-3-heading-and-button-container">
              <h2 className="fragment-3-heading">Latest News & articles</h2>
              <button>Read More</button>
            </div>
            <div className="fragment-3-articles-container">
              <article className="fragment-3-big-article">
                <img src="/assets/fr3img1.png" alt="BIG gamepad" />
                <div className="fragment-3-article-date">April 2, 2021</div>
                <h3 className="fragment-3-article-heading">
                  Esports Group teams up with the Indianapolis Colts
                </h3>
              </article>
              <div className="fragment-3-small-articles-subcontainer">
                <article className="fragment-3-small-article">
                  <img src="/assets/fr3img2.png" alt="someguy5?" />
                  <div className="fragment-3-article-date">April 2, 2021</div>
                  <h3 className="fragment-3-article-heading">
                    NAVI reveals s1mple fifth anniversary
                  </h3>
                </article>
                <article className="fragment-3-small-article">
                  <img src="/assets/fr3img3.png" alt="a1esports something" />
                  <div className="fragment-3-article-date">April 2, 2021</div>
                  <h3 className="fragment-3-article-heading">
                    A1esports Shares new picture
                  </h3>
                </article>
                <article className="fragment-3-small-article">
                  <img src="/assets/fr3img4.png" alt="gay keyboard" />
                  <div className="fragment-3-article-date">April 2, 2021</div>
                  <h3 className="fragment-3-article-heading">
                    T1 unveil partnership with Razer
                  </h3>
                </article>
                <article className="fragment-3-small-article">
                  <img src="/assets/fr3img5.png" alt="big blue balls" />
                  <div className="fragment-3-article-date">April 2, 2021</div>
                  <h3 className="fragment-3-article-heading">
                    RX secures content partnership with
                  </h3>
                </article>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-info-container">
          <img src="/assets/logo.svg" alt="logo" />
          <p>
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
            quam ac sed turpis volutpat. Cursus sed massa non .
          </p>
        </div>
        <div className="footer-info-container">
          <div>Menu Items</div>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-info-container">
          <div>Other Pages</div>
          <ul>
            <li>Styleguide</li>
            <li>Changelog</li>
            <li>Licenses</li>
            <li>Team</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
