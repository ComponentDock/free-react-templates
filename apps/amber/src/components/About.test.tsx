import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, blurb and Learn More link', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', {
        name: /Experienced and Traditional Stylish Barber Shop/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /Barber at work/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
