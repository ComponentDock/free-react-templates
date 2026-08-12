import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and four plans with features and buttons', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Our Best Pricing' })).toBeInTheDocument()
    for (const plan of ['Basic Plan', 'Advance Plan', 'Expert Plan', 'Pro Plan']) {
      const card = screen.getByText(plan).closest('div')!
      expect(within(card).getByRole('heading', { name: plan })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('button', { name: 'Choose Plan' })).toHaveLength(4)
    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getByText('$19')).toBeInTheDocument()
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
    expect(screen.getByText('100% free. Forever')).toBeInTheDocument()
    expect(screen.getByText('150 GB Bandwidth')).toBeInTheDocument()
    expect(screen.getByText('$20.00 / GB Overages')).toBeInTheDocument()
  })
})
