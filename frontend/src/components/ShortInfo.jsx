import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../css/ShortInfo.css";
import CountDown from "./CountDown";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ShortInfo = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab label="Event" {...a11yProps(0)} />
            <Tab label="Press" {...a11yProps(1)} />
            <Tab label="Video" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} className="bg-white pt-6">
          <CountDown />
          <div className="text-container">
            <p className="text-[#959595] text-[13px]">
              <span className="letter text-[#d43c18]">A</span>ras nec imperdiet
              neque. Vestibulum sem libero, ultrices sit amet elit at, aliquet
              accumsan purus. Suspendisse interdum felis at odio molestie, at
              elementum nisi dictum. Donec ac ultricies nisl. Nam posuere
              accumsan diam, vel mattis nibh volutpat hendrerit. Curabitur
              ultrices auctor nisl, vel ultricies massa euismod sed. Etiam at
              imperdiet nulla.
            </p>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} className="bg-white pt-6">
          <h2 className="text-xl font-medium text-[#1e1e1e] pb-5">Jobs for disabled people</h2>
          <p className="text-[#959595] text-[13px] py-3">iaculis porta. Sed sapien tortor, aliquet a velit ut, lacinia molestie velit. Maecenas ornare consequat massa ullamcorper dapibus. Aliquam auctor, sapien sit amet accumsan facilisis, enim enim aliquet arcu, tincidunt pellentesque justo turpis id neque. Duis eleifend nunc sit amet mi dapibus ornare. Suspendisse vel libero sem.</p>
          <p className="text-[#959595] text-[13px] py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ipsum non mattis pharetra. Integer laoreet non felis sit amet pharetra. Integer mollis eget felis non finibus.</p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} className="bg-white pt-6">
        <iframe loading="lazy" src="https://player.vimeo.com/video/49053083" width="500" height="281" frameborder="0" title="Live Video from Rwanda on charity: water's 6th Birthday" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default ShortInfo;
