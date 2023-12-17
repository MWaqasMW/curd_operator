"use client";

import React, { useEffect, useState, useRef } from "react";
import { ToastContainer } from "react-toastify";
import { getDataFromStorage } from "../utlis/localstorage.js";
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
import { useMutation } from "react-query";
import * as Yup from "yup";
import { useSignup } from "../api/useApi.js";
import { getCookie } from "../utlis/cookies.js";

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

const Signup = () => {
  const signupMutation = useSignup();

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
    name: Yup.string()
      .required("User Name is required")
      .min(3, "User Name must be 3 charcter"),
    email: Yup.string()
      .email("Invalid email")
      .matches(/^[a-zA-Z0-9._-]+@gmail\.com$/, "Must be a Gmail address")
      .required("Email is required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Your passwords didn't match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const { confirmPassword, ...others } = values;
      try {
        await signupMutation.mutateAsync(others);
      } catch (err) {
        console.log(err);
      }
    },
  });
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    formik;
  const { name, email, password, confirmPassword } = values;
  useEffect(() => {
    setisDisabled(
      !email.trim() ||
        !password.trim() ||
        !confirmPassword.trim() ||
        !name.trim()
    );
  }, [email, password, confirmPassword, name]);
  return (
    <Container component="main" maxWidth="xs">
      <ToastContainer />
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
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="User Name"
            name="name"
            autoComplete="UserName"
            autoFocus
            onChange={handleChange}
            onBlur={handleBlur}
            value={name}
          />
          <div className="text-danger d-flex">
            {touched.name && errors.name && (
              <div className="justify-content-start text-red-500 text-sm">
                {errors.name}
              </div>
            )}
          </div>

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
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            autoComplete="current-password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={confirmPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleToggleConfirmPassword}>
                    {showConfirmPassword ? (
                      <AiFillEyeInvisible />
                    ) : (
                      <AiFillEye />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <div className="text-danger d-flex">
            {touched.confirmPassword && errors.confirmPassword && (
              <div className="justify-content-start text-red-500 text-sm">
                {errors.confirmPassword}
              </div>
            )}
          </div>

          <div className="w-804 bg-blue-500 justify-center flex rounded-md p-2 mt-2 hover:opacity-95 cursor-pointer">
            <button
              disabled={isDisabled || signupMutation.isLoading}
              type="submit"
              className="text-white font-bold cursor-pointer"
            >
              {signupMutation.isLoading ? "Signing up..." : "Signup"}
            </button>
          </div>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Login"}
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
