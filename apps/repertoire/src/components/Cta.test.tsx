import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the CTA heading and description', () => {
    render(<Cta />)

    expect(screen.getByText('Get in Touch!')).toBeInTheDocument()
    expect(screen.getByText(/Have a project in mind/)).toBeInTheDocument()
  })

  it('renders the contact button', () => {
    render(<Cta />)

    expect(screen.getByRole('link', { name: 'Contact me!' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact me!' })).toHaveAttribute('href', '#contact')
  })

  it('applies custom className', () => {
    const { container } = render(<Cta className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
