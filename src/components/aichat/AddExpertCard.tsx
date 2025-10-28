import {
  Flex,
  Text,
  Card,
  For, Image,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
import { useQuery } from "@tanstack/react-query";
import { AIChatExpertService } from "@/client/aichat/aichat";
import { Expert } from "./aichatentry";
import epamlogo from "/assets/images/epam-simple-logo.svg"
import { FiArrowLeft, FiSave } from "react-icons/fi";
import { useState } from "react";

interface AddExpertCardProps {
  onBack: () => void;
  onSave: (expert: Expert) => void;
  existingExperts?: Expert[]; // 左侧已存在的专家列表，用于反选
}

export default function AddExpertCard({ onBack, onSave, existingExperts = [] }: AddExpertCardProps) {
  // 状态管理：选中的专家ID列表
  const [selectedExpertIds, setSelectedExpertIds] = useState<string[]>([]);

  // 使用 useQuery 获取专家列表
  const { data: expertsResponse, isLoading, error } = useQuery({
    queryKey: ['experts'],
    queryFn: () => AIChatExpertService.queryExpertList(),
  });

  if (error) {
    console.error("Failed to fetch experts:", error);
  }

  const experts = expertsResponse?.data || [];
  const totalCount = expertsResponse?.count || 0;

  console.log("我的专家们：", experts);
  console.log("总专家数量：", totalCount);
  console.log("已存在的专家：", existingExperts);

  // 计算已存在的专家ID列表
  const existingExpertIds = existingExperts.map(expert => expert.id);

  // 处理复选框选择
  const handleCheckboxChange = (expertId: string, isChecked: boolean) => {
    // 如果专家已存在，不允许取消选择
    if (existingExpertIds.includes(expertId)) {
      return;
    }

    if (isChecked) {
      setSelectedExpertIds(prev => [...prev, expertId]);
    } else {
      setSelectedExpertIds(prev => prev.filter(id => id !== expertId));
    }
  };

  // 处理保存按钮点击
  const handleSave = () => {
    const selectedExperts = experts.filter(expert =>
      selectedExpertIds.includes(expert.id)
    );

    if (selectedExperts.length === 0) {
      console.log("请至少选择一个专家");
      return;
    }

    // 调用父组件的 onSave 函数，这里假设一次只保存一个专家
    // 如果需要保存多个，可以修改 onSave 的签名
    selectedExperts.forEach(expert => {
      onSave(expert);
    });

    // 清空选择
    setSelectedExpertIds([]);
  };

  // 处理加载状态
  if (isLoading) {
    return (
      <Flex w="full" h="full" align="center" justify="center" bg="white">
        <Text>loading...</Text>
      </Flex>
    );
  }

  return (
    <Flex
      w="full"
      flex="1"
      bg="white"
      direction={"column"}
      overflow="hidden"
    >
      {/* operation bar */}
      <Flex
        w="full"
        flexShrink={0}
        h={"30px"}
        p={1}
        justify="space-between"
      >
        <IconButton
          size="xs"
          minW={"30px"}
          h="auto"
          onClick={onBack}
        >
          <Icon as={FiArrowLeft} boxSize={5} />
        </IconButton>
        <IconButton
          size="xs"
          minW={"30px"}
          h="auto"
          onClick={handleSave}
        >
          <Icon as={FiSave} boxSize={5}/>
        </IconButton>
      </Flex>

      {/* Card list */}
      <Flex
        w="full"
        flex="1"
        wrap="wrap"
        gap={4}
        p={4}
        overflowY="auto"
        minH="0"
      >
        <For
          each={experts}
        >
          {(item) => (
            <Card.Root
              maxW="xs"
              overflow="hidden"
              flex="0 0 auto"
              mb={4}
            >
              <Flex alignItems="center" justify="space-between">
                <Image src={epamlogo} alt="Logo" maxW="3xs" p={2} />
                <Checkbox
                  checked={selectedExpertIds.includes(item.id) || existingExpertIds.includes(item.id)}
                  onCheckedChange={({ checked }) => handleCheckboxChange(item.id, !!checked)}
                  disabled={existingExpertIds.includes(item.id)}
                  mr={2}
                  mt={2}
                />
              </Flex>
              <Card.Body gap="2">
                <Card.Title>{item.name}</Card.Title>
                <Card.Description>
                  This sofa is perfect for modern tropical spaces, baroque inspired
                  spaces.
                </Card.Description>
              </Card.Body>
              <Card.Footer />
            </Card.Root>
          )}
        </For>
      </Flex>
    </Flex>
  );
}