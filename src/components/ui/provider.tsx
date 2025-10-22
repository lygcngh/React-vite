"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { I18nextProvider } from "react-i18next"
import i18n from "../../locales/i18n"
import { type PropsWithChildren } from "react"
import { system } from "../../theme"
import { ColorModeProvider } from "./color-mode"
import { Toaster } from "./toaster"

export function CustomProvider(props: PropsWithChildren) {
  return (
    <ChakraProvider value={system}>
      <I18nextProvider i18n={i18n}>
        <ColorModeProvider defaultTheme="light">
          {props.children}
        </ColorModeProvider>
      </I18nextProvider>
      <Toaster />
    </ChakraProvider>
  )
}