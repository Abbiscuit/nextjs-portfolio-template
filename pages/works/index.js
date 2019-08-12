import './index.styles.scss';

const Works = () => (
  <section className="works-page">
    <h1 className="title">This is my works</h1>
    <div className="works-gallery">
      <div className="work-item">
        <h2>Adoarble Avatar</h2>
        <img src="/static/bgImg.jpeg" alt="car" />
        <p>React App</p>
      </div>
      <div className="work-item">
        <h2>Adoarble Avatar</h2>
        <img
          src="/static/bgImg2.jpeg"
          alt="woman looking at herself with a hand mirror"
        />
        <p>React App</p>
      </div>
      <div className="work-item">
        <h2>Adoarble Avatar</h2>
        <img src="/static/bgImg3.jpeg" alt="camera" />
        <p>React App</p>
      </div>
    </div>
  </section>
);

export default Works;
