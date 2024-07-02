import "./login.css";

export const Login = ({ className, onClose,...props }) => {
  return (
    <div className={"login " + className}>
        <div classname="transparent-container">
        <div className="frame-1437252858">
          <div className="rectangle-91911"></div>

          <div className="welcome">Welcome </div>
          <div className="sign-in-or-sign-up-to-continue">
            Sign in or sign up to continue{" "}
          </div>

          <button className="social-button">
            <img className="google" src="../build/static/media/google0.svg" />
            <div className="continue-with-google">Continue with Google </div>
          </button>

          <button className="social-button2">
            <img className="facebook" src="../build/static/media/facebook0.svg" />
            <div className="continue-with-facebook">
              Continue with Facebook{" "}
            </div>
          </button>

          <div className="social-button3">
          <input type="text" className="email-example-com" placeholder="austin@example.com"></input>
          </div>

          <div className="line-583"></div>
          <div className="continue-with-email">Continue with Email </div>
          
          <button className="close-sign-up" onClick={onClose}>
          <img className="x-close" src="../build/static/media/x-close0.svg" alt="Close" />
          </button>
        </div>
      </div>
      </div>
  );
};
