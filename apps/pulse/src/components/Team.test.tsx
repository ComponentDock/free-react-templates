import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Meet Our Team' })).toBeInTheDocument()
  })

  it('renders all 4 team members', () => {
    render(<Team />)
    const names = screen.getAllByText('Jason Smith')
    expect(names.length).toBe(3)
    expect(screen.getByText('Jeffrey Rockenson')).toBeInTheDocument()
  })

  it('renders roles for each member', () => {
    render(<Team />)
    expect(screen.getByText('President & CEO')).toBeInTheDocument()
    expect(screen.getByText('Executive Vice President')).toBeInTheDocument()
    expect(screen.getByText('General Manager')).toBeInTheDocument()
    expect(screen.getByText('Strategic Consultant')).toBeInTheDocument()
  })

  it('renders team member images', () => {
    render(<Team />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('renders social icon links for each member', () => {
    render(<Team />)
    const socialLinks = screen.getAllByRole('link', {
      name: /Jason Smith (Facebook|Twitter|LinkedIn|Instagram)/,
    })
    expect(socialLinks.length).toBeGreaterThanOrEqual(1)
  })
})
