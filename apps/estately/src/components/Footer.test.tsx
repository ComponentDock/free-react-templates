import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about widget with the brand and hiring button', () => {
    render(<Footer />)
    expect(screen.getByText('Estately')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /we are hiring/i })).toBeInTheDocument()
  })

  it('renders all four link columns with five links each', () => {
    render(<Footer />)
    for (const column of ['Company', 'For Buyers', 'For Sellers', 'For Renters']) {
      expect(screen.getByRole('heading', { name: column })).toBeInTheDocument()
    }
    for (const link of ['About us', 'Services', 'Buy with us', 'Rent with us', 'Guideline']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('links the credit to Component Dock', () => {
    render(<Footer />)
    const dockLink = screen.getByRole('link', { name: /Component Dock/i })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
