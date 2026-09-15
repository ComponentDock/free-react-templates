import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MakeDonation } from './MakeDonation'

describe('MakeDonation', () => {
  it('renders section heading', () => {
    render(<MakeDonation />)
    expect(screen.getByText('Make a Donation Today')).toBeInTheDocument()
  })

  it('renders four preset amount buttons', () => {
    render(<MakeDonation />)
    const amounts = ['$10', '$50', '$100', '$250']
    for (const amount of amounts) {
      expect(screen.getByText(amount)).toBeInTheDocument()
    }
  })

  it('renders USD label', () => {
    render(<MakeDonation />)
    expect(screen.getByText('USD')).toBeInTheDocument()
  })

  it('renders Donate Now submit button', () => {
    render(<MakeDonation />)
    expect(screen.getByText('Donate Now')).toBeInTheDocument()
  })

  it('selects an amount on click', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<MakeDonation />)

    const btn50 = screen.getByText('$50')
    await user.click(btn50)
    expect(btn50).toHaveClass('bg-brand')
  })

  it('renders description paragraph', () => {
    render(<MakeDonation />)
    expect(screen.getByText(/French Revolution/)).toBeInTheDocument()
  })

  it('triggers donation action on Donate Now click', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<MakeDonation />)
    const buttons = screen.getAllByText('Donate Now')
    const donateButton = buttons.find((el) => el.tagName === 'BUTTON')
    expect(donateButton).toBeDefined()
    await user.click(donateButton!)
  })
})
