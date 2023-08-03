import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import { Container } from "@mui/system";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";

const UserInfoPage = () => {
  const { user } = useUser();
  const { handleLogin } = useUsers();

  console.log('userrr', user)

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;



  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div>
        <h1>User Profile</h1>
        <hr />
        <h2>
          Id: {user._id}
        </h2>
        <h2>
          IsBusiness: {user.isBusiness.toString()}
        </h2>
      </div>
    </Container>
  )
};

export default UserInfoPage;
