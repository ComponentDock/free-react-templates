import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Support } from './Support'

describe('Support', () => {
  it('renders section heading and description', () => {
    render(<Support />)
    expect(screen.getByText('Why Join Us')).toBeInTheDocument()
    expect(screen.getByText(/Why You Should Join Us/)).toBeInTheDocument()
    expect(screen.getByText(/Joining our cause/)).toBeInTheDocument()
  })

  it('renders join button', () => {
    render(<Support />)
    expect(screen.getByRole('button', { name: /join us now/i })).toBeInTheDocument()
  })

  it('renders floating counter badges', () => {
    render(<Support />)
    expect(screen.getByText('950+')).toBeInTheDocument()
    expect(screen.getByText('230+')).toBeInTheDocument()
    expect(screen.getByText(/Poaching cases/)).toBeInTheDocument()
    expect(screen.getByText(/Volunteers/)).toBeInTheDocument()
  })

  it('join button is clickable', async () => {
    const user = userEvent.setup()
    render(<Support />)
    const btn = screen.getByRole('button', { name: /join us now/i })
    await user.click(btn)
    expect(btn).toBeInTheDocument()
  })
})
