import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  Box, Card, theme, FormControl,  CardBody , ChakraProvider} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { setLogin } from "../../state";
import { useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";

  import { 
   
    Heading, 
    Input, 
    Button, 
    
    Text} from '@chakra-ui/react'
  

const registerSchema = yup.object().shape({
  username: yup.string().required("required"),  
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  picture: yup.string().required("required"),
});



const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  username:"",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};



const Form = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const [isMobile] = useMediaQuery("(max-width: 768px)");



  const register = async (values, onSubmitProps) => {
    // this allows us to send form info with image
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(
      "http://localhost:3000/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      setPageType("login");
    }
    /* Yes, the values from the frontend will
     be transferred to the database using the /auth/register 
     endpoint. The /auth/register endpoint is a RESTful
      endpoint that is used to register new users.
       The endpoint takes a POST request with the form
        data as the body of the request. 
    The endpoint will then save the form data in the database.*/
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/home");
    }
  };
  
  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      })=>(
        <form onSubmit={handleSubmit}>
    <Box     >
      
      
      <ChakraProvider theme={theme} >
      <Card border={"none"} variant="unstyled" bgColor={"white"}  width={isMobile? "340px" : "50%"} float={"right"}  className='SignUpForm' mt={isMobile? "10rem" :"2rem"} >
        <CardBody>
        <Heading textAlign="left" size="xl" mb="6"  fontSize={"64px"}>
        {isLogin ? "Login": "Create Account"}
      </Heading>
        
        {isRegister && (
          <>
         

      
      <FormControl>
        
        <Input variant='flushed'
        width={"450px"}
        onBlur={handleBlur}
         onChange={handleChange}
         value={values.firstName}
         name="firstName"
         error={Boolean(touched.firstName)&& Boolean(errors.firstName)}
         helperText={touched.firstName && errors.firstName}
        placeholder="First Name" mb="6" mt={"10"}  _placeholder={{ opacity: 1, color : '#B3ACAC' }}/>
      </FormControl>
      
      <FormControl>
        
        <Input variant='flushed'
         width={"450px"}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name="lastName"
        error={Boolean(touched.lastName)&& Boolean(errors.lastName)}
        helperText={touched.lastName && errors.lastName}
        
        placeholder="Last Name" mb="6" _placeholder={{ opacity: 1, color : '#B3ACAC' }} />
      </FormControl>
 
          </>
        )}




      
    
      <FormControl>
        
        <Input variant='flushed' label="email"  type="Email" 
         width={"450px"}
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.email}
         name="email"
         error={Boolean(touched.email)&& Boolean(errors.email)}
         helperText={touched.email && errors.email}
         placeholder=" Email" mb="4" _placeholder={{ opacity: 1, color : '#B3ACAC' }} />
      </FormControl>
      
     
      <FormControl>
       
        <Input variant='flushed'
        onBlur={handleBlur}
        width={"450px"}
        onChange={handleChange}
        value={values.password}
        name="password"
        error={Boolean(touched.password)&& Boolean(errors.password)}
        helperText={touched.password && errors.password}
        
        
        type="password" placeholder="Password" mb="6" _placeholder={{ opacity: 1, color : '#B3ACAC' }}/>
      </FormControl>
      <Button width= "450px"
height= "66px"
borderRadius={"40rem"} bgColor="#DAF8F9"
                             type="submit"
                             letterSpacing={"6.24px"}
                            
                             lineHeight={"0%"}
                             fontSize={"24px"}
                             mt={"3rem"}
                           
                             >
                              <Link to="/Dashboard">
                              {isLogin ? "Login": "Create Account"} 
                              </Link>
                          
                         </Button>

      <Text
      onClick={()=>{
        setPageType(isLogin?"register":"login")
        resetForm();
      }}
      mt={"20px"}

      _hover={{ textColor: "#c961de" }}
      sx={{
        "&:hover > *": {
          color: "white",
        },
      }}
      
      marginTop={"3rem"}>
        {isLogin ? "Dont have an account ? SignUp here":
        "Already have an account ? Login here"
        }
      </Text>
      
      </CardBody>

      </Card>



      
      </ChakraProvider>
      
      
    </Box>

        </form>
      ) }
     </Formik>
    
    
  )
};

export default Form;