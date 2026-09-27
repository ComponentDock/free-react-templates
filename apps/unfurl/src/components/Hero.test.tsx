import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders heading and subtitle', () => {
    render(<Hero />)

    expect(screen.getByText('Unfurl')).toBeInTheDocument()
    expect(screen.getByText(/Glenn Chapman Hoyer/)).toBeInTheDocument()
  })

  it('renders scroll indicator link', () => {
    render(<Hero />)

    const scrollLink = screen.getByRole('link', { name: /scroll down/i })
    expect(scrollLink).toHaveAttribute('href', '#portfolio')
  })

  it('scroll indicator navigates to portfolio section', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const scrollLink = screen.getByRole('link', { name: /scroll down/i })
    await user.click(scrollLink)
    expect(scrollLink.getAttribute('href')).toBe('#portfolio')
  })
})
