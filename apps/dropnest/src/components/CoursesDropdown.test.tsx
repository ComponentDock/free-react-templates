import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { CoursesDropdown } from './CoursesDropdown'

describe('CoursesDropdown', () => {
  it('renders the trigger button with "Courses" text', () => {
    render(<CoursesDropdown />)
    expect(screen.getByRole('button', { name: /courses/i })).toBeInTheDocument()
  })

  it('dropdown is closed initially', () => {
    render(<CoursesDropdown />)
    expect(screen.queryByText('Design')).not.toBeInTheDocument()
    expect(screen.queryByText('Development')).not.toBeInTheDocument()
    expect(screen.queryByText('Marketing')).not.toBeInTheDocument()
  })

  it('opens the dropdown when trigger is clicked', async () => {
    const user = userEvent.setup()
    render(<CoursesDropdown />)
    await user.click(screen.getByRole('button', { name: /courses/i }))
    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('Development')).toBeInTheDocument()
    expect(screen.getByText('Marketing')).toBeInTheDocument()
  })

  it('shows course links for each category when open', async () => {
    const user = userEvent.setup()
    render(<CoursesDropdown />)
    await user.click(screen.getByRole('button', { name: /courses/i }))

    expect(screen.getByText('UI/UX Fundamentals')).toBeInTheDocument()
    expect(screen.getByText('React Mastery')).toBeInTheDocument()
    expect(screen.getByText('SEO Foundations')).toBeInTheDocument()
  })

  it('closes the dropdown on second click', async () => {
    const user = userEvent.setup()
    render(<CoursesDropdown />)
    const trigger = screen.getByRole('button', { name: /courses/i })

    await user.click(trigger)
    expect(screen.getByText('Design')).toBeInTheDocument()

    await user.click(trigger)
    expect(screen.queryByText('Design')).not.toBeInTheDocument()
  })

  it('closes the dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <CoursesDropdown />
        <button type="button">Outside</button>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /courses/i }))
    expect(screen.getByText('Design')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /outside/i }))
    expect(screen.queryByText('Design')).not.toBeInTheDocument()
  })

  it('closes the dropdown on Escape key', async () => {
    const user = userEvent.setup()
    render(<CoursesDropdown />)
    await user.click(screen.getByRole('button', { name: /courses/i }))
    expect(screen.getByText('Design')).toBeInTheDocument()

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    })
    expect(screen.queryByText('Design')).not.toBeInTheDocument()
  })

  it('does not close on non-Escape key', async () => {
    const user = userEvent.setup()
    render(<CoursesDropdown />)
    await user.click(screen.getByRole('button', { name: /courses/i }))
    expect(screen.getByText('Design')).toBeInTheDocument()

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
    })
    expect(screen.getByText('Design')).toBeInTheDocument()
  })

  it('sets aria-expanded correctly', async () => {
    const user = userEvent.setup()
    render(<CoursesDropdown />)
    const trigger = screen.getByRole('button', { name: /courses/i })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('has aria-haspopup on trigger', () => {
    render(<CoursesDropdown />)
    const trigger = screen.getByRole('button', { name: /courses/i })
    expect(trigger).toHaveAttribute('aria-haspopup', 'true')
  })

  it('all course links have href="#"', async () => {
    const user = userEvent.setup()
    render(<CoursesDropdown />)
    await user.click(screen.getByRole('button', { name: /courses/i }))

    const links = screen.getAllByRole('link')
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('accepts custom categories via props', async () => {
    const user = userEvent.setup()
    const custom = [{ title: 'Music', courses: ['Guitar 101', 'Piano Basics'] }]
    render(<CoursesDropdown categories={custom} />)
    await user.click(screen.getByRole('button', { name: /courses/i }))

    expect(screen.getByText('Music')).toBeInTheDocument()
    expect(screen.getByText('Guitar 101')).toBeInTheDocument()
    expect(screen.queryByText('Design')).not.toBeInTheDocument()
  })

  it('each category shows at least 3 course links by default', async () => {
    const user = userEvent.setup()
    render(<CoursesDropdown />)
    await user.click(screen.getByRole('button', { name: /courses/i }))

    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(9)
  })

  it('calls onToggle when dropdown opens or closes', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<CoursesDropdown onToggle={onToggle} />)
    await user.click(screen.getByRole('button', { name: /courses/i }))
    expect(onToggle).toHaveBeenCalledWith(true)

    await user.click(screen.getByRole('button', { name: /courses/i }))
    expect(onToggle).toHaveBeenCalledWith(false)
  })
})
