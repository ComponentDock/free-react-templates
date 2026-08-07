import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSplit } from './AboutSplit'

describe('AboutSplit', () => {
  it('renders the heading, blurb, both buttons, and an image', () => {
    render(<AboutSplit />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Right people at the\s+Right time\./)

    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign Up Free' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /team working/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
