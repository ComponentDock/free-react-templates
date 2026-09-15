import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the services section heading', () => {
    render(<Services />)

    expect(screen.getByText('What I do?')).toBeInTheDocument()
    expect(screen.getByText('Here are some of my expertise')).toBeInTheDocument()
  })

  it('renders all six service items', () => {
    render(<Services />)

    expect(screen.getByText('Branding')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('SEO')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('UI')).toBeInTheDocument()
    expect(screen.getByText('Help & Support')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)

    expect(screen.getByText(/Crafting unique brand identities/)).toBeInTheDocument()
    expect(screen.getByText(/Designing beautiful, responsive/)).toBeInTheDocument()
    expect(screen.getByText(/Optimizing your online presence/)).toBeInTheDocument()
    expect(screen.getByText(/Building fast, scalable/)).toBeInTheDocument()
    expect(screen.getByText(/Creating intuitive user interfaces/)).toBeInTheDocument()
    expect(screen.getByText(/Providing ongoing support/)).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Services className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
