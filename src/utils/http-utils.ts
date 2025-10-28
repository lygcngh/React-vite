/**
 * 统一的HTTP请求工具函数
 */

/**
 * 发起GET请求
 * @param url - 请求的URL
 * @param options - 请求选项
 * @returns Promise<T> - 返回请求结果
 * @example
 * ```typescript
 * const data = await httpGet<{name: string}>('/api/user');
 * ```
 */
export async function httpGet<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

/**
 * 发起POST请求
 * @param url - 请求的URL
 * @param data - 要发送的数据
 * @param options - 请求选项
 * @returns Promise<T> - 返回请求结果
 * @example
 * ```typescript
 * const newUser = await httpPost<User>('/api/user', {name: 'John'});
 * ```
 */
export async function httpPost<T>(url: string, data: unknown, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    body: JSON.stringify(data),
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}