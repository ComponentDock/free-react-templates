import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Smithy logo', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Smithy' })).toBeInTheDocument()
  })

  it('renders Follow Me text', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Me')).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
  })

  it('renders the copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
