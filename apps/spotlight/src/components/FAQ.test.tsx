import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the section heading', () => {
    render(<FAQ />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders all 4 FAQ questions', () => {
    render(<FAQ />)
    expect(screen.getByText('How to list my item?')).toBeInTheDocument()
    expect(screen.getByText('Is it free?')).toBeInTheDocument()
    expect(screen.getByText('How the system works?')).toBeInTheDocument()
    expect(screen.getByText('Is this available in my country?')).toBeInTheDocument()
  })

  it('starts with all answers collapsed', () => {
    render(<FAQ />)
    expect(screen.queryByText(/Creating a listing on Spotlight/)).not.toBeInTheDocument()
  })

  it('expands an answer when question is clicked', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    await user.click(screen.getByText('How to list my item?'))
    expect(screen.getByText(/Creating a listing on Spotlight is simple/)).toBeInTheDocument()
  })

  it('collapses an answer when question is clicked again', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    await user.click(screen.getByText('How to list my item?'))
    expect(screen.getByText(/Creating a listing on Spotlight is simple/)).toBeInTheDocument()
    await user.click(screen.getByText('How to list my item?'))
    expect(screen.queryByText(/Creating a listing on Spotlight is simple/)).not.toBeInTheDocument()
  })

  it('sets aria-expanded correctly', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const button = screen.getByRole('button', { name: 'How to list my item?' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows different answer when different question is clicked', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    await user.click(screen.getByText('Is it free?'))
    expect(screen.getByText(/basic listings on Spotlight are completely free/)).toBeInTheDocument()
  })
})
