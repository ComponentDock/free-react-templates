import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'
import { WHY_CHOOSE } from '../data'

describe('WhyChooseUs', () => {
  it('renders the centered header and four bordered service cells', () => {
    render(<WhyChooseUs />)

    expect(screen.getByText(WHY_CHOOSE.label)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: WHY_CHOOSE.heading })).toBeInTheDocument()

    const grid = document.querySelector('section')
    expect(grid).not.toBeNull()

    for (const item of WHY_CHOOSE.items) {
      const title = screen.getByRole('heading', { level: 3, name: item.title })
      expect(title.closest('section')).not.toBeNull()
      expect(screen.getByText(item.blurb)).toBeInTheDocument()
    }
  })

  it('renders the solid navy Browse CTA', () => {
    render(<WhyChooseUs />)

    const cta = screen.getByRole('link', { name: WHY_CHOOSE.cta })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta).toHaveClass('bg-navy', 'text-white')
  })
})
