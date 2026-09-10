import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Story } from './Story'

describe('Story', () => {
  it('renders the heading', () => {
    render(<Story />)
    const heading = screen.getByRole('heading', { level: 2, name: /Crafting/ })
    expect(heading).toHaveTextContent(/Crafting.*Our Experiences/)
  })

  it('renders the description text', () => {
    render(<Story />)
    expect(screen.getByText(/Every project tells a story/)).toBeInTheDocument()
  })
})
