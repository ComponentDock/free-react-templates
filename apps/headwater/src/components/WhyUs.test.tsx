import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhyUs } from './WhyUs'
import { WHY_US } from '../content'

describe('WhyUs', () => {
  it('renders the argument, the caption and four commitments', () => {
    render(<WhyUs />)
    expect(screen.getByText(WHY_US.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(WHY_US.heading)
    expect(screen.getByText(WHY_US.lede)).toBeInTheDocument()
    expect(screen.getByText(WHY_US.figcaption)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: WHY_US.imageAlt })).toHaveAttribute('src', WHY_US.image)

    for (const commitment of WHY_US.commitments) {
      expect(screen.getByText(commitment.term)).toBeInTheDocument()
      expect(screen.getByText(commitment.body)).toBeInTheDocument()
    }
  })

  it('puts the figure last on a phone and first from lg', () => {
    const { container } = render(<WhyUs />)
    const figure = container.querySelector('figure') as HTMLElement
    expect(figure.className).toContain('order-last')
    expect(figure.className).toContain('lg:order-first')

    const rules = container.querySelectorAll('dl > div')
    expect(rules).toHaveLength(4)
    expect(rules[0]!.className).toContain('border-l-2')
  })
})
