import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AccordionItem } from './AccordionItem'

const defaultProps = {
  tag: 'people',
  title: 'Test Title',
  authorName: 'Test Author',
  authorAvatar: 'https://example.com/avatar.jpg',
  image: 'https://example.com/image.jpg',
  isExpanded: true,
  onToggle: vi.fn(),
}

describe('AccordionItem', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders expanded content when isExpanded is true', () => {
    render(<AccordionItem {...defaultProps} />)
    expect(screen.getByText('people')).toBeDefined()
    expect(screen.getByText('Test Title')).toBeDefined()
    expect(screen.getByText('Test Author')).toBeDefined()
  })

  it('hides expanded content when isExpanded is false', () => {
    render(<AccordionItem {...defaultProps} isExpanded={false} />)
    expect(screen.queryByText('Test Title')).toBeNull()
    expect(screen.queryByText('Test Author')).toBeNull()
  })

  it('calls onToggle when clicked', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<AccordionItem {...defaultProps} onToggle={onToggle} />)
    await user.click(screen.getByRole('button'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('calls onToggle on Enter key', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<AccordionItem {...defaultProps} onToggle={onToggle} />)
    const button = screen.getByRole('button')
    button.focus()
    await user.keyboard('{Enter}')
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('calls onToggle on Space key', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<AccordionItem {...defaultProps} onToggle={onToggle} />)
    const button = screen.getByRole('button')
    button.focus()
    await user.keyboard(' ')
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('does not call onToggle on unrelated key', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<AccordionItem {...defaultProps} onToggle={onToggle} />)
    const button = screen.getByRole('button')
    button.focus()
    await user.keyboard('a')
    expect(onToggle).not.toHaveBeenCalled()
  })

  it('displays author avatar image', () => {
    render(<AccordionItem {...defaultProps} />)
    const img = screen.getByAltText('Test Author')
    expect(img).toBeDefined()
    expect((img as HTMLImageElement).src).toContain('avatar.jpg')
  })
})
