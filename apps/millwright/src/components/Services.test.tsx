import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the heading, all four services, and the tall image', () => {
    const { container } = render(<Services />)

    expect(
      screen.getByRole('heading', { name: 'We Are Reliable Engineering In House' }),
    ).toBeInTheDocument()

    for (const service of services) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.text)).toBeInTheDocument()
    }

    // Tall feature image (decorative -> no img role).
    expect(container.querySelectorAll('img')).toHaveLength(1)
  })
})
