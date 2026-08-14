import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { contactInfo } from '../data'

describe('Sidebar', () => {
  it('renders the brand wordmark with the studio subtitle', () => {
    render(<Sidebar />)

    const wordmark = screen.getByRole('heading', { level: 2, name: 'Lensa' })
    expect(wordmark.textContent).toBe('Lensa')
    expect(wordmark.className).toContain('uppercase')
    expect(screen.getByText('Photography Studio')).toBeInTheDocument()
  })

  it('renders the serif intro headline and supporting paragraph', () => {
    render(<Sidebar />)

    const headline = screen.getByRole('heading', { level: 1, name: 'My name is Michael Smith.' })
    expect(headline.className).toContain('font-display')
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders the contact details with an icon on the address line', () => {
    const { container } = render(<Sidebar />)

    expect(screen.getByText(contactInfo.address)).toBeInTheDocument()
    expect(screen.getByText(contactInfo.phone)).toBeInTheDocument()
    const email = screen.getByRole('link', { name: contactInfo.email })
    expect(email).toHaveAttribute('href', `mailto:${contactInfo.email}`)

    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
    const addressItem = screen.getByText(contactInfo.address).closest('li')
    expect(addressItem).toContainElement(icon!)
  })

  it('renders the outlined uppercase CTA with a right arrow', () => {
    const { container } = render(<Sidebar />)

    const cta = screen.getByRole('link', { name: /see my portfolio/ })
    expect(cta).toHaveAttribute('href', '#portfolio')
    expect(cta.className).toContain('uppercase')
    expect(cta.className).toContain('border-2')
    expect(container.querySelectorAll('svg')).toHaveLength(2) // MapPin + ArrowRight
  })
})
