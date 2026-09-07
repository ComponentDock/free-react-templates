import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Step2 } from './Step2'

describe('Step2', () => {
  it('renders Address, City, and Zip Code fields', () => {
    render(<Step2 />)
    expect(screen.getByPlaceholderText('Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Zip Code')).toBeInTheDocument()
  })

  it('renders the country dropdown', () => {
    render(<Step2 />)
    expect(screen.getByText('Your country')).toBeInTheDocument()
  })

  it('opens the country dropdown', async () => {
    const user = userEvent.setup()
    render(<Step2 />)
    await user.click(screen.getByRole('button', { name: /your country/i }))
    expect(screen.getByRole('option', { name: 'United States' })).toBeInTheDocument()
  })
})
