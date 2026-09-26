import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import OffcanvasMenu from './OffcanvasMenu'

describe('OffcanvasMenu', () => {
  it('renders all nav links and social links when open', () => {
    render(<OffcanvasMenu open={true} onClose={vi.fn()} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getAllByText('Facebook').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Twitter').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Instagram').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Component Dock').length).toBeGreaterThan(0)
  })

  it('calls onClose when close button is clicked', async () => {
    const onClose = vi.fn()
    render(<OffcanvasMenu open={true} onClose={onClose} />)
    await userEvent.click(screen.getByLabelText('Close menu'))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('has aria-hidden true when closed', () => {
    const { container } = render(<OffcanvasMenu open={false} onClose={vi.fn()} />)
    const wrapper = container.querySelector('[aria-hidden="true"]')
    expect(wrapper).toBeInTheDocument()
  })
})
