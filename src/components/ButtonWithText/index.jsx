import { Link } from "react-router-dom";
import { Container } from "./styles";

export function ButtonWithText({ icon: Icon, title, path, ...rest }) {
  return (
    <Container {...rest}>
      <Link to={path}>
        {Icon && <Icon size={20} />}
        {title}
      </Link>
    </Container>
  );
}
