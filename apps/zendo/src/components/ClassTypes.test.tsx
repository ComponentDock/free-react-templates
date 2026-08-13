import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ClassTypes } from './ClassTypes'
import { classTypes } from '../data'

describe('ClassTypes', () => {
  it('renders four circular class-type cards with learn-more links', () => {
    render(<ClassTypes />)
    for (const item of classTypes) {
      const heading = screen.getByRole('heading', { name: item.title })
      expect(heading).toBeInTheDocument()
      const image = screen.getByRole('img', { name: item.title })
      expect(image).toHaveAttribute('src', item.image)
      expect(image.className).toContain('rounded-full')
    }
    expect(screen.getAllByRole('link', { name: /learn more/i })).toHaveLength(classTypes.length)
  })
})
