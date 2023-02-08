import { Box } from "@mui/material";
import { FC } from "react";
import SocialsList from "./SocialsLink";

const Socials: FC = () => {
  return(
    <Box sx={{
      display: "flex",
      alignItems: "center",
      gap: "15px",
      margin: {xs: "30px auto 0 auto", lg: "30px 0 0"},
    }}>
      <SocialsList href="https://t.me/SportlyApp" img="/socials/telegram.svg" alt="telegram" />
      <SocialsList href="#" img="/socials/whatsapp.svg" alt="whatsapp" />
    </Box>
  );
};

export default Socials;