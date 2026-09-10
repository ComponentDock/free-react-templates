import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders section heading', () => {
    render(<FAQ />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders all question buttons', () => {
    render(<FAQ />)
    expect(screen.getByText('How do I open a new account?')).toBeInTheDocument()
    expect(screen.getByText('What documents do I need?')).toBeInTheDocument()
    expect(screen.getByText('Are there any hidden fees?')).toBeInTheDocument()
  })

  it('toggles answer visibility on click', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const btn = screen.getByText('How do I open a new account?')
    expect(btn).toHaveAttribute('aria-expanded', 'false')

    // Answer should not be visible initially
    expect(screen.queryByText(/online by filling out/)).not.toBeInTheDocument()

    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/online by filling out/)).toBeInTheDocument()

    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/online by filling out/)).not.toBeInTheDocument()
  })
})
