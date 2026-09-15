import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link with correct URL', () => {
    render(<Footer />)

    const componentDockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(componentDockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(componentDockLink).toHaveAttribute('target', '_blank')
    expect(componentDockLink).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders all social media links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://facebook.com',
    )
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
      'href',
      'https://twitter.com',
    )
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://instagram.com',
    )
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com',
    )
  })

  it('opens social links in new tabs', () => {
    render(<Footer />)

    const facebookLink = screen.getByRole('link', { name: 'Facebook' })
    expect(facebookLink).toHaveAttribute('target', '_blank')
    expect(facebookLink).toHaveAttribute('rel', 'noreferrer')
  })

  it('applies custom className', () => {
    const { container } = render(<Footer className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
