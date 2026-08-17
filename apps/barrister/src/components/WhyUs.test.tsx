import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyUs } from './WhyUs'
import { WHY_US } from '../data'

describe('WhyUs', () => {
  it('renders the kicker, heading, intro, and four court-themed icon cards', () => {
    render(<WhyUs />)

    expect(screen.getByRole('region', { name: 'Why Us' })).toBeInTheDocument()
    expect(screen.getByText(WHY_US.kicker)).toHaveClass('text-brand')
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(WHY_US.heading)
    expect(screen.getByText(WHY_US.intro)).toBeInTheDocument()

    for (const item of WHY_US.items) {
      expect(screen.getByRole('heading', { level: 4, name: item.label })).toHaveClass(
        'text-slate',
      )
      expect(screen.getByLabelText(`${item.label} icon`)).toBeInTheDocument()
    }
  })
})