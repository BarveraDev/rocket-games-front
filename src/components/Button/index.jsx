import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Button({ title, icon: Icon, isDelete, path, ...rest }) {
  return (
    <Container
      type="button"
      isDelete={isDelete}
      {...rest}
      className={isDelete ? "button-save" : "button-delete"}
    >
      <Link to={path}>
        {title}
        {Icon && <Icon size={20} />}
      </Link>
    </Container>
  );
}
