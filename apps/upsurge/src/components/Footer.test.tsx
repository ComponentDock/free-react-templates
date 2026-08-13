import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the widgets, useful links, latest posts, socials, and Component Dock credit', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Usefull Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Latest Posts' })).toBeInTheDocument()

    for (const label of [
      'Home',
      'About us',
      'Services',
      'News',
      'Contact',
      'Support',
      'Terms',
      'Privacy',
    ]) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }

    for (const label of ['Pinterest', 'Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
