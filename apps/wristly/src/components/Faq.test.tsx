import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the FAQ heading', () => {
    render(<Faq />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders all 4 FAQ questions', () => {
    render(<Faq />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(4)
  })

  it('shows the first answer by default', () => {
    render(<Faq />)
    expect(screen.getAllByText(/Lorem ipsum/).length).toBeGreaterThanOrEqual(1)
  })

  it('toggles answers on click', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const buttons = screen.getAllByRole('button')
    const first = buttons[0]!
    const second = buttons[1]!

    // First is open, click to close
    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')

    // Click second to open
    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
  })
})
