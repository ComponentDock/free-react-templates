import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtitle, CTA button, and illustration', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: /Behind Every Success/ }),
    ).toBeInTheDocument()

    expect(screen.getByText(/We help you build something extraordinary/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Get Started/ })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: 'Lightwell hero illustration' })).toBeInTheDocument()
  })

  it('links the CTA to the about section', () => {
    render(<Hero />)

    const cta = screen.getByRole('link', { name: /Get Started/ })
    expect(cta).toHaveAttribute('href', '#about')
  })

  it('prevents default navigation when CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const cta = screen.getByRole('link', { name: /Get Started/ })
    await user.click(cta)
    expect(cta).toHaveAttribute('href', '#about')
  })
})
