import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const MenuItem = ({ href, title }) => {
  return (
    <Link href={href}>
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: "22px",
          color: {xs: "#16192C", lg: "#16192C99"},
          transition: "all 0.2s ease",
          "&:hover": {
            color: "#205EDC"
          }
        }}
      >
        {title}
      </Typography>
    </Link>
  );
};

export default MenuItem;