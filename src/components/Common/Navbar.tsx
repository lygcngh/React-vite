import { Flex, Image, useBreakpointValue } from "@chakra-ui/react"
import { Link } from "@tanstack/react-router"

// import Logo from "/assets/images/fastapi-logo.svg"
import EpamLogo from "/assets/images/epam-simple-logo.svg"
import UserMenu from "./UserMenu"
import ChooseLanguage from "./ChooseLanguage"

function Navbar() {
  const display = useBreakpointValue({ base: "none", md: "flex" })

  return (
    <Flex
      display={display}
      justify="space-between"
      position="sticky"
      color="white"
      align="center"
      bg="bg.muted"
      w="100%"
      top={0}
      p={1}
    >
      <Link to="/">
        <Image src={EpamLogo} alt="Logo" maxW="3xs" p={2} />
      </Link>
      <Flex gap={2} alignItems="center">
        <ChooseLanguage />
        <UserMenu />
      </Flex>
    </Flex>
  )
}

export default Navbar