import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { FOOTER } from '../data'
import { describe, expect, it } from 'vitest'

describe('Footer', () => {
  it('renders all four column titles', () => {
    render(<Footer />)
    for (const col of FOOTER.columns) {
      expect(screen.getByText(col.title)).toBeInTheDocument()
    }
  })

  it('renders all column lines', () => {
    render(<Footer />)
    for (const col of FOOTER.columns) {
      for (const line of col.lines) {
        expect(screen.getByText(line)).toBeInTheDocument()
      }
    }
  })

  it('renders the copyright', () => {
    render(<Footer />)
    expect(screen.getByText(FOOTER.copyright)).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: FOOTER.dockLink.label })
    expect(link).toHaveAttribute('href', FOOTER.dockLink.href)
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('has dark background', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-navy')
  })
})
