import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { describe, expect, it } from 'vitest'

describe('Features', () => {
  it('renders the customer service feature', () => {
    render(<Features />)
    expect(screen.getByText('Ask our Customer Service')).toBeInTheDocument()
  })

  it('renders the blog feature', () => {
    render(<Features />)
    expect(screen.getByText('Visit our Blog')).toBeInTheDocument()
  })

  it('has links', () => {
    render(<Features />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(2)
  })
})
