import { Box, Container, Text } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import { useTranslation } from 'react-i18next'

import useAuth from "@/hooks/useAuth"

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
})

function Dashboard() {
  const { user: currentUser } = useAuth()
  const { t, i18n } = useTranslation();
  return (
    <Container maxW="full">
      <Box pt={12} m={4}>
        <Text fontSize="2xl" truncate maxW="sm">
          Hi, {currentUser?.full_name || currentUser?.email} 👋🏼
        </Text>
        <Text>Welcome back, nice to see you again!</Text>
        <h1>{t('hello')}</h1>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('zh')}>ZH</button>
      </Box>
    </Container>
  )
}
