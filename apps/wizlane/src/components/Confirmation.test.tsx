import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Confirmation } from './Confirmation'

describe('Confirmation', () => {
  it('renders the success heading', () => {
    render(<Confirmation onReset={vi.fn()} />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Order Placed!')
  })

  it('renders the success message', () => {
    render(<Confirmation onReset={vi.fn()} />)
    expect(screen.getByText(/Your order has been successfully placed/)).toBeInTheDocument()
  })

  it('renders the Start New Order button', () => {
    render(<Confirmation onReset={vi.fn()} />)
    expect(screen.getByRole('button', { name: /start new order/i })).toBeInTheDocument()
  })

  it('calls onReset when clicking Start New Order', async () => {
    const user = userEvent.setup()
    const onReset = vi.fn()
    render(<Confirmation onReset={onReset} />)
    await user.click(screen.getByRole('button', { name: /start new order/i }))
    expect(onReset).toHaveBeenCalledTimes(1)
  })
})
