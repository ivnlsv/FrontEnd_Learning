import { ProfileArrow, ProfileBlock, ProfileMenu } from "./Profile.styled";
import { useState } from "react";
import { IconProfile } from "../../../assets/icons/iconProfile";
import { IconArrow } from "../../../assets/icons/iconArrow";


export const Profile = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [rotate, setRotate] = useState("");

  return (
    <ProfileBlock onClick={() => setIsMenuVisible(!isMenuVisible)}>
      <IconProfile />
      <ProfileArrow rotate={rotate} onClick={() => setRotate(!rotate)}>
        <IconArrow />
      </ProfileArrow>
      {isMenuVisible && (
        <ProfileMenu>
          <div className="cube"></div>
          <div>Profile</div>
          <div>Log Out</div>
        </ProfileMenu>
      )}
    </ProfileBlock>
  );
};
