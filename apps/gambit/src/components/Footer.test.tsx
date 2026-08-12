import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { BRAND, FOOTER_COLUMNS } from '../data'

describe('Footer', () => {
  it('renders four link columns with white headings', () => {
    render(<Footer />)
    for (const column of FOOTER_COLUMNS) {
      expect(screen.getByRole('heading', { level: 3, name: column.title })).toBeInTheDocument()
      for (const link of column.links) {
        expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
      }
    }
  })

  it('links the brand to Component Dock', () => {
    render(<Footer />)
    expect(screen.getByText(BRAND)).toBeInTheDocument()
    const dockLink = screen.getByRole('link', { name: /component dock/i })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders a paraphrased copyright bar', () => {
    render(<Footer />)
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
    expect(screen.getByText(/made with/i)).toBeInTheDocument()
  })
})
