import { useState } from "react";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import "./style.css";
export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon style={{ color: "var(--white)" }} />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="drawer-div">
          <a href="/" className="link">
            <p className="text">Home</p>
          </a>
          <a href="/dashboard" className="link">
            <p className="text">Dashboard</p>
          </a>
          <a href="/gallery" className="link">
            <p className="text">Gallery</p>
          </a>
          {/* <a href="/footer" className="link">
            <p className="text">Footer</p>
          </a> */}
        </div>
      </Drawer>
    </div>
  );
}
