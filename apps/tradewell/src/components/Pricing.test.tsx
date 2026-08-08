import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading and three tiers with feature lists', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Simple, Transparent Pricing' })).toBeInTheDocument()
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Pro')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
  })

  it('shows monthly prices by default', () => {
    render(<Pricing />)

    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getByText('$9.99')).toBeInTheDocument()
    expect(screen.getByText('$29.99')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start Pro Trial' })).toBeInTheDocument()
  })

  it('switches to yearly prices when the billing toggle is pressed', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    await user.click(screen.getByRole('switch', { name: 'Toggle billing period' }))

    expect(screen.getByText('$7.99')).toBeInTheDocument()
    expect(screen.getByText('$23.99')).toBeInTheDocument()
    expect(screen.getByText('Save 20%')).toBeInTheDocument()
  })
})
