import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PopularMenu } from './PopularMenu'

describe('PopularMenu', () => {
  it('renders the section heading', () => {
    render(<PopularMenu />)
    expect(screen.getByRole('heading', { name: /Delicious Food Menu/i })).toBeInTheDocument()
    expect(screen.getByText(/Popular Menu/i)).toBeInTheDocument()
  })

  it('renders all tab buttons', () => {
    render(<PopularMenu />)
    expect(screen.getByRole('button', { name: /special/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /breakfast/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /lunch/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /dinner/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /snacks/i })).toBeInTheDocument()
  })

  it('shows Special items by default', () => {
    render(<PopularMenu />)
    expect(screen.getByRole('heading', { name: /Pork Sandwich/i })).toBeInTheDocument()
    expect(screen.getAllByText('$40.00').length).toBeGreaterThan(0)
  })

  it('switches tabs on click', async () => {
    const user = userEvent.setup()
    render(<PopularMenu />)
    await user.click(screen.getByRole('button', { name: /breakfast/i }))
    expect(screen.getByRole('button', { name: /breakfast/i })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })
})
