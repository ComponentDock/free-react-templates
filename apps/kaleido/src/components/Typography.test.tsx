import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Typography } from './Typography'

describe('Typography', () => {
  it('renders the section heading', () => {
    render(<Typography />)
    const headings = screen.getAllByRole('heading')
    const sectionHeading = headings.find((h) => h.textContent === 'Typography')
    expect(sectionHeading).toBeInTheDocument()
  })

  it('renders heading levels 1 through 6', () => {
    render(<Typography />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Heading Level 1')
    const h2s = screen.getAllByRole('heading', { level: 2 })
    expect(h2s.some((h) => h.textContent === 'Heading Level 2')).toBe(true)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Heading Level 3')
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Heading Level 4')
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent('Heading Level 5')
    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent('Heading Level 6')
  })

  it('renders body text', () => {
    render(<Typography />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })
})
