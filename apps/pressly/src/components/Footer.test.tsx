import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { brandName, footerBlurb, usefulLinks, topCategories } from '../data'

describe('Footer', () => {
  it('shows the brand name, blurb, and all footer sections', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()
    expect(screen.getByText(footerBlurb)).toBeInTheDocument()

    for (const link of usefulLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    for (const cat of topCategories) {
      expect(screen.getByRole('link', { name: cat })).toBeInTheDocument()
    }
  })

  it('links to Component Dock in the copyright', () => {
    render(<Footer />)
    const componentDockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(componentDockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(componentDockLink).toHaveAttribute('target', '_blank')
  })
})
