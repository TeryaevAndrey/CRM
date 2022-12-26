import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Title from "../Title";
import TestItem from "./TestItem";
import TestData from "./TestData";
import Form from "../Form/Form";

const Test = () => {
  return (
    <Box 
      id="test"
      variant="section"
      sx={{
        padding: "60px 0",
        borderRadius: "20px 20px 0 0",
        marginTop: "-20px",
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Title title="Тестовый запуск CRM" subTitle="включает в себя " left={true} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "67px",
            position: "relative",
            mt: {xs: "34px"},

            "::after": {
              content: '""',
              display: "block",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              height: "100%",
              width: "2px",
              backgroundColor: "#205EDC",
              zIndex: 1,
            },
          }}
        >
          {
            TestData.map((item, index) => {
              return(
                <TestItem key={index} num={item.num} title={item.title} />
              )
            })
          }
        </Box>
        <Form />
      </Container>
    </Box>
  );
};

export default Test;