import type { StudentAnalysis } from '@/types'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

/**
 * 获取学生分析数据
 * 注意：新API文档中未提供学生分析相关接口，需要补充
 */
export const getStudentAnalysis = async (): Promise<StudentAnalysis[]> => {
  const response = await fetch(`${API_BASE_URL}/api/analysis`)
  if (!response.ok) {
    throw new Error('Failed to fetch student analysis')
  }
  return response.json()
} 