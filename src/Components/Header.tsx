import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Box maxW="full" bg="gray.200">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<i className="fa-solid fa-bars"></i>}
          variant="outline"
        />
        <MenuList>
          <NavLink to={"/"}>
            <MenuItem icon={<i className="fa-solid fa-users"></i>}>
              Students
            </MenuItem>
          </NavLink>
          <NavLink to={"/create"}>
            <MenuItem icon={<i className="fa-solid fa-plus"></i>}>
              create new Student
            </MenuItem>
          </NavLink>
          {/* <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
          New Window
        </MenuItem>
        <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
          Open Closed Tab
        </MenuItem>
        <MenuItem icon={<EditIcon />} command="⌘O">
          Open File...
        </MenuItem> */}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Header;
