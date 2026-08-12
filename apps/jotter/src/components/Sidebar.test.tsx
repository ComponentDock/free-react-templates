import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('shows the jotter wordmark with a grey dot', () => {
    render(<Sidebar />)
    const wordmark = screen.getByText(/jotter/)
    expect(wordmark).toHaveClass('font-black')
    expect(wordmark.querySelector('span')).toHaveClass('text-subheading')
  })

  it('lists the six navigation links with Home active', () => {
    render(<Sidebar />)

    const nav = screen.getByRole('navigation', { name: 'Main' })
    const links = within(nav).getAllByRole('link')
    expect(links.map((link) => link.textContent)).toEqual([
      'Home',
      'Photography',
      'Travel',
      'Fashion',
      'About',
      'Contact',
    ])
    expect(links[0]).toHaveClass('text-ink')
    expect(links[0]).toHaveClass('after:scale-x-100')
    expect(links[1]).toHaveClass('text-ink/40')
  })

  it('shows the copyright line linking to Component Dock and the four social icons', () => {
    render(<Sidebar />)

    expect(screen.getByText(/Copyright ©2026 All rights reserved/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    const socials = ['Facebook', 'Twitter', 'Instagram', 'Linkedin']
    for (const social of socials) {
      const link = screen.getByRole('link', { name: social })
      expect(link.querySelector('svg')).toBeInTheDocument()
    }
  })
})
