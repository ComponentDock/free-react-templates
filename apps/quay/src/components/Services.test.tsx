import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the What We Do heading with an intro paragraph on the brand-blue section', () => {
    const { container } = render(<Services />)

    expect(screen.getByRole('heading', { name: /What We Do/ })).toBeInTheDocument()
    expect(screen.getByText(/we design/i)).toBeInTheDocument()

    const section = container.querySelector('section')
    expect(section?.className).toContain('bg-primary-600')
  })

  it('renders six service cards with an icon, title, and description', () => {
    const { container } = render(<Services />)

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6)
    expect(container.querySelectorAll('svg')).toHaveLength(6)

    for (const item of services) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.blurb)).toBeInTheDocument()
    }
  })
})
