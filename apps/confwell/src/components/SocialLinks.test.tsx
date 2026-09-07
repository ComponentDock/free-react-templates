import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SocialLinks } from './SocialLinks'

describe('SocialLinks', () => {
  it('renders Facebook link', () => {
    render(<SocialLinks />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
  })

  it('renders Twitter link', () => {
    render(<SocialLinks />)
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
  })

  it('renders Tumblr link', () => {
    render(<SocialLinks />)
    expect(screen.getByRole('link', { name: /tumblr/i })).toBeInTheDocument()
  })

  it('renders Instagram link', () => {
    render(<SocialLinks />)
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })

  it('renders exactly 4 social links', () => {
    render(<SocialLinks />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4)
  })

  it('all links point to #', () => {
    render(<SocialLinks />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '#')
    })
  })
})
