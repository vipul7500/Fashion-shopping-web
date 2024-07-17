import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Logout } from "../redux/apiCalls";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    Logout(dispatch);
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>English</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
              }}
            >
              Shopping.
            </Logo>
          </Link>
        </Center>

        <Right>
          {user ? (
            <>
              <MenuItem>Hi,{user.username}</MenuItem>
              <MenuItem onClick={handleClick}>Logout</MenuItem>
            </>
          ) : (
            <>
              <Link
                to="/register"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link
                to="/login"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          )}

          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={user ? quantity : ""} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  ${"" /* background-color: black; */}
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 20px;
  cursor: pointer;

  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  ${"" /* padding: 12px 12px; */}
  border: none;
  ${mobile({ width: "44px" })}
`;
const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-underline: none;
  ${mobile({ fontSize: "24px" })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
export default Navbar;
