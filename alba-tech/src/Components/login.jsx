import React, { useState } from "react";
import axios from "axios";
import {message} from 'antd'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
      axios
        .post("https://reqres.in/api/login", formData)
        .then((response) => {
          // Tangani respons dari API
          console.log(response.data);
          localStorage.setItem('token', response.data.token)
          messageApi
          .open({
            type: 'loading',
            content: 'Loading...',
            duration: 2,
          })
          .then(() => message.success(`Login Success, Your Token ${response.data.token}`, 2.5))
          .then(() => navigate('/'))
          .then(() => messageApi.destroy)    
        })
        .catch((error) => {
          // Tangani kesalahan
          console.error(error.response.data, "console error !!!!!!!!!!!!!!!")
          messageApi
          .open({
            type: 'loading',
            content: 'Loading...',
            duration: 2,
          })
          .then(() => message.error(error.response.data.error, 2.5)) 
        });

  };
  return (
    <>
    {contextHolder}
      <div className="w-full mx-auto flex justify-center h-screen">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-full">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="assets/alba-logo.svg"
              alt="Albatech"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit} method="POST">
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FFCE07] sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-[#FFCE07] hover:text-yellow-500"
                    >
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    onChange={handleChange}
                    value={formData.password}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FFCE07] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#FFCE07] px-3 py-1.5 text-sm leading-6 text-black font-bold shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 transition duration-500 ease-in-out"
                >
                  Sign in
                </button>
              </div>
            </form>

            {/* <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a
                href="#"
                className="font-semibold leading-6 text-[#FFCE07] hover:text-yellow-500"
              >
                Start a 14 day free trial
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
