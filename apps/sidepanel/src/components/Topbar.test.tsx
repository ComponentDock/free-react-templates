import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Topbar } from './Topbar'

describe('Topbar', () => {
  const onMenuClick = vi.fn()

  beforeEach(() => {
    onMenuClick.mockClear()
  })

  it('renders the menu button with correct aria-label', () => {
    render(<Topbar onMenuClick={onMenuClick} />)
    const menuBtn = screen.getByRole('button', { name: /open sidebar menu/i })
    expect(menuBtn).toBeInTheDocument()
  })

  it('calls onMenuClick when menu button is clicked', async () => {
    const user = userEvent.setup()
    render(<Topbar onMenuClick={onMenuClick} />)
    const menuBtn = screen.getByRole('button', { name: /open sidebar menu/i })
    await user.click(menuBtn)
    expect(onMenuClick).toHaveBeenCalledTimes(1)
  })

  it('renders top navigation links', () => {
    render(<Topbar onMenuClick={onMenuClick} />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Home as bold/active link', () => {
    render(<Topbar onMenuClick={onMenuClick} />)
    const homeLinks = screen.getAllByText('Home')
    const topbarHome = homeLinks.find(
      (el) => el.closest('nav')?.getAttribute('aria-label') === 'Top navigation',
    )
    expect(topbarHome).toBeDefined()
    expect(topbarHome).toHaveClass('font-bold')
  })

  it('hides top nav links on mobile (hidden lg:block)', () => {
    render(<Topbar onMenuClick={onMenuClick} />)
    const nav = screen.getByLabelText('Top navigation')
    expect(nav).toHaveClass('hidden', 'lg:block')
  })
})
