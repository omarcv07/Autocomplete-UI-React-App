import React from "react";
import { Box, Container } from "@chakra-ui/react";

const MainContainer = ({ children }) => (
    <Container>
        <Box marginTop="5rem">{children}</Box>
    </Container>
);

export default MainContainer;