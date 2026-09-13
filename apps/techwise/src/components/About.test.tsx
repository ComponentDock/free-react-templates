import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, blurb and stats', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', {
        name: /We Are Techwise Creative Studio Agency/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('150+')).toBeInTheDocument()
    expect(screen.getByText('Expert Team')).toBeInTheDocument()
    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('Solution For Business')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /Get in touch with us/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /Techwise creative studio/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
