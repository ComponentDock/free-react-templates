import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, blurb, image, stats, and Learn More button', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()

    expect(screen.getByText('150+')).toBeInTheDocument()
    expect(screen.getByText('120+')).toBeInTheDocument()
    expect(screen.getByText('15+')).toBeInTheDocument()

    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Clients')).toBeInTheDocument()
    expect(screen.getByText('Awards')).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /team working/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
