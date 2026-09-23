import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders section title and 3 pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByText('Our Pricing')).toBeInTheDocument()
    expect(screen.getByText('Personal')).toBeInTheDocument()
    expect(screen.getAllByText('Enterprise')).toHaveLength(2)
  })

  it('shows monthly prices by default', () => {
    render(<Pricing />)
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
  })

  it('toggles to yearly prices', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    const toggle = screen.getByRole('button', { name: /switch to yearly/i })
    await user.click(toggle)

    expect(screen.getByText('$299')).toBeInTheDocument()
    expect(screen.getByText('$599')).toBeInTheDocument()
    expect(screen.getByText('$1,999')).toBeInTheDocument()
    expect(screen.getByText('Save 25%')).toBeInTheDocument()
  })

  it('toggles back to monthly', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    const toggle = screen.getByRole('button', { name: /switch to yearly/i })
    await user.click(toggle)
    await user.click(toggle)

    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.queryByText('Save 25%')).not.toBeInTheDocument()
  })
})
