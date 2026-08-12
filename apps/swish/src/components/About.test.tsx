import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about split with image, overline, heading, copy and CTA', () => {
    render(<About />)

    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Welcome to Basketball School' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/A created won't created subdue a every green/).length).toBe(2)
    expect(screen.getByRole('link', { name: /read more/ })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Basketball school team/ })).toBeInTheDocument()
  })
})
