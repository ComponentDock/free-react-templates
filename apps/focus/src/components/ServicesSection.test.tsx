import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SERVICES, SKILLS, SERVICES_CLOSING } from '../data'
import { ServicesSection } from './ServicesSection'

describe('ServicesSection', () => {
  it('renders the heading, blurb and the three service cards', () => {
    render(<ServicesSection />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Photography Services' }),
    ).toBeInTheDocument()
    for (const service of SERVICES) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
    }
    /* All three cards share the same blurb copy. */
    expect(screen.getAllByText(SERVICES[0]!.blurb)).toHaveLength(3)
  })

  it('renders the three skill progress bars with their values', () => {
    render(<ServicesSection />)
    for (const skill of SKILLS) {
      const bar = screen.getByRole('progressbar', { name: skill.label })
      expect(bar).toHaveAttribute('aria-valuenow', String(skill.value))
      expect(bar).toHaveAttribute('aria-valuemin', '0')
      expect(bar).toHaveAttribute('aria-valuemax', '100')
      expect(screen.getByText(`${skill.value}%`)).toBeInTheDocument()
    }
  })

  it('renders the closing paragraph', () => {
    render(<ServicesSection />)
    expect(screen.getByText(SERVICES_CLOSING)).toBeInTheDocument()
  })
})
