import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders a footer element', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('displays a link to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('contains a "More templates" attribution line', () => {
    render(<Footer />)
    expect(screen.getByText(/more templates at/i)).toBeInTheDocument()
  })

  it('has border-top and white background', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('border-t')
    expect(footer).toHaveClass('bg-white')
  })

  it('text is centered and small', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('text-center')
    expect(footer).toHaveClass('text-sm')
  })
})
