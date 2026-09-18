import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialIcons } from './SocialIcons'

describe('SocialIcons', () => {
  it('renders the follow label', () => {
    render(<SocialIcons />)

    expect(screen.getByText(/follow us for update/i)).toBeInTheDocument()
  })

  it('renders five social icon links', () => {
    render(<SocialIcons />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(5)
  })

  it('each icon has an accessible label', () => {
    render(<SocialIcons />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Google Plus' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
  })

  it('each icon opens in a new tab', () => {
    render(<SocialIcons />)

    const links = screen.getAllByRole('link')
    for (const link of links) {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    }
  })

  it('each icon has a brand background color', () => {
    render(<SocialIcons />)

    const fb = screen.getByRole('link', { name: 'Facebook' })
    expect(fb).toHaveStyle({ backgroundColor: '#2A61D6' })

    const tw = screen.getByRole('link', { name: 'Twitter' })
    expect(tw).toHaveStyle({ backgroundColor: '#3AA4F8' })

    const gp = screen.getByRole('link', { name: 'Google Plus' })
    expect(gp).toHaveStyle({ backgroundColor: '#F43846' })

    const ig = screen.getByRole('link', { name: 'Instagram' })
    expect(ig).toHaveStyle({ backgroundColor: '#8F614A' })

    const pi = screen.getByRole('link', { name: 'Pinterest' })
    expect(pi).toHaveStyle({ backgroundColor: '#E1C013' })
  })
})
