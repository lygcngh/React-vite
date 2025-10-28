// src/mock/handlers.ts
import { http, HttpResponse } from 'msw'
import { mockExperts } from './business/experts'


export const handlers = [
  http.get('http://localhost:8000/api/v1/items/', () => {
    return HttpResponse.json({
      data: [
        { id: '1', title: 'mock1', description: 'desc1', owner_id: 'user1' },
        { id: '2', title: 'mock2', description: 'desc2', owner_id: 'user1' }
      ],
      count: 2
    })
  }),
  // query all experts
  http.get('http://localhost:8000/api/v1/experts/', () => {
    return HttpResponse.json({
      data: [...mockExperts],
      count: mockExperts.length
    })
  }),
  // query experts belong to user
  http.get('http://localhost:8000/api/v1/expert/user/{id}', () => {
    const targetList = mockExperts.slice(0, 3)
    return HttpResponse.json({
      data: [...targetList],
      count: targetList.length
    })
  }),
  // ...其它mock
]