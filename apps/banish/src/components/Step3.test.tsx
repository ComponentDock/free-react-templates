import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Step3 } from './Step3'

describe('Step3', () => {
  it('renders Payment Method heading', () => {
    render(<Step3 />)
    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent('Payment Method')
  })

  it('renders 8 payment tiles', () => {
    render(<Step3 />)
    const tiles = screen.getAllByRole('button', {
      name: /visa|mastercard|giropay|carte bleue|paypal|ideal|mister cash|maestro/i,
    })
    expect(tiles).toHaveLength(8)
  })

  it('has Visa tile active by default', () => {
    render(<Step3 />)
    const visa = screen.getByRole('button', { name: /visa/i })
    expect(visa).toHaveAttribute('aria-pressed', 'true')
  })

  it('switches active tile on click', async () => {
    render(<Step3 />)
    const mastercard = screen.getByRole('button', { name: /mastercard/i })
    await userEvent.click(mastercard)
    expect(mastercard).toHaveAttribute('aria-pressed', 'true')
    const visa = screen.getByRole('button', { name: /visa/i })
    expect(visa).toHaveAttribute('aria-pressed', 'false')
  })

  it('renders the avatar', () => {
    render(<Step3 />)
    expect(screen.getByAltText('Profile avatar')).toBeInTheDocument()
  })

  it('has correct tabpanel role', () => {
    render(<Step3 />)
    expect(screen.getByRole('tabpanel', { name: /step 3/i })).toBeInTheDocument()
  })
})
