import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'

describe('Header', () => {
  it('renders logo and menu button', () => {
    const onToggle = vi.fn()
    render(<Header onMenuToggle={onToggle} />)
    expect(screen.getByText('Cassini')).toBeInTheDocument()
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('calls onMenuToggle when hamburger is clicked', async () => {
    const onToggle = vi.fn()
    render(<Header onMenuToggle={onToggle} />)
    await userEvent.click(screen.getByLabelText('Open menu'))
    expect(onToggle).toHaveBeenCalledOnce()
  })
})
