import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the white Boostly wordmark, blurb and four columns', () => {
    render(<Footer />)
    expect(screen.getAllByText('Boostly').length).toBeGreaterThan(0)
    expect(screen.getByText(/Land behold it created good saw/)).toBeInTheDocument()
    for (const title of ['Navigation', 'Services', 'Contact Us']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders the navigation and services link lists', () => {
    render(<Footer />)
    for (const label of ['Home', 'About', 'Services', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    for (const label of ['Blackforest', 'Bodhubon', 'Rongdhonu', 'Meghrong']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders contact address and a tel: phone link', () => {
    render(<Footer />)
    expect(screen.getByText('76/A, Green Lane, Dhanmondi, NYC')).toBeInTheDocument()
    const phone = screen.getByRole('link', { name: '+10 (78) 738-9083' })
    expect(phone).toHaveAttribute('href', 'tel:+10787389083')
  })

  it('renders the four social icon links with accessible names', () => {
    render(<Footer />)
    for (const label of ['Twitter', 'Facebook', 'Linkedin', 'Pinterest']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('links the attribution line to Component Dock', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: /Component Dock/ })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
