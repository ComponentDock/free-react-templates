import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavOverlay } from './NavOverlay'

describe('NavOverlay', () => {
  it('does not render when closed', () => {
    render(<NavOverlay isOpen={false} onClose={vi.fn()} />)
    expect(screen.queryByText('Home')).not.toBeInTheDocument()
  })

  it('renders all nav links when open', () => {
    render(<NavOverlay isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Features')).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<NavOverlay isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('RSS')).toBeInTheDocument()
  })

  it('renders search input', () => {
    render(<NavOverlay isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('calls onClose when a nav link is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<NavOverlay isOpen={true} onClose={onClose} />)
    await user.click(screen.getByText('About'))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('has dialog role with accessible label', () => {
    render(<NavOverlay isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByRole('dialog', { name: /navigation menu/i })).toBeInTheDocument()
  })
})
