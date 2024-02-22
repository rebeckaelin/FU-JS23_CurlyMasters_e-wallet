import "./Header.scss";

type Props = {
  title: string;
  subtitle: string;
};

const Header = (props: Props) => {
  return (
    <div>
      <h1 className="headTitle">{props.title}</h1>
      <h4 className="headSubtitle">{props.subtitle}</h4>
    </div>
  );
};

export default Header;
