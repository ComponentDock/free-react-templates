import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialLinks } from './SocialLinks'

describe('SocialLinks', () => {
  it('renders the follow label', () => {
    render(<SocialLinks />)

    expect(screen.getByText(/follow us for update/i)).toBeInTheDocument()
  })

  it('renders five social icon links', () => {
    render(<SocialLinks />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(5)
  })

  it('each icon has an accessible label', () => {
    render(<SocialLinks />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Google Plus' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Snapchat' })).toBeInTheDocument()
  })

  it('each icon opens in a new tab', () => {
    render(<SocialLinks />)

    const links = screen.getAllByRole('link')
    for (const link of links) {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    }
  })

  it('each icon has a brand background color', () => {
    render(<SocialLinks />)

    const fb = screen.getByRole('link', { name: 'Facebook' })
    expect(fb).toHaveStyle({ backgroundColor: '#3b5998' })

    const tw = screen.getByRole('link', { name: 'Twitter' })
    expect(tw).toHaveStyle({ backgroundColor: '#1da1f2' })

    const gp = screen.getByRole('link', { name: 'Google Plus' })
    expect(gp).toHaveStyle({ backgroundColor: '#dd4b39' })

    const pi = screen.getByRole('link', { name: 'Pinterest' })
    expect(pi).toHaveStyle({ backgroundColor: '#bd081c' })

    const sc = screen.getByRole('link', { name: 'Snapchat' })
    expect(sc).toHaveStyle({ backgroundColor: '#fffc00' })
  })
})
