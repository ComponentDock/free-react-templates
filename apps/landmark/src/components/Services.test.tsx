import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { SERVICES } from '../data'

describe('Services', () => {
  it('renders the blue band heading and the three service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'How we help people?' })).toBeInTheDocument()

    for (const service of SERVICES) {
      const heading = screen.getByRole('heading', { name: service.title })
      expect(heading).toBeInTheDocument()
      expect(heading.nextElementSibling!.textContent).toBe(service.blurb)
    }

    const section = screen.getByText('How we help people?').closest('section')!
    expect(section.className).toContain('bg-blue-bg')
  })

  it('falls back to a default icon for unknown icon keys', () => {
    render(
      <Services
        items={[...SERVICES, { icon: 'unknown', title: 'Extra Service', blurb: 'Extra blurb.' }]}
      />,
    )

    expect(screen.getByRole('heading', { name: 'Extra Service' })).toBeInTheDocument()
  })
})
