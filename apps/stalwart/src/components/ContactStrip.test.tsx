import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ContactStrip } from './ContactStrip'

describe('ContactStrip', () => {
  it('renders the white help box heading', () => {
    render(<ContactStrip />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/We are here\s*to help you/)
  })

  it('renders three contact columns with icon, title and lines', () => {
    render(<ContactStrip />)
    for (const title of ['Call Us', 'Location', 'Opening Hour']) {
      const heading = screen.getByRole('heading', { level: 3, name: title })
      expect(heading).toBeInTheDocument()
    }
    expect(screen.getByText('1-800-506-266')).toBeInTheDocument()
    expect(screen.getByText(/87\/A, Green Lane/i)).toBeInTheDocument()
    expect(screen.getByText(/Mon – Sat/i)).toBeInTheDocument()
  })
})
