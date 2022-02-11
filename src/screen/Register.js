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
const Register = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  const [confirmShow, setConfirmShow] = React.useState(false);
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
      
        <VStack m="5"
         flex="1" justifyContent="center" w="100%" maxW="90%"
        >
         <Box mt="2">
         <Heading my="3">Register</Heading>
         <Box mb="20px">
              
              <Text fontSize="md" color="muted.500" my="1" bold>
             Full Name
              </Text>
              <Input placeholder="John Doe" />
            </Box>
          <Box mb="20px">

            <Text fontSize="md" color="muted.500" my="1" bold>
              Email Address
            </Text>
            <Input placeholder="Email" />
          </Box>
          <Box mb="20px">
            <Text fontSize="md" color="muted.500" my="1" bold>
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
          <Box mb="20px">
            <Text fontSize="md" color="muted.500" my="1" bold>
             Confirm Password
            </Text>
            <Box alignItems="center">
              <Input
                size="md"
                type={show ? "text" : "password"}
                InputRightElement={
                  <Pressable
                    justifyContent="center"
                    w="1/6"
                    onPress={() => setConfirmShow((prevState) => !prevState)}
                  >
                    {confirmShow ? (
                      <Entypo name="eye-with-line" size={24} color="black" />
                    ) : (
                      <Entypo name="eye" size={24} color="black" />
                    )}
                  </Pressable>
                }
                placeholder="Retype Password"
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
                    onPress={() =>
                      navigation.navigate("HomeScreen")
                    }
                >
                    Create Account
                </Button>
               
                <Box
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
                >
                    <Text fontSize="md" color="gray.700" my="1" >
                        Already have an account?</Text> <Pressable

                    
                        onPress={() => 
                        navigation.navigate("SignIn")
                        }>
                              <Text
                               color="blue.800"
                              > Login now.</Text>
                           </Pressable>
                   
                </Box>
            </Box>
            </Box>
        </VStack>
      </AppScreen>
    </KeyboardAvoidingView>
  );
};

export default Register;
