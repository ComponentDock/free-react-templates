import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  const defaultProps = {
    activeSection: 'section-home',
    mobileMenuOpen: false,
    onToggleMobile: vi.fn(),
    onCloseMobile: vi.fn(),
  }

  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the logo', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Lumier Photo')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Photos')).toBeInTheDocument()
    expect(screen.getByText('Biography')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('highlights the active section', () => {
    render(<Sidebar {...defaultProps} activeSection="section-photos" />)
    const photosLink = screen.getByText('Photos')
    expect(photosLink.className).toContain('text-brand')
  })

  it('calls onToggleMobile when toggle button is clicked', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<Sidebar {...defaultProps} onToggleMobile={onToggle} />)
    await user.click(screen.getByLabelText('Toggle menu'))
    expect(onToggle).toHaveBeenCalled()
  })

  it('calls onCloseMobile when close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<Sidebar {...defaultProps} mobileMenuOpen={true} onCloseMobile={onClose} />)
    await user.click(screen.getByLabelText('Close menu'))
    expect(onClose).toHaveBeenCalled()
  })

  it('renders social media links', () => {
    render(<Sidebar {...defaultProps} />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('smoothly scrolls to section on nav link click', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    const scrollIntoView = vi.fn()
    HTMLDivElement.prototype.scrollIntoView = scrollIntoView

    render(<Sidebar {...defaultProps} onCloseMobile={onClose} />)

    const mockEl = document.createElement('div')
    mockEl.id = 'section-photos'
    vi.spyOn(document, 'getElementById').mockReturnValue(mockEl)

    await user.click(screen.getByText('Photos'))
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
    expect(onClose).toHaveBeenCalled()
  })

  it('handles click when section element does not exist', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    vi.spyOn(document, 'getElementById').mockReturnValue(null)

    render(<Sidebar {...defaultProps} onCloseMobile={onClose} />)
    await user.click(screen.getByText('Photos'))
    expect(onClose).toHaveBeenCalled()
  })

  it('clicking logo link scrolls to home and closes mobile', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    const scrollIntoView = vi.fn()
    HTMLDivElement.prototype.scrollIntoView = scrollIntoView

    render(<Sidebar {...defaultProps} onCloseMobile={onClose} />)

    const mockEl = document.createElement('div')
    mockEl.id = 'section-home'
    vi.spyOn(document, 'getElementById').mockReturnValue(mockEl)

    await user.click(screen.getByText('Lumier Photo'))
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
    expect(onClose).toHaveBeenCalled()
  })
})
