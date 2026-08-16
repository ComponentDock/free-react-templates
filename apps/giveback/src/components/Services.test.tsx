import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('shows the heading and three service cards with icons and titles', () => {
    const { container } = render(<Services />)
    expect(screen.getByText(services.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: services.title })).toBeInTheDocument()
    for (const item of services.items) {
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.paragraph)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg')).toHaveLength(3)
  })
})
