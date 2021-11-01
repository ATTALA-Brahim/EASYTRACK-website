import React from 'react';
import { AuthContext } from "../../authContext/AuthContext";
import { useContext } from "react";
import { logOut } from "../../authContext/AuthActions";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  return (
    <div
      style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#1C1B1A" backgroundColor="#E0F0F1">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
           >
            GPS Track
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/my-devices">
              <CDBSidebarMenuItem icon="tablet-alt" className="disabled">My Devices &ensp; <i class="fa fa-caret-down"></i>
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/my-devices" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">Devices List</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/add-device" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus">Add Device</CDBSidebarMenuItem>
            </NavLink>






          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'cente' }}>
          <div
            style={{
              padding: '15px 5px',
            }}
          > <hr />
            <NavLink style={{
              textDecoration: 'none',
              color: 'inherit'
            }} exact to="/Settings" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user-cog">Profile Settings</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked" style={{
              textDecoration: 'none',
              color: 'inherit'}}>
            <CDBSidebarMenuItem icon="sign-out-alt" onClick={() => dispatch(logOut())}>LogOut</CDBSidebarMenuItem>
          </NavLink>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
