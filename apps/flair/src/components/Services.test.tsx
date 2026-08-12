import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { IMAGES, SERVICES } from '../data'

describe('Services', () => {
  it('renders the heading, subtext and three service cards over the photo', () => {
    const { container } = render(<Services />)
    const section = screen.getByRole('region', { name: 'Services' })
    expect(section.style.backgroundImage).toContain(IMAGES.services)

    const overlay = Array.from(container.querySelectorAll('div')).find((el) =>
      el.className.includes('rgba(4,8,29,0.7)'),
    )
    expect(overlay).toBeDefined()

    expect(screen.getByRole('heading', { level: 2, name: SERVICES.heading })).toBeInTheDocument()
    expect(screen.getByText(SERVICES.subtext)).toBeInTheDocument()
    for (const service of SERVICES.items) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.text)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg')).toHaveLength(SERVICES.items.length)
  })
})
