import React from "react";
import { Box, Heading, Text, VStack, Image, FlatList } from "native-base";
import AppScreen from "../component/AppScreen";
import InsuranceCard from "../component/InsuranceCard";
import insuranceData from "../data/data";

const HomeScreen = () => {
  return (
    <AppScreen>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        data={insuranceData}
        ListHeaderComponent={() => <HeaderComponent />}
        ListFooterComponent={() => <FooterComponent />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <InsuranceCard data={item} />}
      />
    </AppScreen>
  );
};

export default HomeScreen;

const HeaderComponent = () => {
  return (
    <VStack m="5">
      <Box mt="5">
        <VStack maxW="100%" mx="10px" alignItems="center">
          <Heading w="100%" textAlign="center" fontSize="2xl" my="1">
            Smart way to buy insurance.
          </Heading>
          <Text w="100%" textAlign="center" fontSize="md" color="muted.400">
            Compare insurance policies, rate, detail, & buy instantly in less
            than five minutes!
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
};
const FooterComponent = () => {
  return (
    <VStack mt="5" maxW="100%">
      <Box my="2" w="100%" alignItems="center">
        <Heading w="100%" textAlign="center" fontSize="2xl" my="1">
          How does it work?
        </Heading>
        <Text w="80%" textAlign="center" fontSize="md" color="muted.400">
          Complete 3 simple steps to find the best insurance plan for your or
          your family!
        </Text>
      </Box>
      <Box>
        <Box my="2" w="100%" alignItems="center">
          <Image
            source={require("./../assets/Group1907.png")}
            size="2xl"
            resizeMode="contain"
            alt="image"
          />
          <Heading textAlign="center" fontSize="2xl" my="1">
            Enter details
          </Heading>
          <Text w="80%" textAlign="center" color="muted.500" fontSize="md">
            Answer a few simple question, so the program could generate a custom
            quote for you.
          </Text>
        </Box>
        <Box my="2" w="100%" alignItems="center">
          <Image
            source={require("./../assets/Group2005.png")}
            size="2xl"
            resizeMode="contain"
            alt="image"
          />
          <Heading textAlign="center" fontSize="2xl" my="1">
            Compare
          </Heading>
          <Text textAlign="center" color="muted.500" fontSize="md" w="80%">
            View the quotes, compare them and choose the best deal.
          </Text>
        </Box>
        <Box my="2" w="100%" alignItems="center">
          <Image
            source={require("./../assets/Group2751.png")}
            size="2xl"
            resizeMode="contain"
            alt="image"
          />
          <Heading textAlign="center" fontSize="2xl" my="1">
            Buy Online
          </Heading>
          <Text textAlign="center" color="muted.500" fontSize="md" w="80%">
            Get instant insurance from the company of your choice through us.
          </Text>
        </Box>
        <Box my="2">
          <Box mt="3" mb="5" w="100%" alignItems="center">
            <Heading textAlign="center" fontSize="2xl" my="3">
              1000+ people believed in us
            </Heading>
            <Text textAlign="center" color="muted.500" fontSize="md" w="80%">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae quo obcaecati in earum suscipit? Similique odio
              officia deserunt exercitationem fugit, voluptate aperiam
              consequatur illum provident nostrum, explicabo at quaerat! Quas.
            </Text>
          </Box>
          <Image
            source={require("./../assets/reviewBanner.png")}
            w="100%"
            h="160"
            resizeMode="contain"
            alt="image"
          />
        </Box>
      </Box>
    </VStack>
  );
};
