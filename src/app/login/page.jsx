"use client";

import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  InputAdornment,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useLogin } from "../api/useApi";
import { getCookie } from "../utlis/cookies";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Signup = () => {

  const loginMutation = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDisabled, setisDisabled] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .matches(/^[a-zA-Z0-9._-]+@gmail\.com$/, "Must be a Gmail address")
      .required("Email is required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values);
      try {
        await loginMutation.mutateAsync(values);
      } catch (err) {
        console.log(err);
      }
    },
  });
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    formik;
  const { email, password } = values;
  useEffect(() => {
    setisDisabled(!email.trim() || !password.trim());
  }, [email, password]);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            onBlur={handleBlur}
            value={email}
          />
          <div className="text-danger d-flex">
            {touched.email && errors.email && (
              <div className="justify-content-start text-red-500 text-sm">
                {errors.email}
              </div>
            )}
          </div>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword}>
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <div className="text-danger d-flex">
            {touched.password && errors.password && (
              <div className="justify-content-start text-red-500 text-sm">
                {errors.password}
              </div>
            )}
          </div>

          <div className="w-804 bg-blue-500 justify-center flex rounded-md p-2 mt-2 hover:opacity-95">
            <button
              disabled={isDisabled || loginMutation.isLoading}
              type="submit"
              className="text-white font-bold"
            >
              {loginMutation.isLoading ? "Loding..." : "Login"}
            </button>
          </div>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Do'nt have an account? Signup"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Signup;
