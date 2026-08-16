import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { services, about } from '../data'

describe('Services', () => {
  it('renders the heading and four icon feature cards', () => {
    const { container } = render(<Services />)

    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()

    for (const service of services) {
      const card = screen.getByRole('heading', { name: service.title }).closest('div')!
      expect(card.querySelector('svg[aria-hidden="true"]')).not.toBeNull()
    }

    expect(container.querySelectorAll('svg[aria-hidden="true"]').length).toBe(services.length)
  })

  it('renders the overlapping About box with kicker, paragraphs, CTA and image', () => {
    render(<Services />)

    expect(screen.getByText(about.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: about.title })).toBeInTheDocument()
    for (const paragraph of about.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    const cta = screen.getByRole('link', { name: about.ctaLabel })
    expect(cta.className).toContain('rounded-full')

    const image = screen.getByAltText('About Momentum')
    expect(image).toHaveAttribute('src', about.image)
  })
})
