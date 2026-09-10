import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'
import { describe, expect, it } from 'vitest'

describe('Pricing', () => {
  it('displays the section heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Purchase whatever you want')).toBeInTheDocument()
  })

  it('renders 3 pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByText('01 Ripple')).toBeInTheDocument()
    expect(screen.getByText('01 Ethereum')).toBeInTheDocument()
    expect(screen.getByText('01 Bitcoin')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$7999')).toBeInTheDocument()
    expect(screen.getByText('$9999')).toBeInTheDocument()
    expect(screen.getByText('$5999')).toBeInTheDocument()
  })

  it('renders Get Started buttons', async () => {
    const user = userEvent.setup()
    render(<Pricing />)
    const buttons = screen.getAllByRole('button', { name: 'Get Started' })
    expect(buttons).toHaveLength(3)
    const first = buttons[0]
    expect(first).toBeDefined()
    await user.click(first!)
  })

  it('displays card descriptions', () => {
    render(<Pricing />)
    expect(screen.getByText(/Basic plan for small/)).toBeInTheDocument()
    expect(screen.getByText(/Advanced plan with/)).toBeInTheDocument()
    expect(screen.getByText(/Starter plan for newcomers/)).toBeInTheDocument()
  })
})
