import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Services } from './Services'
import { describe, expect, it } from 'vitest'

describe('Services', () => {
  it('renders 3 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Get Paid through Bitcoin')).toBeInTheDocument()
    expect(screen.getByText('Bitcoin Exchange Analysis')).toBeInTheDocument()
    expect(screen.getByText('Send & Receive Bitcoin')).toBeInTheDocument()
  })

  it('displays descriptions for each service', () => {
    render(<Services />)
    expect(screen.getByText(/Receive payments globally/)).toBeInTheDocument()
    expect(screen.getByText(/Track market trends/)).toBeInTheDocument()
    expect(screen.getByText(/Fast, secure transfers/)).toBeInTheDocument()
  })

  it('has clickable service titles', async () => {
    const user = userEvent.setup()
    render(<Services />)
    const link = screen.getByRole('link', { name: 'Get Paid through Bitcoin' })
    expect(link).toHaveAttribute('href', '#features')
    await user.click(link)
  })
})
