import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three varied pricing cards', () => {
    render(<Pricing />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Choose a plan that suit you' }),
    ).toBeInTheDocument()

    for (const badge of ['Portrait', 'Event', 'Wedding']) {
      expect(screen.getByText(badge)).toBeInTheDocument()
    }
    expect(screen.getByText('$ 200 USD')).toBeInTheDocument()
    expect(screen.getByText('$ 400 USD')).toBeInTheDocument()
    expect(screen.getByText('$ 650 USD')).toBeInTheDocument()

    // Five feature lines per card
    expect(screen.getAllByRole('list')).toHaveLength(3)
    const lists = screen.getAllByRole('list')
    for (const list of lists) {
      expect(list.querySelectorAll('li')).toHaveLength(5)
    }

    expect(screen.getAllByRole('button', { name: 'Choose This Plan' })).toHaveLength(3)
    expect(screen.getByText('60-minute studio session')).toBeInTheDocument()
    expect(screen.getByText('Two photographers')).toBeInTheDocument()
    expect(screen.getByText('Premium print-ready album')).toBeInTheDocument()
  })
})
