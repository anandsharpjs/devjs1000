import React, { useState } from "react";
import { Input, Stack, Button } from "@chakra-ui/react";
import { MdLogin } from "react-icons/md";

export default () => {
  //states declaration
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  //functins to handle the state of the form
  const handleLogin = () => {
    console.log("Login");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div>
        <div className="flex flex-wrap gap-2">
          <Stack spacing={3}>
            <Input
              name="username"
              placeholder="UserName..."
              type="text"
              onChange={handleChange}
              value={form.username}
              size="lg"
            />
            <Input
              name="password"
              placeholder="Password..."
              type="password"
              onChange={handleChange}
              value={form.password}
              size="lg"
            />
            <Button
              onClick={handleLogin}
              leftIcon={<MdLogin />}
              colorScheme="teal"
              variant="solid"
            >
              Login
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};
