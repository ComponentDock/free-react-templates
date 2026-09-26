import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the CTA heading', () => {
    render(<Footer />)
    expect(screen.getByText("Let's Work Together!")).toBeInTheDocument()
  })

  it('renders the email link', () => {
    render(<Footer />)
    expect(screen.getByText('office@snaplens.com')).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social icon links', () => {
    render(<Footer />)
    const icons = screen.getAllByRole('link', { hidden: true })
    const socialIcons = icons.filter((el) =>
      ['Pinterest', 'Facebook', 'Twitter', 'Dribbble'].some(
        (label) => el.getAttribute('aria-label') === label,
      ),
    )
    expect(socialIcons).toHaveLength(4)
  })
})
