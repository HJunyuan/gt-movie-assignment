import { Helmet } from "react-helmet";

const APP_NAME = "Movie App Assignment";

function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{`${title} | ${APP_NAME}`}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export { SEO };
