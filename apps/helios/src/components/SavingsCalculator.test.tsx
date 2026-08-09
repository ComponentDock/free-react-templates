import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { SavingsCalculator } from './SavingsCalculator'

describe('SavingsCalculator', () => {
  it('renders the card heading and default estimates', () => {
    render(<SavingsCalculator />)
    expect(screen.getByRole('heading', { name: 'Estimate Your Savings' })).toBeInTheDocument()
    // Defaults: Texas (0.75), $150/mo -> 150*12*0.75 = $1,350
    expect(screen.getByText('$1,350')).toBeInTheDocument()
    expect(screen.getByText('23.4 tons/yr')).toBeInTheDocument()
    expect(screen.getByText('11.1 yrs')).toBeInTheDocument()
    expect(screen.getByText('$10,500')).toBeInTheDocument()
    for (const label of ['Annual Savings', 'CO2 Offset', 'Payback Period', 'Total Cost']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Get Free Assessment' })).toBeInTheDocument()
  })

  it('updates the estimates when the monthly-bill slider changes', () => {
    render(<SavingsCalculator />)
    fireEvent.change(screen.getByRole('slider'), { target: { value: '300' } })
    // 300*12*0.75 = $2,700; CO2 = 300*12*0.013 = 46.8
    expect(screen.getByText('$2,700')).toBeInTheDocument()
    expect(screen.getByText('46.8 tons/yr')).toBeInTheDocument()
    expect(screen.getByText('$21,000')).toBeInTheDocument()
    expect(screen.getByText('$300/mo')).toBeInTheDocument()
  })

  it('updates the estimates when the state dropdown changes', async () => {
    const user = userEvent.setup()
    render(<SavingsCalculator />)
    await user.selectOptions(screen.getByLabelText('State'), 'California')
    // 150*12*0.85 = $1,530
    expect(screen.getByText('$1,530')).toBeInTheDocument()
  })
})
