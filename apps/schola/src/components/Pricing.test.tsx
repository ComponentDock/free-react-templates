import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three plans', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /Choose Your Learning Path/ })).toBeInTheDocument()
    expect(screen.getByText('Explorer')).toBeInTheDocument()
    expect(screen.getByText('Professional')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })

  it('shows monthly prices by default', () => {
    render(<Pricing />)
    expect(screen.getByText('$39')).toBeInTheDocument()
    expect(screen.getByText('$79')).toBeInTheDocument()
  })

  it('switches to yearly prices when the billing toggle is used', async () => {
    const user = userEvent.setup()
    render(<Pricing />)
    await user.click(screen.getByRole('switch', { name: /switch to yearly billing/i }))
    expect(screen.getByText('$348')).toBeInTheDocument()
    expect(screen.getByText('$708')).toBeInTheDocument()
    await user.click(screen.getByRole('switch', { name: /switch to monthly billing/i }))
    expect(screen.getByText('$39')).toBeInTheDocument()
  })
})
