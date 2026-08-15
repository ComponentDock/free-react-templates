import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { componentDockLabel, componentDockUrl, copyrightPrefix, footerLinks } from '../data'

describe('Footer', () => {
  it('renders the quick links and the copyright bar with the Component Dock link', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-cream')

    for (const link of footerLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }

    const dock = screen.getByRole('link', { name: componentDockLabel })
    expect(dock).toHaveAttribute('href', componentDockUrl)
    expect(screen.getByText(new RegExp(copyrightPrefix))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument()
  })
})
