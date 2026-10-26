import { describe, expect, it } from 'vitest'
import { COURSES, COMPONENT_DOCK_URL, progressOf } from './courses'

describe('COURSES', () => {
  it('carries three courses in a fixed order with unique in-page anchors', () => {
    expect(COURSES).toHaveLength(3)
    expect(COURSES.map((course) => course.id)).toEqual(['course-1', 'course-2', 'course-3'])
    expect(new Set(COURSES.map((course) => course.id)).size).toBe(3)
  })

  it('gives each course its own accent and soft tint', () => {
    expect(COURSES.map((course) => course.accent)).toEqual(['#4f46e5', '#0f766e', '#b45309'])
    expect(COURSES.map((course) => course.soft)).toEqual(['#eef0ff', '#e6f6f3', '#fdf3e4'])
  })

  it('loads the first photo eagerly and the two below the fold lazily', () => {
    expect(COURSES.map((course) => course.loading)).toEqual(['eager', 'lazy', 'lazy'])
  })

  it('seeds each placeholder photo from the template name and the card index', () => {
    expect(COURSES.map((course) => course.image)).toEqual([
      'https://picsum.photos/seed/coursebook-1/700/440',
      'https://picsum.photos/seed/coursebook-2/700/440',
      'https://picsum.photos/seed/coursebook-3/700/440',
    ])
  })

  it('ships the three states of one card: in progress, just started, finished', () => {
    expect(COURSES.map((course) => course.completedLessons)).toEqual([14, 3, 12])
    expect(COURSES.map((course) => course.lessons)).toEqual([24, 18, 12])
  })

  it('points every attribution at Component Dock', () => {
    expect(COMPONENT_DOCK_URL).toBe('https://www.componentdock.com/')
  })
})

describe('progressOf', () => {
  it('rounds the fraction and prints the lesson count beside the percentage', () => {
    expect(progressOf(COURSES[0]!)).toEqual({
      percent: 58,
      label: '14 of 24 lessons',
      figure: '58%',
      cta: 'Resume',
      done: false,
    })
  })

  it('rounds 3 of 18 up to 17 rather than truncating to 16', () => {
    expect(progressOf(COURSES[1]!)).toEqual({
      percent: 17,
      label: '3 of 18 lessons',
      figure: '17%',
      cta: 'Resume',
      done: false,
    })
  })

  it('swaps the figure for the word Completed and the verb for View on the finished card', () => {
    expect(progressOf(COURSES[2]!)).toEqual({
      percent: 100,
      label: '12 of 12 lessons',
      figure: 'Completed',
      cta: 'View',
      done: true,
    })
  })
})
