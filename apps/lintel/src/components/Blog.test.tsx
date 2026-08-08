import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the Blog and Updates heading with a subtext', () => {
    render(<Blog />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Blog and Updates/i)
    expect(
      screen.getByText(/Iusto quos veniam magni totam, architecto earum dolor/i),
    ).toBeInTheDocument()
  })

  it('renders four post cards with a date, a title, and a Read More link', () => {
    render(<Blog />)
    expect(screen.getAllByText('September 30, 2019')).toHaveLength(4)
    expect(screen.getAllByRole('heading', { name: /Iusto quos veniam magni totam/i })).toHaveLength(
      4,
    )
    expect(screen.getAllByRole('link', { name: /Read More/i })).toHaveLength(4)
  })
})
