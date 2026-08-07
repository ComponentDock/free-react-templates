import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MobileSplit } from './MobileSplit'

describe('MobileSplit', () => {
  it('renders the heading, blurb, both buttons, and an image', () => {
    render(<MobileSplit />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Easy to Use\s+Mobile Application/)

    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign Up Free' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mobile app/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
