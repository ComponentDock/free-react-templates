import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, blurb, image, and the call-to-action button', () => {
    render(<About />)

    expect(screen.getByRole('heading', { name: /Designed to Convert/ })).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /one page website preview/i })).toBeInTheDocument()
  })
})
