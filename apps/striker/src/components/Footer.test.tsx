import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { footerColumns, socials } from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four footer columns with their links', () => {
    const { container } = render(<Footer />)
    for (const column of footerColumns) {
      expect(screen.getByRole('heading', { level: 2, name: column.title })).toBeInTheDocument()
      for (const link of column.links) {
        expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
      }
    }
    expect(screen.getByRole('heading', { level: 2, name: 'Social' })).toBeInTheDocument()
    expect(container.querySelector('footer')).toHaveClass('bg-footer')
  })

  it('renders social icon links with accessible labels', () => {
    render(<Footer />)
    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('links the Component Dock attribution in the copyright line', () => {
    const { container } = render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(container.textContent).toContain('Copyright')
    expect(container.textContent).toContain('More templates at')
  })
})
