import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InboxHeader } from './InboxHeader'

describe('InboxHeader', () => {
  it('is one h1 carrying the title, the counter and the hidden unit', () => {
    render(<InboxHeader unread={3} onMarkAllRead={() => {}} />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveAttribute('id', 'notebell-title')
    expect(heading).toHaveTextContent('Notifications')
    expect(heading.getAttribute('class')).toContain('text-[24px]')
    expect(heading.getAttribute('class')).toContain('font-bold')
    expect(heading.getAttribute('class')).toContain('tracking-[-0.02em]')
    expect(heading).toHaveAccessibleName(/Notifications\s*3\s*unread/)
  })

  it('draws the counter as a violet 26 px pill', () => {
    const { container } = render(<InboxHeader unread={3} onMarkAllRead={() => {}} />)
    const pill = container.querySelector('h1 > span') as HTMLElement

    expect(pill).toHaveTextContent('3')
    expect(pill.getAttribute('class')).toContain('h-[26px]')
    expect(pill.getAttribute('class')).toContain('min-w-[26px]')
    expect(pill.getAttribute('class')).toContain('rounded-full')
    expect(pill.getAttribute('class')).toContain('bg-accent')
    expect(pill.getAttribute('class')).toContain('text-ground')
    expect(pill.getAttribute('class')).not.toContain('bg-count-zero')
  })

  it('turns the pill grey at zero', () => {
    const { container } = render(<InboxHeader unread={0} onMarkAllRead={() => {}} />)
    const pill = container.querySelector('h1 > span') as HTMLElement

    expect(pill).toHaveTextContent('0')
    expect(pill.getAttribute('class')).toContain('bg-count-zero')
    expect(pill.getAttribute('class')).toContain('text-muted')
  })

  it('keeps the all-read control in the inherited 15 / 400, not 14 / 600', async () => {
    const onMarkAllRead = vi.fn()
    const user = userEvent.setup()
    render(<InboxHeader unread={3} onMarkAllRead={onMarkAllRead} />)

    const button = screen.getByRole('button', { name: 'Mark all as read' })
    expect(button.getAttribute('class')).toContain('text-[15px]')
    expect(button.getAttribute('class')).toContain('font-normal')
    expect(button.getAttribute('class')).toContain('text-accent')

    await user.click(button)
    expect(onMarkAllRead).toHaveBeenCalledTimes(1)
  })

  it('wraps and hands out its button ref', () => {
    const allButtonRef = vi.fn()
    const { container } = render(
      <InboxHeader unread={3} onMarkAllRead={() => {}} allButtonRef={allButtonRef} />,
    )

    expect(container.querySelector('header')?.getAttribute('class')).toContain('flex-wrap')
    expect(container.querySelector('header')?.getAttribute('class')).toContain('mb-4')
    expect(allButtonRef).toHaveBeenCalledWith(expect.any(HTMLButtonElement))
  })
})
