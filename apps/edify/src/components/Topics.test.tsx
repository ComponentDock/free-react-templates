import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Topics } from './Topics'

describe('Topics', () => {
  it('renders eight subject cards and the View More Subjects button', () => {
    render(<Topics />)

    expect(screen.getByRole('heading', { name: 'Explore top subjects' })).toBeInTheDocument()

    const subjects = [
      'Programing',
      'Design',
      'Marketing',
      'Photography',
      'Music',
      'Data Science',
      'Language',
      'Business',
    ]
    for (const subject of subjects) {
      expect(screen.getByRole('heading', { name: subject })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('img', { hidden: true }).length).toBeGreaterThanOrEqual(8)
    expect(screen.getByRole('link', { name: 'View More Subjects' })).toBeInTheDocument()
  })
})
