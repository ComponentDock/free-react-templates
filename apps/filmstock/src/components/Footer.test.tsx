import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { componentDockLabel, componentDockUrl, siteName } from '../data'

describe('Footer', () => {
  it('renders the site name', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(siteName))).toBeInTheDocument()
  })

  it('renders the current year in copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: componentDockLabel })
    expect(link).toHaveAttribute('href', componentDockUrl)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has a dark footer background', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer') as HTMLElement
    expect(footer.className).toContain('bg-footer-bg')
  })
})
