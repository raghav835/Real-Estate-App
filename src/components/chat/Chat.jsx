import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://i.pinimg.com/564x/11/43/f9/1143f93cdf852e19233299dd4cf8c11c.jpg"
            alt=""
          />
          <span>Rohit Verma</span>
          <p>
            Hi! I've been exploring real estate options in Bangalore lately. Do
            you have any recommendations for good neighborhoods?
          </p>
        </div>
        <div className="message">
          <img
            src="https://i.pinimg.com/564x/c8/36/d0/c836d02a877208bafd370a03106c05f7.jpg"
            alt=""
          />
          <span>RealEstateExpert</span>
          <p>
            Hi Ravi! Absolutely, Bangalore has some fantastic neighborhoods. If
            you prefer a vibrant atmosphere, consider Koramangala or Indiranagar.
            For a more serene environment, Whitefield might be a good fit. What
            are your priorities in a neighborhood?
          </p>
        </div>
        <div className="message">
          <img
            src="https://i.pinimg.com/564x/11/43/f9/1143f93cdf852e19233299dd4cf8c11c.jpg"
            alt=""
          />
          <span>Rohit Verma</span>
          <p>
            Thanks for the info! I'm looking for a family-friendly area with
            good schools nearby. Proximity to tech parks is also crucial as I
            work in the IT sector. Any specific projects you'd recommend that
            align with these requirements?
          </p>
        </div>
        <div className="message">
          <img
            src="https://i.pinimg.com/564x/c8/36/d0/c836d02a877208bafd370a03106c05f7.jpg"
            alt=""
          />
          <span>RealEstateExpert</span>
          <p>
            Absolutely, Ravi! Considering your preferences, areas like Sarjapur,
            Hebbal, and Whitefield have excellent schools and are close to major
            tech parks. Some noteworthy projects include Harmony Homes in
            Sarjapur and GreenVista Residency in Whitefield. Would you prefer
            apartments or independent houses?
          </p>
        </div>
        <div className="message">
          <img
            src="https://i.pinimg.com/564x/11/43/f9/1143f93cdf852e19233299dd4cf8c11c.jpg"
            alt=""
          />
          <span>Rohit Verma</span>
          <p>
            That's great advice! I'm leaning towards apartments for convenience.
            Are there any upcoming developments or areas with potential for
            growth that I should keep an eye on?
          </p>
        </div>
        <div className="message">
          <img
            src="https://i.pinimg.com/564x/c8/36/d0/c836d02a877208bafd370a03106c05f7.jpg"
            alt=""
          />
          <span>RealEstateExpert</span>
          <p>
            Certainly, Ravi! Areas like Electronic City and Devanahalli are
            witnessing significant growth. They offer promising investment
            opportunities. Upcoming projects like TechPark Heights in Electronic
            City are gaining attention. It's an exciting time for real estate in
            Bangalore! Let me know if you'd like more details on specific
            projects.
          </p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://i.pinimg.com/564x/c8/36/d0/c836d02a877208bafd370a03106c05f7.jpg"
                alt=""
              />
              RealEstateExpert
            </div>
            <span className="close" onClick={() => setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>
                Sure thing, Ravi! For a 2BHK with good connectivity, I'd
                recommend projects like GreenVista Residency, TechPark Towers,
                and Harmony Homes. They meet your requirements and are in
                high-demand areas. Have you considered any specific locality?
              </p>
              <span>1 hour ago</span>
            </div>
            {/* ... (repeat for other messages) ... */}
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
