import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Courses } from './Courses'
import { COURSES } from '../data'

describe('Courses', () => {
  it('renders the heading and three course cards with prices and Apply buttons', () => {
    render(<Courses />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Popular Courses' }),
    ).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)

    COURSES.forEach((course, index) => {
      const card = cards[index]!
      expect(within(card).getByText(course.title)).toBeInTheDocument()
      expect(within(card).getByText(course.price)).toBeInTheDocument()
      expect(within(card).getByRole('link', { name: 'Apply Course' })).toHaveAttribute(
        'href',
        '#schedule',
      )
    })
  })
})
