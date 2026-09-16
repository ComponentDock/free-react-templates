import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders monthly prices by default', () => {
    render(<Pricing />)
    expect(screen.getByText('$10')).toBeInTheDocument()
    expect(screen.getByText('$50')).toBeInTheDocument()
    expect(screen.getByText('$80')).toBeInTheDocument()
    expect(screen.getByText('$100')).toBeInTheDocument()
  })

  it('switches to yearly tab', async () => {
    render(<Pricing />)
    await userEvent.click(screen.getByRole('button', { name: /yearly/i }))
    expect(screen.getByText('$10')).toBeInTheDocument()
  })
})
