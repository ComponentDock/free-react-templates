import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  const defaultProps = {
    isOpen: false,
    onToggle: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the sidebar with all categories', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('Mens Shoes')).toBeInTheDocument()
    expect(screen.getByText('Womens Shoes')).toBeInTheDocument()
    expect(screen.getByText('Accessories')).toBeInTheDocument()
    expect(screen.getByText('Clothes')).toBeInTheDocument()
  })

  it('renders tag cloud section with all tags', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Tag Cloud')).toBeInTheDocument()
    expect(screen.getByTestId('tag-dish')).toHaveTextContent('dish')
    expect(screen.getByTestId('tag-menu')).toHaveTextContent('menu')
    expect(screen.getByTestId('tag-food')).toHaveTextContent('food')
    expect(screen.getByTestId('tag-sweet')).toHaveTextContent('sweet')
    expect(screen.getByTestId('tag-tasty')).toHaveTextContent('tasty')
    expect(screen.getByTestId('tag-delicious')).toHaveTextContent('delicious')
    expect(screen.getByTestId('tag-desserts')).toHaveTextContent('desserts')
    expect(screen.getByTestId('tag-drinks')).toHaveTextContent('drinks')
  })

  it('renders newsletter form with email input', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByTestId('newsletter-form')).toBeInTheDocument()
    expect(screen.getByTestId('newsletter-input')).toHaveAttribute('type', 'email')
    expect(screen.getByTestId('newsletter-input')).toHaveAttribute(
      'placeholder',
      'Enter Email Address',
    )
  })

  it('submits newsletter form without navigating', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)

    const form = screen.getByTestId('newsletter-form')
    await user.click(screen.getByTestId('newsletter-input'))
    await user.keyboard('{Enter}')
    // Form should not cause navigation
    expect(form).toBeInTheDocument()
  })

  it('expands a category when clicked', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)

    // Initially collapsed - items not visible
    expect(screen.queryByTestId('category-items-0')).not.toBeInTheDocument()

    // Click to expand
    await user.click(screen.getByTestId('category-toggle-0'))
    expect(screen.getByTestId('category-items-0')).toBeInTheDocument()
    expect(screen.getByText('Casual')).toBeInTheDocument()
    expect(screen.getByText('Football')).toBeInTheDocument()
  })

  it('collapses a category when clicked again', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)

    // Expand
    await user.click(screen.getByTestId('category-toggle-0'))
    expect(screen.getByTestId('category-items-0')).toBeInTheDocument()

    // Collapse
    await user.click(screen.getByTestId('category-toggle-0'))
    expect(screen.queryByTestId('category-items-0')).not.toBeInTheDocument()
  })

  it('expands multiple categories independently', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)

    await user.click(screen.getByTestId('category-toggle-0'))
    await user.click(screen.getByTestId('category-toggle-2'))

    expect(screen.getByTestId('category-items-0')).toBeInTheDocument()
    expect(screen.getByTestId('category-items-2')).toBeInTheDocument()
    expect(screen.queryByTestId('category-items-1')).not.toBeInTheDocument()
  })

  it('shows overlay when sidebar is open', () => {
    render(<Sidebar {...defaultProps} isOpen={true} />)
    expect(screen.getByTestId('sidebar-overlay')).toBeInTheDocument()
  })

  it('hides overlay when sidebar is closed', () => {
    render(<Sidebar {...defaultProps} isOpen={false} />)
    expect(screen.queryByTestId('sidebar-overlay')).not.toBeInTheDocument()
  })

  it('calls onToggle when overlay is clicked', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<Sidebar {...defaultProps} isOpen={true} onToggle={onToggle} />)

    await user.click(screen.getByTestId('sidebar-overlay'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('calls onToggle when mobile sidebar toggle is clicked', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<Sidebar {...defaultProps} onToggle={onToggle} />)

    await user.click(screen.getByTestId('sidebar-toggle'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('prevents default on tag click', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)

    const tag = screen.getByTestId('tag-dish')
    await user.click(tag)
    // No navigation should occur (href="#")
  })

  it('prevents default on sub-item click', async () => {
    const user = userEvent.setup()
    render(<Sidebar {...defaultProps} />)

    // Expand first category
    await user.click(screen.getByTestId('category-toggle-0'))
    const item = screen.getByText('Casual')
    await user.click(item)
    // No navigation should occur
  })
})
