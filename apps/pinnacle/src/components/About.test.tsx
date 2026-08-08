import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading, copy, and Read More link', () => {
    render(<About />)
    expect(screen.getByText('About our Company')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: "We've been creating Awesome Since 1992" }),
    ).toBeInTheDocument()
    expect(screen.getByText('26')).toBeInTheDocument()
    expect(screen.getByText('Years of Creativity')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '#about')
  })
})
