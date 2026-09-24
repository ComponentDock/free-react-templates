import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders navigation links and social icons', () => {
    render(<TopBar />)

    const nav = screen.getByRole('navigation', { name: 'Secondary' })
    expect(nav).toBeInTheDocument()

    const links = ['About Us', 'Contact', 'Advertisement', 'Privacy']
    for (const link of links) {
      expect(within(nav).getByText(link)).toHaveAttribute('href', '#')
    }

    expect(screen.getByRole('link', { name: 'facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'youtube' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'rss' })).toBeInTheDocument()
  })
})
