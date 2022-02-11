import { useNavigation } from "@react-navigation/native";
import { Box, Button, Heading, Image, Text } from "native-base";
import React from "react";

const InsuranceCard = ({ data }) => {
  const navigation = useNavigation();
  console.log({ data });
  return (
    <Button bg={data.color} m="2" w="45%" borderRadius="10px"
    alignItems="center" justifyContent="center"
    onPress={() => navigation.navigate("SubScreen", { data })}
    >
    
      <Box
      w="100%"
      p="2" alignItems="center">
        <Image
          source={data.image}
          size="xl"
          resizeMode="contain"
          alt="image"
        />
        <Heading
        textAlign="center"
        fontSize="lg" bold>
          {data.title}
        </Heading>
        <Text
          alignItems="center"
          textAlign="center"
          fontSize="sm"
          color="muted.500"
          my="1"
        >
          {data.description}
        </Text>
      </Box>
    </Button>
  );
};

export default InsuranceCard;
