import "./header.css";

import ai from '../../assets/ai.png'
import people from '../../assets/people.png'

const Header = () => {
  return (
    <div className="gpt3__header container section">
      <div className="gpt3__header-content">
        <h1 className="gradient__text gpt3__header-title">
          Let&apos;s Build Something <br /> amazing with GPT-3 <br /> OpenAI
        </h1>
        <p className="gpt3__header-description">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="gpt3__header-content-input">
          <input
            className="gpt3__header-content-input-input"
            type="text"
            placeholder="Enter your email"
          />
          <button className="gpt3__header-content-input-button">
            Get Started
          </button>
        </div>

        <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="" />
      </div>
    </div>
  );
};

export default Header;
