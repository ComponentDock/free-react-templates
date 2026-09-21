import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoCta } from './VideoCta'

describe('VideoCta', () => {
  it('renders the heading and CTA button', () => {
    render(<VideoCta />)
    expect(screen.getByRole('heading', { name: /Gym In Downtown/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Started Today/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('renders the play button', () => {
    render(<VideoCta />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })
})
