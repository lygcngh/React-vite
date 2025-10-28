import { Box } from "@chakra-ui/react"
import SidebarItems from "./SidebarItems"

interface SidebarProps {
  isCollapsed?: boolean
}

const Sidebar = ({ isCollapsed = false }: SidebarProps) => {

  return (
    <>
      {/* Desktop */}
      <Box
        display={{ base: "none", md: "flex" }}
        position="sticky"
        bg="bg.subtle"
        top={0}
        minW={isCollapsed ? "16" : "xs"}
        h="100vh"
        p={isCollapsed ? 2 : 4}
      >
        <Box w="100%">
          <SidebarItems isCollapsed={isCollapsed} />
        </Box>
      </Box>
    </>
  )
}

export default Sidebar