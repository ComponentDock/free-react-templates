import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders the site name', () => {
    render(<Header />)
    expect(screen.getByText('Credentia')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Header />)
    expect(screen.getByText('Enhance your online presence')).toBeInTheDocument()
  })

  it('renders Download CV button', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /download cv/i })).toHaveAttribute('href', '#contact')
  })

  it('renders Discover me button', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /discover me/i })).toHaveAttribute('href', '#hero')
  })
})
