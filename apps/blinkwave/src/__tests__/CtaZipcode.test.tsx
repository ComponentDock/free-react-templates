import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { CtaZipcode } from '../components/CtaZipcode'

describe('CtaZipcode', () => {
  it('renders the headline about broadband availability', () => {
    render(<CtaZipcode />)
    expect(screen.getByText(/super fast broadband availability/i)).toBeInTheDocument()
  })

  it('renders the zipcode input', () => {
    render(<CtaZipcode />)
    expect(screen.getByLabelText('Zipcode')).toBeInTheDocument()
  })

  it('renders the Check Now button', () => {
    render(<CtaZipcode />)
    expect(screen.getByText('Check Now')).toBeInTheDocument()
  })

  it('allows typing in the zipcode input', async () => {
    const user = userEvent.setup()
    render(<CtaZipcode />)
    const input = screen.getByLabelText('Zipcode')
    await user.type(input, '12345')
    expect(input).toHaveValue('12345')
  })

  it('submits the form without error', async () => {
    const user = userEvent.setup()
    render(<CtaZipcode />)
    const input = screen.getByLabelText('Zipcode')
    await user.type(input, '90210')
    await user.click(screen.getByText('Check Now'))
    expect(input).toHaveValue('90210')
  })
})
