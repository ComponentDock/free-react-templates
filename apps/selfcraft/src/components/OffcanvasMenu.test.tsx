import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OffcanvasMenu } from './OffcanvasMenu'

describe('OffcanvasMenu', () => {
  it('renders navigation links', () => {
    const { container } = render(
      <OffcanvasMenu open={false} currentView="bio" onNavigate={() => {}} />,
    )

    const buttons = container.querySelectorAll('[role="dialog"] button')
    const labels = Array.from(buttons).map((b) => b.textContent)
    expect(labels).toContain('Bio')
    expect(labels).toContain('Portfolio')
    expect(labels).toContain('Resume')
    expect(labels).toContain('Contact')
  })

  it('renders social links', () => {
    render(<OffcanvasMenu open={false} currentView="bio" onNavigate={() => {}} />)

    expect(screen.getByText('Twitter')).toBeInTheDocument()
    expect(screen.getByText('Facebook')).toBeInTheDocument()
    expect(screen.getByText('Instagram')).toBeInTheDocument()
  })

  it('highlights the active view', () => {
    render(<OffcanvasMenu open={true} currentView="portfolio" onNavigate={() => {}} />)

    const portfolioBtn = screen.getByRole('button', { name: 'Portfolio' })
    expect(portfolioBtn.className).toContain('text-brand')

    const bioBtn = screen.getByRole('button', { name: 'Bio' })
    expect(bioBtn.className).toContain('text-white')
  })

  it('calls onNavigate with the correct view when a link is clicked', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()
    render(<OffcanvasMenu open={true} currentView="bio" onNavigate={onNavigate} />)

    await user.click(screen.getByRole('button', { name: 'Portfolio' }))
    expect(onNavigate).toHaveBeenCalledWith('portfolio')

    await user.click(screen.getByRole('button', { name: 'Contact' }))
    expect(onNavigate).toHaveBeenCalledWith('contact')
  })

  it('has correct background color', () => {
    const { container } = render(
      <OffcanvasMenu open={false} currentView="bio" onNavigate={() => {}} />,
    )

    const dialog = container.querySelector('[role="dialog"]') as HTMLElement
    expect(dialog).not.toBeNull()
    expect(dialog.className).toContain('bg-navy')
  })

  it('has correct width and positioning', () => {
    const { container } = render(
      <OffcanvasMenu open={false} currentView="bio" onNavigate={() => {}} />,
    )

    const dialog = container.querySelector('[role="dialog"]') as HTMLElement
    expect(dialog).not.toBeNull()
    expect(dialog.className).toContain('w-[240px]')
    expect(dialog.className).toContain('fixed')
  })
})
