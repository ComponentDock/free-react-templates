import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders the emoji illustration inside the light circle', () => {
    render(<ErrorSection />)

    const emoji = screen.getByRole('img', { name: /confused face/i })
    expect(emoji).toBeInTheDocument()

    const circle = emoji.parentElement
    expect(circle).toHaveClass('bg-circle')
  })

  it('renders the 404 heading, message, and back-to-homepage pill', () => {
    render(<ErrorSection />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('404')
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(
      /oops! page not be found/i,
    )
    expect(screen.getByText(/does not exist, have been removed/i)).toBeInTheDocument()

    const homeLink = screen.getByRole('link', { name: 'Back to homepage' })
    expect(homeLink).toHaveAttribute('href', '/')
    expect(homeLink).toHaveClass('bg-brand')
  })
})
