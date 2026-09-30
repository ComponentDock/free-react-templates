import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the three service columns with their titles', () => {
    render(<Services />)
    for (const title of ['Mobile Application', 'E-Commerce', 'Web Application']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('lists the capability items for each column', () => {
    render(<Services />)
    for (const item of [
      'Android Development',
      'iOS Development',
      'React Native',
      'WooCommerce',
      'Shopify Integration',
      'BigCommerce',
      'React Web App',
      'Vue JS Web App',
      'Angular Web App',
    ]) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
  })

  it('tints the three lucide icons with the brand accent', () => {
    const { container } = render(<Services />)
    const icons = container.querySelectorAll('svg.lucide')
    expect(icons).toHaveLength(3)
    for (const icon of icons) {
      expect(icon).toHaveClass('text-accent')
      expect(icon).toHaveAttribute('aria-hidden', 'true')
    }
  })
})
