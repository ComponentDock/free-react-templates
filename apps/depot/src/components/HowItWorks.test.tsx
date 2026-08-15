import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HowItWorks } from './HowItWorks'
import { steps } from '../data'

describe('HowItWorks', () => {
  it('renders the teal section with three numbered steps', () => {
    render(<HowItWorks />)
    const section = screen.getByRole('region', { name: 'How It Works' })
    expect(section.className).toContain('bg-brand')
    expect(screen.getByRole('heading', { level: 2, name: 'How It Works' })).toBeInTheDocument()
    for (const step of steps) {
      expect(screen.getByText(step.number)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: step.title })).toBeInTheDocument()
      expect(screen.getAllByText(step.description).length).toBeGreaterThan(0)
    }
    expect(section.querySelectorAll('svg')).toHaveLength(3)
  })

  it('draws a connector line after every step except the last', () => {
    const { container } = render(<HowItWorks />)
    const connectors = container.querySelectorAll('span[aria-hidden="true"]')
    expect(connectors).toHaveLength(steps.length - 1)
    for (const connector of connectors) {
      expect(connector.className).toContain('border-black/40')
    }
  })
})
