import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { services, servicesBackdrop } from '../data'

describe('Services', () => {
  it('renders the heading and lead on the photo backdrop', () => {
    const { container } = render(<Services />)
    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain(servicesBackdrop)
    expect(screen.getByRole('heading', { level: 2, name: 'More Services' })).toBeInTheDocument()
  })

  it('renders all six service cards with circular icons', () => {
    render(<Services />)
    expect(screen.getAllByRole('article')).toHaveLength(6)
    for (const service of services) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.description)).toBeInTheDocument()
    }
    const circles = document.querySelectorAll('section [class*="rounded-full"]')
    expect(circles.length).toBeGreaterThanOrEqual(6)
  })
})
