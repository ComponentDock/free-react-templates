import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading and service items', () => {
    render(<About />)

    expect(screen.getByText('What We Can Do for You')).toBeInTheDocument()
    expect(screen.getByText('Market Research')).toBeInTheDocument()
    expect(screen.getByText('Financial Services')).toBeInTheDocument()
    expect(screen.getByText('Online Marketing')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)

    expect(screen.getByRole('img', { name: 'About us' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
