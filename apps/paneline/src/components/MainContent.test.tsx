import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MainContent } from './MainContent'

describe('MainContent', () => {
  const defaultProps = {
    onToggle: vi.fn(),
    sidebarOpen: false,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the main content area with heading', () => {
    render(<MainContent {...defaultProps} />)
    expect(screen.getByTestId('main-content')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Sidebar #08')
  })

  it('renders paragraph content', () => {
    render(<MainContent {...defaultProps} />)
    const paragraphs = screen.getAllByText(/Lorem ipsum/)
    expect(paragraphs.length).toBeGreaterThanOrEqual(2)
  })

  it('calls onToggle when mobile toggle is clicked', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<MainContent {...defaultProps} onToggle={onToggle} />)

    await user.click(screen.getByTestId('main-toggle'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
