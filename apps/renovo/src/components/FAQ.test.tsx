import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders section heading', () => {
    render(<FAQ />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders all accordion items', () => {
    render(<FAQ />)
    expect(screen.getByText(/How long does a typical repair/)).toBeInTheDocument()
    expect(screen.getByText(/Do you offer warranty/)).toBeInTheDocument()
    expect(screen.getByText(/Can you fix water-damaged/)).toBeInTheDocument()
    expect(screen.getByText(/How much does a diagnostic/)).toBeInTheDocument()
  })

  it('first item is open by default', () => {
    render(<FAQ />)
    expect(screen.getByText(/Most repairs are completed/)).toBeInTheDocument()
  })

  it('toggles accordion items on click', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const warrantyBtn = screen.getByText(/Do you offer warranty/)
    await user.click(warrantyBtn)
    expect(screen.getByText(/90-day warranty/)).toBeInTheDocument()
  })

  it('closes an item when clicked again', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const firstBtn = screen.getByText(/How long does a typical repair/)
    await user.click(firstBtn)
    expect(screen.queryByText(/Most repairs are completed/)).not.toBeInTheDocument()
  })

  it('renders skill bars', () => {
    render(<FAQ />)
    expect(screen.getByText('Hardware Repair')).toBeInTheDocument()
    expect(screen.getByText('Software Support')).toBeInTheDocument()
    expect(screen.getByText('Data Recovery')).toBeInTheDocument()
    expect(screen.getByText('Network Setup')).toBeInTheDocument()
  })

  it('renders skill percentages', () => {
    render(<FAQ />)
    expect(screen.getByText('92%')).toBeInTheDocument()
    expect(screen.getByText('88%')).toBeInTheDocument()
    expect(screen.getByText('78%')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
  })
})
