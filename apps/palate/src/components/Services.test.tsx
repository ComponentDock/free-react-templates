import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { SERVICES } from '../data'

describe('Services', () => {
  it('renders the heading and three cards with black circular icon badges', () => {
    const { container } = render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: 'Catering Services' })).toBeInTheDocument()
    expect(container.querySelector('.font-script')).toHaveTextContent('Services')

    for (const service of SERVICES) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.blurb)).toBeInTheDocument()
    }

    // Three 130px black circles with orange icons.
    const circles = container.querySelectorAll('.bg-ink.rounded-full')
    expect(circles).toHaveLength(3)
    for (const circle of circles) {
      expect(circle.querySelector('svg')!.className.baseVal).toContain('text-brand')
    }
  })
})
