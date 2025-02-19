import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// eslint-disable-next-line react/prop-types
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO and Menu icon*/}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Rats Dashboard
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb={"25px"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  src="data:image/jpeg;base64,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"
                  alt="profile-user"
                  width={"100px"}
                  height={"100px"}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box textAlign={"center"}>
                <Typography
                  variant="h4"
                  color={colors.grey[100]}
                  fontWeight={"bold"}
                  sx={{
                    m: "10px 0 0 0",
                  }}
                >
                  Nara Ratanakkithya
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]}>
                  VP Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[400]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <Item
              title={"Manage Team"}
              to={"/team"}
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title={"Contacts Information"}
              to={"/contacts"}
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title={"Invoices Balance"}
              to={"/invoices"}
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[400]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            <Item
              title={"Profile Form"}
              to={"/form"}
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Calendar"}
              to={"/calendar"}
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"FAQ Page"}
              to={"/faq"}
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

            <Item
              title={"Bar Chart"}
              to={"/bar"}
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Pie Chart"}
              to={"/pie"}
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Line Chart"}
              to={"/line"}
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Geography Chart"}
              to={"/geography"}
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
