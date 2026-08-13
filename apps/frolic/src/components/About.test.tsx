import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the photo, eyebrow, heading, paragraphs, and amber button', () => {
    render(<About />)

    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Bring Fun Life To Your Kids',
    )
    expect(screen.getAllByText(/Lorem ipsum dolor sit amet/)).toHaveLength(2)

    const cta = screen.getByRole('link', { name: 'MORE ABOUT US' })
    expect(cta).toHaveAttribute('href', '#pricing')

    expect(screen.getByRole('img', { name: 'Kids enjoying the playground' })).toHaveAttribute(
      'src',
      expect.stringContaining('id/64'),
    )
  })
})
