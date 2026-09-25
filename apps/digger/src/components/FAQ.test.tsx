import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders FAQ section with all questions', () => {
    render(<FAQ />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
    expect(screen.getByText('What services does Digger offer?')).toBeInTheDocument()
    expect(
      screen.getByText('How many years of experience does your team have?'),
    ).toBeInTheDocument()
  })

  it('toggles answer visibility on click', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const question = screen.getByText('What services does Digger offer?')
    // Answer should not be visible initially
    expect(screen.queryByText(/comprehensive construction/)).not.toBeInTheDocument()
    // Click to open
    await user.click(question)
    expect(screen.getByText(/comprehensive construction/)).toBeInTheDocument()
    // Click again to close
    await user.click(question)
    expect(screen.queryByText(/comprehensive construction/)).not.toBeInTheDocument()
  })
})
