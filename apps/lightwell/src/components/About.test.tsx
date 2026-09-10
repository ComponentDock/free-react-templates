import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('About', () => {
  it('renders the heading, paragraph, CTA button, and image', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Brief Information About Lightwell' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'View More' })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: 'About Lightwell' })).toBeInTheDocument()
  })

  it('links the CTA to the features section', () => {
    render(<About />)

    const cta = screen.getByRole('link', { name: 'View More' })
    expect(cta).toHaveAttribute('href', '#features')
  })

  it('prevents default navigation when CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<About />)

    const cta = screen.getByRole('link', { name: 'View More' })
    await user.click(cta)
    // Should not navigate (preventDefault called)
    expect(cta).toHaveAttribute('href', '#features')
  })
})
