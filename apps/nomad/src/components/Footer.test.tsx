import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four widget columns', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Nomad' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Destination' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Archives' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
  })

  it('shows about text and social icon links', () => {
    render(<Footer />)
    const about = screen.getByRole('heading', { name: 'Nomad' }).closest('div')!
    expect(within(about).getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    for (const label of ['Twitter', 'Facebook', 'Instagram']) {
      expect(within(about).getByRole('img', { name: label })).toBeInTheDocument()
    }
  })

  it('shows contact details', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St\./)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('renders the copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Nomad — Travel blog template/)).toBeInTheDocument()
  })
})
