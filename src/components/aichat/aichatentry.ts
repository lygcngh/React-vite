export interface Expert {
  id: string;
  name: string;
}

export interface UsersExpert {
  userid: string
  id: string;
  name: string;
}

// 专家列表响应类型 - 与项目统一格式保持一致
export type ExpertsPublic = {
    data: Array<Expert>;
    count: number;
};

export type UserExpertsPublic = {
    data: Array<Expert>;
    count: number;
};

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}


export interface ChatConversation {
  id: string;
  title: string;
  expert: Expert[] | null;
  messages: ChatMessage[];
  createdAt: Date;
  isPinned?: boolean;
  oldTimestamp?: string; // 用于存储取消固定时恢复的时间戳
}