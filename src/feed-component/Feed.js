import "./Feed.css";
import { useAside } from "../aside-component/AsideContext";
import { CodeHighlight } from "../code-highlight-component/CodeHighlight";

const buttonContained = `<button class="btn">Default</button>
<button class="btn primary">Primary</button>
<button class="btn secondary">Secondary</button>
<button class="btn disabled">Disabled</button>`;

const buttonText = `<button class="btn text">Default</button>
<button class="btn text primary">Primary</button>
<button class="btn text secondary">Secondary</button>
<button class="btn text disabled">Disabled</button>`;

const buttonOutlined = `<button class="btn outline">Default</button>
<button class="btn outline primary">Primary</button>
<button class="btn outline secondary">Secondary</button>
<button class="btn outline disabled">Disabled</button>`;

const buttonCTA = `<button class="cta">+</button>
<button class="cta text">button</button>`;

const buttonCTACSS = `
.cta{
  right:20px;
  bottom:20px;
}
  
.cta.text{
  left:20px;
  bottom:20px;
}`;

const buttonSize = `<button class="btn small">Small Button</button>
<button class="btn large">Large Button</button>`;

const input = `<input class="input" placeholder="Type Here" type="text" />`;

const inputWithLabel = `<div class="input-group">
<span class="group-label">Name</span>
<input class="input-group input" placeholder="Type Here"/>
</div>`;

const badge = `<span class="badge">4</span>
<span class="badge online">4</span>
<span class="badge offline">4</span>`;

const badgeCSS = `
.badge {
  top: 0.6rem;
  left: 0.6rem;
}
.badge.online {
  top: 3.7rem;
  left: 3rem;
}
.badge.offline {
  top: 3.7rem;
  left: 3rem;
}`;

const cardSimple = `<div class="card">
<div class="card-heading">
  <h2>This is card heading</h2>
  <span class="card-sub-heading">This sub heading</span>
</div>

<div class="card-content">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
    harum dolor obcaecati repellat, aperiam ex enim suscipit vero
    consequuntur autem modi officiis nesciunt repellendus adipisci
    aspernatur molestiae tempora labore. Laudantium.
  </p>
</div>
<div class="card-footer">
  <button class="btn primary text">Go Somewhere</button>
</div>
</div>`;

const cardWithMedia = `<div class="card">
<div class="card-img">
  <img
    src="https://cesarkaikarate.com/wp-content/uploads/2017/04/default-image.jpg"
    alt=""
  />
  <span class="badge">4</span>
</div>
<div class="card-heading">
  <h2>This is card with image and badge</h2>
  <span class="card-sub-heading">This sub heading</span>
</div>
<div class="card-content">
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Repellat voluptatibus odit nobis recusandae repudiandae quos
    excepturi voluptatum officiis est unde!
  </p>
</div>
<div class="card-footer">
  <button class="btn primary text">Go Somewhere</button>
</div>
</div>`;

const badgeForCardWithMedia = `
.badge {
  top: 10px;
  right: 10px;
}`;

const modalSimple = `<div class="modal">
<h2 class="modal-heading">This is Modal Heading</h2>
<div class="modal-content">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
    blanditiis quia sint laudantium adipisci eaque. Voluptate cumque
    sint ex debitis?
  </p>
</div>
<div class="modal-buttons">
  <button class="btn primary text">Agree</button>
  <button class="btn primary text">Disagree</button>
</div>
</div>`;

const stackedList=`<ul class="stacked-list">
<li class="list-item">
  <div class="list-logo">
  </div>
  <a href="">Notification Preferences</a>
</li>
<li class="list-item">
  <div class="list-logo">
  </div>
  <a href="">Send Mail</a>
</li>
<li class="list-item">
  <div class="list-logo">
  </div>
  <a href="">Profile</a>
</li>
<li class="list-item">
  <div class="list-logo">
  </div>
  <a href="">Manage Address</a>
</li>
<li class="list-item">
  <div class="list-logo">
  </div>
  <a href="">Logout</a>
</li>
</ul>`

const emeraldImport = `@import "https://emerald-css.netlify.app/emerald.css";`;

