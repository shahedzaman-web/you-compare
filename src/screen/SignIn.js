import React from "react";
import {
  Box,
  Heading,
  Input,
  KeyboardAvoidingView,
  Text,
  Button,
  VStack,
  Pressable,
} from "native-base";
import { Platform } from "react-native";
import AppScreen from "../component/AppScreen";
import { Entypo } from "@expo/vector-icons";
const SignIn = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  return (
    <KeyboardAvoidingView
      h={{
        base: "400px",
        lg: "auto",
      }}
      flex="1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <AppScreen>
        <VStack m="5">
          <Box mt="5">
            <Heading my="3">Login</Heading>
            <Box mb="20px">
              <Text fontSize="md" color="gray.700" my="1" bold>
                Email Address
              </Text>
              <Input placeholder="Email" />
            </Box>
            <Box mb="20px">
              <Text fontSize="md" color="gray.700" my="1" bold>
                Password
              </Text>
              <Box alignItems="center">
                <Input
                  size="md"
                  type={show ? "text" : "password"}
                  InputRightElement={
                    <Pressable
                      justifyContent="center"
                      w="1/6"
                      onPress={() => setShow((prevState) => !prevState)}
                    >
                      {show ? (
                        <Entypo name="eye-with-line" size={24} color="black" />
                      ) : (
                        <Entypo name="eye" size={24} color="black" />
                      )}
                    </Pressable>
                  }
                  placeholder="Password"
                />
              </Box>
            </Box>
            <Box alignItems="center" justifyContent="center">
              <Button
                w="100%"
                h="50px"
                mb="20px"
                bg="#1483d2"
                _text={{
                  color: "white",
                  bold: true,
                  textTransform: "uppercase",
                }}
                fontSize="md"
                fontWeight="bold"
                textAlign="center"
                textTransform="uppercase"
                onPress={() => navigation.navigate("HomeScreen")}
              >
                Login
              </Button>
              <Button
                w="100%"
                h="50px"
                mb="20px"
                bg="#fbbd05"
                _text={{
                  color: "white",
                  bold: true,
                  textTransform: "uppercase",
                }}
                fontSize="md"
                fontWeight="bold"
                textAlign="center"
                onPress={() => {}}
              >
                Google
              </Button>
              <Button
                w="100%"
                h="50px"
                mb="20px"
                bg="#0048ba"
                _text={{
                  color: "#fff",
                  bold: true,
                  textTransform: "uppercase",
                }}
                fontSize="md"
                fontWeight="bold"
                textAlign="center"
                onPress={() => {}}
              >
                Facebook
              </Button>
              <Box
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
              >
                <Text fontSize="md" color="gray.700" my="1">
                  New User?{" "}
                </Text>{" "}
                <Pressable
                
                onPress={() => navigation.navigate("Register")}>
                  <Text color="blue.800"> Create an account</Text>
                </Pressable>
              </Box>
            </Box>
          </Box>
        </VStack>
      </AppScreen>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
