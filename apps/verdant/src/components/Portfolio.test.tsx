import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders section heading and filter buttons', () => {
    render(<Portfolio />)
    expect(screen.getByText(/our portfolio/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /garden/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /home design/i })).toBeInTheDocument()
  })

  it('shows all items by default', () => {
    render(<Portfolio />)
    const items = screen.getAllByAltText(/minimal flower store/i)
    expect(items).toHaveLength(7)
  })

  it('filters items when a category is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: /garden/i }))
    const items = screen.getAllByAltText(/minimal flower store/i)
    expect(items.length).toBeLessThan(7)
  })
})
