import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /We've been Creating/i })).toBeInTheDocument()
  })

  it('displays the "26 Years" badge', () => {
    render(<About />)
    expect(screen.getByText('26')).toBeInTheDocument()
    expect(screen.getByText(/Years of Awesomeness/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /Learn more about this/i })).toHaveAttribute(
      'href',
      '#portfolio',
    )
  })
})
