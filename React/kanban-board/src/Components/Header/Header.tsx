import { HeaderBlock, HeaderTitle } from "./Header.styled";
import { Profile } from "./Profile/Profile";

export const Header = () => {
  return (
    <HeaderBlock>
      <HeaderTitle>Awesome Kanban Board</HeaderTitle>
      <Profile />
    </HeaderBlock>
  );
};
