import { Box, Flex, Icon, Text } from "@chakra-ui/react"
import { useQueryClient } from "@tanstack/react-query"
import { Link as RouterLink } from "@tanstack/react-router"
import { FiBriefcase, FiHome, FiLogOut, FiMessageSquare, FiSettings, FiUsers } from "react-icons/fi"
import type { IconType } from "react-icons/lib"

import type { UserPublic } from "@/client"

const items = [
  { icon: FiHome, title: "Dashboard", path: "/" },
  { icon: FiBriefcase, title: "Items", path: "/items" },
  { icon: FiMessageSquare, title: "AI Chat", path: "/aichat" },
  { icon: FiSettings, title: "User Settings", path: "/settings" },
]

interface SidebarItemsProps {
  onClose?: () => void
  isCollapsed?: boolean
}

interface Item {
  icon: IconType
  title: string
  path: string
}

const SidebarItems = ({ onClose, isCollapsed = false }: SidebarItemsProps) => {
  const queryClient = useQueryClient()
  const currentUser = queryClient.getQueryData<UserPublic>(["currentUser"])

  const finalItems: Item[] = currentUser?.is_superuser
    ? [...items, { icon: FiUsers, title: "Admin", path: "/admin" }]
    : items

  const listItems = finalItems.map(({ icon, title, path }) => (
    <RouterLink key={title} to={path} onClick={onClose}>
      <Flex
        gap={isCollapsed ? 0 : 4}
        px={isCollapsed ? 2 : 4}
        py={2}
        _hover={{
          background: "gray.subtle",
        }}
        alignItems="center"
        fontSize="sm"
        title={isCollapsed ? title : undefined}
      >
        <Icon as={icon} alignSelf="center" boxSize={isCollapsed ? 6 : 5} />
        {!isCollapsed && <Text ml={5}>{title}</Text>}
      </Flex>
    </RouterLink>
  ))

  return (
    <>
      {/* {!isCollapsed && (
        <Text fontSize="xs" px={4} py={2} fontWeight="bold">
          Menu
        </Text>
      )} */}
      <Box>{listItems}</Box>
      
      {/* Show logout button when collapsed */}
      {/* {isCollapsed && currentUser?.email && (
        <Flex
          as="button"
          onClick={() => {
            // We would need to pass logout function if we want this to work
          }}
          alignItems="center"
          justifyContent="center"
          p={1}
          title={`Logged in as: ${currentUser.email}`}
        >
          <Icon as={FiLogOut} boxSize={6} />
        </Flex>
      )} */}
    </>
  )
}

export default SidebarItems