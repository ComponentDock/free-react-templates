import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Converter } from './Converter'
import { describe, expect, it } from 'vitest'

describe('Converter', () => {
  it('displays the section heading', () => {
    render(<Converter />)
    expect(screen.getByText('The Currency Converter')).toBeInTheDocument()
  })

  it('displays the description text', () => {
    render(<Converter />)
    expect(screen.getByText(/Who are in extremely love/)).toBeInTheDocument()
  })

  it('renders BTC and USD inputs', () => {
    render(<Converter />)
    expect(screen.getByLabelText('Bitcoin amount')).toBeInTheDocument()
    expect(screen.getByLabelText('Dollar amount')).toBeInTheDocument()
  })

  it('renders the Convert Now button', async () => {
    const user = userEvent.setup()
    render(<Converter />)
    const btn = screen.getByRole('button', { name: 'Convert Now' })
    expect(btn).toBeInTheDocument()
    await user.click(btn)
  })
})
