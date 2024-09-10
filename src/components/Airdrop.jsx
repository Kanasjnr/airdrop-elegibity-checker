import { Box, Button, Container, Input, Text, VStack } from "@chakra-ui/react";

import React, { useState } from "react";
import CryptoJS from "crypto-js";
import { EligableAddress } from "../db/Database";

const hash = (data) => CryptoJS.SHA256(data).toString();

const Airdrop = () => {
  const [address, setAddress] = useState("");
  const [isEligible, setIsEligible] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckEligibility = () => {
    setIsLoading(true);
    const leaf = hash(address);
    const isValid = EligableAddress.map(hash).includes(leaf);

    setIsEligible(isValid);
    setIsLoading(false);
  };

  return (
    <Container
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
     
    >
      <Box
        p={8}
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="xl"
     
        textAlign="center"
      >
        <VStack spacing={6}>
          <Text fontSize="3xl" fontWeight="bold" >
            Airdrop Eligibility Checker
          </Text>
          
            <Input
              placeholder="Enter Ethereum Address"
              size="lg"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            
            />
         
          <Button
            colorScheme="teal"
            size="lg"
            width="full"
            onClick={handleCheckEligibility}
            isLoading={isLoading}
            loadingText="Checking..."
           
          >
            Check Eligibility
          </Button>
          {isEligible !== null && (
            <Text
              mt={4}
              fontSize="lg"
              fontWeight="bold"
              color={isEligible ? "green.400" : "red.400"}
              transition="all 0.3s ease-in-out"
              opacity={isEligible !== null ? 1 : 0}
              transform={isEligible !== null ? "scale(1)" : "scale(0.8)"}
            >
              {isEligible
                ? "Eligible for Airdrop! "
                : "Not Eligible for Airdrop "}
            </Text>
          )}
         
        </VStack>
      </Box>
    </Container>
  );
};

export default Airdrop;
