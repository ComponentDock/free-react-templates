import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HOW_IT_WORKS_STEPS } from '../data/content'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders a dark photo-overlay section with a light white heading', () => {
    const { container } = render(<HowItWorks />)
    const image = container.querySelector('img')!
    expect(image.getAttribute('src')).toContain('picsum.photos/seed/cargolane-howitworks-')
    expect(container.querySelector('.bg-black\\/40')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'How It Works' }).className).toContain(
      'text-white',
    )
  })

  it('shows the three order → payment → track steps with icons', () => {
    render(<HowItWorks />)
    expect(HOW_IT_WORKS_STEPS.map((step) => step.title)).toEqual([
      'Make An Order',
      'Make A Payment',
      'Track Your Order',
    ])
    for (const step of HOW_IT_WORKS_STEPS) {
      expect(screen.getByRole('heading', { level: 3, name: step.title })).toBeInTheDocument()
      expect(screen.getByText(step.blurb)).toBeInTheDocument()
    }
  })
})
