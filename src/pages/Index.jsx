import React, { useState } from "react";
import { Container, Input, Button, VStack, Box } from "@chakra-ui/react";

const Index = () => {
  const [url, setUrl] = useState("");
  const [iframeUrl, setIframeUrl] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIframeUrl(url);
    setIsEditing(true);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" display="flex" justifyContent="center" alignItems="center">
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            size="lg"
            width="70%"
            marginRight="4"
          />
          <Button onClick={handleEditClick} size="lg" colorScheme="teal">
            EDIT
          </Button>
        </Box>
        {isEditing && (
          <Box width="100%" height="80vh" marginTop="4">
            <iframe
              src={iframeUrl}
              width="100%"
              height="100%"
              onLoad={(e) => {
                const iframe = e.target.contentWindow;
                const script = iframe.document.createElement("script");
                script.src = "http://localhost:3000/script.js";
                iframe.document.head.appendChild(script);
              }}
            />
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;