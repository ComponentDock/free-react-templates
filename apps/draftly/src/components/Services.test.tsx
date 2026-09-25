import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading', () => {
    render(<Services />)
    expect(screen.getByText(/We do awesome services/)).toBeInTheDocument()
  })

  it('renders all eight service cards', () => {
    render(<Services />)
    const services = [
      'Web Design',
      'Web Application',
      'Web Development',
      'Banner Design',
      'Branding',
      'Icon Design',
      'Graphic Design',
      'SEO',
    ]
    services.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('renders Services subheading', () => {
    render(<Services />)
    expect(screen.getByText('Services')).toBeInTheDocument()
  })
})
