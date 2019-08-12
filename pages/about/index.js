import Head from 'next/head';

import './index.styles.scss';

const About = () => (
  <section className="about-page">
    <Head>
      <title>About NextJS</title>
    </Head>
    <h1>About NextJS</h1>
    <p>
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa earum
        similique pariatur. Ducimus, earum tenetur. Consectetur, hic placeat
        rerum facilis doloremque aut alias ab provident neque voluptatem, et
        deleniti molestias.
      </span>
      <span>
        Ab ea beatae suscipit in accusantium non dolore. Eaque voluptatibus a
        reprehenderit provident vitae neque, veniam nam tempora omnis ratione
        quidem dolores reiciendis molestias dolore minus culpa explicabo
        molestiae et.
      </span>
      <span>
        Repellendus temporibus omnis repudiandae, hic id, dicta illum et ratione
        pariatur fugiat rem laboriosam, reprehenderit aspernatur asperiores
        possimus labore quas! Eum pariatur sunt nulla dignissimos debitis
        reiciendis minima tenetur laudantium.
      </span>
    </p>
  </section>
);

export default About;
