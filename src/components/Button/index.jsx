import { Container } from "./styles";

export function Button({ title, icon: Icon, isDelete, ...rest }) {
  return (
    <Container
      type="button"
      isDelete={isDelete}
      {...rest}
      className={isDelete ? "button-save" : "button-delete"}
    >
      {title}
      {Icon && <Icon size={20} />}
    </Container>
  );
}
