import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ModalTrigger } from './ModalTrigger'

describe('ModalTrigger', () => {
  it('renders the outlined transparent pill with its gradient hover wash', () => {
    render(<ModalTrigger onOpen={vi.fn()} />)

    const button = screen.getByRole('button', { name: /Follow us for updates/ })
    expect(button).toHaveAttribute('aria-haspopup', 'dialog')
    expect(button).toHaveClass(
      'min-h-[50px]',
      'min-w-[280px]',
      'max-w-full',
      'rounded-pill',
      'border-2',
      'border-white',
      'bg-transparent',
      'overflow-hidden',
      'px-5',
      'py-[10px]',
    )

    const wash = button.firstElementChild
    expect(wash).toHaveClass('opacity-0', 'group-hover:opacity-100', 'transition-opacity')
    expect(wash?.className).toContain('linear-gradient(45deg')
  })

  it('opens the dialog when clicked', async () => {
    const user = userEvent.setup()
    const onOpen = vi.fn()
    render(<ModalTrigger onOpen={onOpen} />)

    await user.click(screen.getByRole('button', { name: /Follow us for updates/ }))

    expect(onOpen).toHaveBeenCalledTimes(1)
  })

  it('opens the dialog from the keyboard', async () => {
    const user = userEvent.setup()
    const onOpen = vi.fn()
    render(<ModalTrigger onOpen={onOpen} />)

    await user.tab()
    await user.keyboard('{Enter}')

    expect(onOpen).toHaveBeenCalledTimes(1)
  })

  it('accepts a className override', () => {
    render(<ModalTrigger onOpen={vi.fn()} className="mt-[10px]" />)

    expect(screen.getByRole('button', { name: /Follow us for updates/ })).toHaveClass('mt-[10px]')
  })
})