export const Feed = () => {
  const { setIsAsideOpen } = useAside();

  return (
    <div
      onTouchStart={() => {
        setIsAsideOpen(false);
      }}
      className="row"
    >
      <div className="row-pills">
        <span class="anchor" id="usage"></span>
        <h3>Usage</h3>
        <p>To use Emerald's CSS Components just import the CSS FIle.</p>
        <CodeHighlight code={emeraldImport} />
      </div>
      <div className="row-pills">
        <span class="anchor" id="button"></span>
        <h3>Button</h3>
        <p>
          Buttons are one of the most important way a user interacts with UI.
          Use Emerald's Classic buttons to make your user interaction a notch
          above all.
        </p>
        <h4>Contained Buttons</h4>
        <p>
          Contained buttons are high-emphasis and have interactions primary to
          app
        </p>
        <div className="component-container">
          <button className="btn">Default</button>
          <button className="btn primary">Primary</button>
          <button className="btn secondary">Secondary</button>
          <button className="btn disabled">Disabled</button>
        </div>
        <CodeHighlight code={buttonContained} />
        <h4>Text Buttons</h4>
        <p>
          Text buttons are used for less pronounced interactions like on Cards
          and Modals
        </p>
        <div className="component-container">
          <button className="btn text">Default</button>
          <button className="btn text primary">Primary</button>
          <button className="btn text secondary">Secondary</button>
          <button className="btn text disabled">Disabled</button>
        </div>
        <CodeHighlight code={buttonText} language="js" />
        <h4>Outlined Buttons</h4>
        <p>
          Outlined buttons medium emphasis button, important than text buttons
          but secondary to contained buttons
        </p>
        <div className="component-container">
          <button className="btn outline">Default</button>
          <button className="btn outline primary">Primary</button>
          <button className="btn outline secondary">Secondary</button>
          <button className="btn outline disabled">Disabled</button>
        </div>
        <CodeHighlight code={buttonOutlined} />
        <h4>Call To Action Buttons</h4>
        <p>
          A Call To Action button is a high emphasis button, used to lure
          customers in subscribing to news letter or placing an order.
        </p>
        <div className="component-container">
          <button className="cta">+</button>
          <button className="cta text">button</button>
        </div>
        <CodeHighlight code={buttonCTA} />
        <CodeHighlight code={buttonCTACSS} />
        <h4>Button Sizes</h4>
        <p>
          Two additional button sizes are provided by Emeald, small and large
          other than normal button size.
        </p>
        <div className="component-container">
          <button className="btn small">Small Button</button>
          <button className="btn large">Large Button</button>
        </div>
        <CodeHighlight code={buttonSize} />
      </div>
      <div class="row-pills">
        <span class="anchor" id="input"></span>
        <h3>Input</h3>
        <p>Input are intergal to taking data from user.</p>
        <h4>Input without label</h4>
        <div className="component-container">
          <input className="input" placeholder="Type Here" type="text" />
        </div>
        <CodeHighlight code={input} />
        <h4>Input with label</h4>
        <div className="component-container">
          <div class="input-group">
            <span class="group-label">Name</span>
            <input class="input-group input" placeholder="Type Here" />
          </div>
        </div>
        <CodeHighlight code={inputWithLabel} />
      </div>
      <div class="row-pills">
        <span class="anchor" id="badge"></span>
        <h3>Badge</h3>
        <p>
          Badges are the count you get over icons and buttons that specify if
          you got anything new inside what that icon and button redirects to and
          they can also show if a user is online or offline
        </p>
        <div className="component-container">
          <a className="badge-container">
            <img
              src="https://emerald-css.netlify.app/assets/MdiCart.svg"
              alt=""
            ></img>
            <span className="badge-container-text">cart</span>
            <span className="badge">4</span>
          </a>
          <div class="badge-container">
            <img
              class="avatar medium"
              src="https://semantic-ui.com/images/avatar/large/steve.jpg"
              alt=""
            />
            <span class="badge online"></span>
          </div>
          <div class="badge-container">
            <img
              class="avatar medium"
              src="https://semantic-ui.com/images/avatar/large/steve.jpg"
              alt=""
            />
            <span class="badge offline"></span>
          </div>
        </div>
        <CodeHighlight code={badge} />
        <CodeHighlight code={badgeCSS} />
      </div>
      <div className="row-pills">
        <span class="anchor" id="card"></span>
        <h3>Card</h3>
        <p>
          Cards display data for a single entity, sometimes, it acts as entry
          point to more complex logic.
        </p>
        <h4>Simple Card</h4>
        <p>Simple cards does not contain any image, and only texts</p>
        <div className="component-container">
          <div className="card">
            <div className="card-heading">
              <h2>This is card heading</h2>
              <span className="card-sub-heading">This sub heading</span>
            </div>

            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                harum dolor obcaecati repellat, aperiam ex enim suscipit vero
                consequuntur autem modi officiis nesciunt repellendus adipisci
                aspernatur molestiae tempora labore. Laudantium.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn primary text">Go Somewhere</button>
            </div>
          </div>
        </div>
        <CodeHighlight code={cardSimple} />

        <h4>Card with media</h4>
        <p>
          Card with media is used for more emphasis. The badge shows, if
          anything is hapening inside the complex UI
        </p>
        <div className="component-container">
          <div className="card">
            <div className="card-img">
              <img
                src="https://cesarkaikarate.com/wp-content/uploads/2017/04/default-image.jpg"
                alt=""
              />
              <span className="badge">4</span>
            </div>
            <div className="card-heading">
              <h2>This is card with image and badge</h2>
              <span className="card-sub-heading">This sub heading</span>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat voluptatibus odit nobis recusandae repudiandae quos
                excepturi voluptatum officiis est unde!
              </p>
            </div>
            <div className="card-footer">
              <button className="btn primary text">Go Somewhere</button>
            </div>
          </div>
        </div>
        <CodeHighlight code={cardWithMedia} />
        <CodeHighlight code={badgeForCardWithMedia} />
      </div>
      <div className="row-pills">
        <span class="anchor" id="modal"></span>
        <h3>Modal</h3>
        <p>
          A Modal is a type of window that opens in front of everything on page
          to display important content or take input from user.
        </p>
        <h4>Simple Modal</h4>
        <p>A simple modal opens to show important information to the user</p>
        <div className="component-container">
          <div className="modal">
            <h2 className="modal-heading">This is Modal Heading</h2>
            <div className="modal-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                blanditiis quia sint laudantium adipisci eaque. Voluptate cumque
                sint ex debitis?
              </p>
            </div>
            <div className="modal-buttons">
              <button className="btn primary text">Agree</button>
              <button className="btn primary text">Disagree</button>
            </div>
          </div>
        </div>
        <CodeHighlight code={modalSimple} />
      </div>
      <div className="row-pills">
      <span class="anchor" id="list"></span>
        <h3>List</h3>
        <p>
          List are used for displaying a content in list for example a
          notification list, or side bar navigation list.
        </p>
        <div className="component-container">
          <ul class="stacked-list">
            <li class="list-item">
              <div class="list-logo">
                <svg width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6l2 2m-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <a href="">Notification Preferences</a>
            </li>
            <li class="list-item">
              <div class="list-logo">
                <svg width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    d="M4 8l8 5l8-5l-8-5l-8 5m18 0v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>

              <a href="">Send Mail</a>
            </li>
            <li class="list-item">
              <div class="list-logo">
                <svg width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    d="M17.25 13a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M22 12c0 5.5-4.5 10-10 10H2V12C2 6.5 6.5 2 12 2s10 4.5 10 10M7 18c1.41 1.23 3 2 5 2c4.41 0 8-3.59 8-8c0-.79-.12-1.55-.33-2.26c-.72.17-1.47.26-2.25.26c-2 0-3.85-.6-5.42-1.61c0 0-1.46 5.37-3.97 4.61c-.66-.2-1.03.31-1.03 1"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <a href="">Profile</a>
            </li>
            <li class="list-item">
              <div class="list-logo">
                <svg width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    d="M8 9a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m4 8H4v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1m8-9h-6v2h6V8m0 4h-6v2h6v-2m0 4h-6v2h6v-2m2-12h-8v2h8v14H2V6h8V4H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-9 2h-2V2h2v4z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <a href="">Manage Address</a>
            </li>
            <li class="list-item">
              <div class="list-logo">
                <svg width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    d="M16.56 5.44l-1.45 1.45A5.969 5.969 0 0 1 18 12a6 6 0 0 1-6 6a6 6 0 0 1-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 5.44A7.961 7.961 0 0 0 4 12a8 8 0 0 0 8 8a8 8 0 0 0 8-8c0-2.72-1.36-5.12-3.44-6.56M13 3h-2v10h2"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <a href="">Logout</a>
            </li>
          </ul>
        </div>
        <CodeHighlight code={stackedList}/>
      </div>
    </div>
  );
};
