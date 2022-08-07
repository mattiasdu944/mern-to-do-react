import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const ContainerLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: #161616;
  color: #fff;
`

const Layout = () => {
  return (
    <ContainerLayout>
        <Sidebar/>
        <Outlet/>
    </ContainerLayout>
  )
}

export default Layout