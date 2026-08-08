import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading and project gallery with captions', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Projects' })).toBeInTheDocument()
    for (const title of [
      'Office Interior Design',
      'Modern House Architecture',
      'Commercial Building Exterior',
      'Creative Studio Renovation',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('img')).toHaveLength(4)
  })
})
