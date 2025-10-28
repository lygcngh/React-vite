"use client"
import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from "react"

const languages = createListCollection({
  items: [
    { label: "EN", value: "en" },
    { label: "中文", value: "zh" },
  ],
})

function ChooseLanguage() {
  const { i18n } = useTranslation()
  const [value, setValue] = useState<string[]>(["en"])

  useEffect(() => {
    // 初始化语言
    i18n.changeLanguage("en")
  }, [])

  const handleLanguageChange = (e: { value: string[] }) => {
    const selectedLanguage = e.value[0]
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage)
      setValue(e.value)
    }
  }

  return (
    <Select.Root 
      collection={languages} 
      size="sm" 
      width="70px"
      value={value}
      defaultValue={["en"]}
      onValueChange={handleLanguageChange}
      bg="purple.200"
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger color="white">
          <Select.ValueText color="white" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator color="white" />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {languages.items.map((language) => (
              <Select.Item item={language} key={language.value}>
                {language.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

export default ChooseLanguage