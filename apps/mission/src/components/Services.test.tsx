import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { services } from '../data'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section title and exactly 3 service cards', () => {
    const { container } = render(<Services />)

    expect(screen.getByText('We Work For')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'We Serve For Peoples' })).toBeInTheDocument()

    for (const service of services) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
    }
    // All three cards share the same kind of placeholder paragraph.
    expect(screen.getAllByText(services[0]!.paragraph)).toHaveLength(services.length)

    expect(container.querySelectorAll('svg')).toHaveLength(services.length)
    expect(container.querySelectorAll('.rounded-full')).toHaveLength(services.length)
  })
})
