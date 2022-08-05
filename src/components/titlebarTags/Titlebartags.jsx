import { Helmet } from "react-helmet";
const Titlebartags = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Titlebartags;
