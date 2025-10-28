import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { Expert, UsersExpert, ExpertsPublic, UserExpertsPublic, ChatMessage, ChatConversation } from '@/components/aichat/aichatentry';



export class AIChatExpertService {

    /**
     * 查询专家列表
     *
     * @returns 返回一个可取消的Promise，解析后得到ExpertsPublic类型的响应
     *
     * @throws {422} 当请求参数验证失败时抛出验证错误
     */
    public static queryExpertList(): CancelablePromise<ExpertsPublic> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/experts/',
            query: {},
            errors: {
                422: 'Validation Error'
            }
        });
    }

    public static queryExpertByUserId(userId: string): CancelablePromise<UserExpertsPublic> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/expert/user/{id}',
            path: {
                id: userId
            },
            errors: {
                422: 'Validation Error'
            }
        });
    }
}

export class AIChatService {

    public static askAI(data: ChatConversation): CancelablePromise<ChatMessage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/aichat',
            formData: { ...data },
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: 'Validation Error'
            }
        });
    }
}
