import Head from 'next/head';
import WroksGallery from '../../components/works-gallery/works-gallery.component';

import './index.styles.scss';

const Works = () => (
  <section className="works-page">
    <Head>
      <title>Works</title>
    </Head>
    <h1 className="title">This is my works</h1>
    <WroksGallery />
  </section>
);

export default Works;
