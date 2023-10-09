import React from "react";
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { sections } from "../data/data";

interface SideDrawerProps {
  children: React.ReactNode;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ children }) => {
  const [state, setState] = React.useState<{ left: boolean }>({ left: false });

  const toggleDrawer = (anchor: string, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      (event as React.KeyboardEvent).key === "Tab" ||
      (event as React.KeyboardEvent).key === "Shift"
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: string) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{ width: 250 }}
    >
      <List>
        <ListItem>Categories</ListItem>
      </List>
      <Divider />
      <List>
        {sections.map((text, index) => (
          <ListItem button key={text.title}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <div key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>{children}</Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </div>
    </div>
  );
}

export default SideDrawer;
