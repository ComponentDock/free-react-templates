import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'
import { ctaBands } from '../data'

describe('CtaBand', () => {
  it('renders the heading, lead paragraph, and dark cover image for each band', () => {
    const { rerender, container } = render(<CtaBand band={ctaBands[0]!} />)
    for (const band of ctaBands) {
      rerender(<CtaBand band={band} />)
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(band.heading)
      expect(screen.getByText(band.lead)).toBeInTheDocument()
      expect(container.querySelector('img')).toHaveAttribute('src', band.image)
    }
  })

  it('renders an inline Get Started link for the first band', () => {
    render(<CtaBand band={ctaBands[0]!} />)
    const link = screen.getByRole('link', { name: ctaBands[0]!.ctaLabel })
    expect(link).toHaveAttribute('href', ctaBands[0]!.ctaHref)
  })

  it('renders a brand-red Get Started button for the second and third bands', () => {
    const { rerender } = render(<CtaBand band={ctaBands[1]!} />)
    for (const band of [ctaBands[1]!, ctaBands[2]!]) {
      rerender(<CtaBand band={band} />)
      const link = screen.getByRole('link', { name: band.ctaLabel })
      expect(link.className).toMatch(/bg-brand/)
    }
  })
})
