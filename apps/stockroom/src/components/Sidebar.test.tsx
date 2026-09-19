import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders logo', () => {
    render(<Sidebar onSearchOpen={vi.fn()} />)
    expect(screen.getByText('Stockroom')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Sidebar onSearchOpen={vi.fn()} />)
    for (const link of ['Home', 'Shop', 'Product', 'Cart', 'Checkout']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders CTA buttons', () => {
    render(<Sidebar onSearchOpen={vi.fn()} />)
    expect(screen.getByText('%Discount%')).toBeInTheDocument()
    expect(screen.getByText('New this week')).toBeInTheDocument()
  })

  it('renders cart, favourite, and search buttons', () => {
    render(<Sidebar onSearchOpen={vi.fn()} />)
    expect(screen.getByText('Cart', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('Favourite')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Sidebar onSearchOpen={vi.fn()} />)
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })

  it('calls onSearchOpen when search button is clicked', async () => {
    const user = userEvent.setup()
    const onSearchOpen = vi.fn()
    render(<Sidebar onSearchOpen={onSearchOpen} />)
    await user.click(screen.getByText('Search'))
    expect(onSearchOpen).toHaveBeenCalledOnce()
  })

  it('toggles mobile nav on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Sidebar onSearchOpen={vi.fn()} />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    // Sidebar should be visible (translated to 0)
    const aside = screen.getByRole('complementary')
    expect(aside.className).toContain('translate-x-0')
  })
})
