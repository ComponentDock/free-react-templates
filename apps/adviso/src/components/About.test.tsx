import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the mint-block heading, paragraph, photo and Learn More link', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { level: 2, name: /For local heroes with big hearts/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/family-run businesses to scaling challenger brands/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#case-study')

    const image = document.querySelector('img[alt*="Consultants"]')
    expect(image).toBeInTheDocument()
  })

  it('places the heading on a mint background block', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.closest('div')).toHaveClass('bg-brand')
  })
})
