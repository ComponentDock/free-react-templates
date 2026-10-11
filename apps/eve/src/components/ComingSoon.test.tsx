import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { ComingSoon } from './ComingSoon'

describe('ComingSoon', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders one gradient screen holding the spacer, the centred block and the attribution', () => {
    const { container } = render(<ComingSoon />)
    const screenWrapper = container.firstElementChild

    expect(screenWrapper).toHaveClass(
      'min-h-screen',
      'w-full',
      'flex-col',
      'items-center',
      'justify-between',
      'bg-grad-b',
      'px-[15px]',
      'pt-[55px]',
      'pb-[35px]',
      'max-[576px]:pt-[35px]',
    )
    expect(screenWrapper?.className).toContain('linear-gradient(-45deg')

    const middle = screenWrapper?.children[1]
    expect(middle).toHaveClass('flex', 'flex-col', 'items-center', 'py-[50px]')

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Coming Soon')
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Follow us for updates/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('accepts a className override on the wrapper', () => {
    const { container } = render(<ComingSoon className="selection:bg-white" />)

    expect(container.firstElementChild).toHaveClass('selection:bg-white')
  })

  it('opens the dialog on the trigger and closes it with Escape', () => {
    vi.useFakeTimers()

    render(<ComingSoon />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Follow us for updates/ }))
    act(() => {
      vi.advanceTimersByTime(0)
    })

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toHaveFocus()

    fireEvent.keyDown(screen.getByLabelText('Name'), { key: 'Escape' })
    act(() => {
      vi.advanceTimersByTime(150)
    })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Follow us for updates/ })).toHaveFocus()
  })
})
