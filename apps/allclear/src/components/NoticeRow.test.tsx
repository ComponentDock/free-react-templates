import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { NoticeRow } from './NoticeRow'
import { NOTICES } from '../data/notices'

const notice = NOTICES[0]

const renderRow = (overrides: Partial<Parameters<typeof NoticeRow>[0]> = {}) => {
  const props = {
    notice,
    leaving: false,
    onDismiss: vi.fn(),
    onSettled: vi.fn(),
    register: vi.fn(),
    ...overrides,
  }

  return { ...render(<NoticeRow {...props} />), props }
}

describe('NoticeRow — one white row with a tinted tile', () => {
  it('prints the title, the body and the tone as custom properties', () => {
    const { container } = renderRow()
    const card = container.querySelector('[data-tone]') as HTMLElement

    expect(screen.getByText('Design review moved to Thursday')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Priya rescheduled the review of the checkout flow to 26 September, 14:00. The agenda is unchanged.',
      ),
    ).toBeInTheDocument()
    expect(card.getAttribute('data-tone')).toBe('violet')
    expect(card.style.getPropertyValue('--tone')).toBe('#6d4aff')
    expect(card.style.getPropertyValue('--soft')).toBe('#efebff')
  })

  it('is a status row, and an alert only when the notice says so', () => {
    const { unmount } = renderRow()
    expect(screen.getByRole('status')).toHaveTextContent('Design review moved to Thursday')

    unmount()
    render(
      <NoticeRow
        notice={NOTICES[3]}
        leaving={false}
        onDismiss={vi.fn()}
        onSettled={vi.fn()}
        register={vi.fn()}
      />,
    )

    expect(screen.getByRole('alert')).toHaveTextContent('Storage almost full')
  })

  it('keeps the row opaque white with the 56 px close-button gutter', () => {
    const { container } = renderRow()
    const card = container.querySelector('[data-tone]') as HTMLElement
    const cardClass = card.getAttribute('class') ?? ''

    expect(cardClass).toContain('bg-white')
    expect(cardClass).toContain('pr-14')
    expect(cardClass).toContain('rounded-2xl')
    expect(cardClass).toContain('gap-3.5')
    expect(cardClass).toContain('compact:p-[14px_48px_14px_14px]')
  })

  it('wraps the card in a collapsing track with a 12 px inner footing', () => {
    const { container } = renderRow({ leaving: true })
    const item = container.querySelector('li') as HTMLElement
    const inner = item.firstElementChild as HTMLElement

    expect(item).toHaveClass('notice-item')
    expect(item).toHaveClass('is-leaving')
    expect(inner.getAttribute('class')).toContain('min-h-0')
    expect(inner.getAttribute('class')).toContain('overflow-hidden')
    expect(inner.getAttribute('class')).toContain('pb-3')
  })

  it('hands the dismiss button to the parent so focus can move', () => {
    const { props } = renderRow()
    const register = props.register as unknown as ReturnType<typeof vi.fn>

    expect(register).toHaveBeenCalledTimes(1)
    expect(register.mock.calls.at(0)?.at(0)).toBe(
      screen.getByRole('button', { name: 'Dismiss: Design review moved to Thursday' }),
    )
  })

  it('releases the button on unmount', () => {
    const { props, unmount } = renderRow()
    const register = props.register as unknown as ReturnType<typeof vi.fn>

    unmount()

    expect(register.mock.calls.at(-1)?.[0]).toBeNull()
  })

  it('dismisses its own notice', () => {
    const { props } = renderRow()

    fireEvent.click(
      screen.getByRole('button', { name: 'Dismiss: Design review moved to Thursday' }),
    )

    expect(props.onDismiss).toHaveBeenCalledWith(notice)
  })

  it('reports the end of the grid-track collapse only', () => {
    const { container, props } = renderRow()
    const item = container.querySelector('li') as HTMLElement
    const card = container.querySelector('[data-tone]') as HTMLElement

    fireEvent.transitionEnd(card, { propertyName: 'grid-template-rows' })
    expect(props.onSettled).not.toHaveBeenCalled()

    fireEvent.transitionEnd(item, { propertyName: 'opacity' })
    expect(props.onSettled).not.toHaveBeenCalled()

    fireEvent.transitionEnd(item, { propertyName: 'grid-template-rows' })
    expect(props.onSettled).toHaveBeenCalledWith('design-review')
  })
})
