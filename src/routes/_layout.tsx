import { Flex, IconButton } from "@chakra-ui/react"
import { MenuFoldOutlined,MenuUnfoldOutlined } from "@ant-design/icons"
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"
import { useState } from "react"

import Navbar from "@/components/Common/Navbar"
import Sidebar from "@/components/Common/Sidebar"
import { isLoggedIn } from "@/hooks/useAuth"

export const Route = createFileRoute("/_layout")({
  component: Layout,
  beforeLoad: async () => {
    if (!isLoggedIn()) {
      throw redirect({
        to: "/login",
      })
    }
  },
})

function Layout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <Flex direction="column" h="100vh">
      <Navbar />
      <Flex flex="1" overflow="hidden">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <Flex flex="1" direction="column" overflowY="auto" position="relative">
          <IconButton
            aria-label="Toggle Sidebar"
            onClick={toggleSidebar}
            position="absolute"
            top={0}
            left={0}
            zIndex="sticky"
            size="xs"
            display={{ base: "none", md: "flex" }}
            bg="blue.200"
          >
            {isSidebarCollapsed ? <MenuFoldOutlined/> : <MenuUnfoldOutlined />}
          </IconButton>
          <Flex flex="1" p={4}>
            <Outlet />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Layout