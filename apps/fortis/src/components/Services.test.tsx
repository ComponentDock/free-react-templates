import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the light section with a centered double-underline heading', () => {
    const { container } = render(<Services />)
    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-light')
    const heading = screen.getByRole('heading', { name: 'Our Services' })
    expect(heading.className).toContain('section-heading')
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders four icon cards with title and description', () => {
    const { container } = render(<Services />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(services.length)
    for (const service of services) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.description)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg')).toHaveLength(services.length)
  })
})
