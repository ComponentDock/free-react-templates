import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { SubscribeButton } from './SubscribeButton'

describe('SubscribeButton', () => {
  it('renders the green action with a hidden gradient layer behind its label', () => {
    const { container } = render(<SubscribeButton />)

    const button = screen.getByRole('button', { name: 'Subscribe' })

    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toHaveClass(
      'group',
      'relative',
      'isolate',
      'mb-[20px]',
      'flex',
      'h-[50px]',
      'min-w-[170px]',
      'items-center',
      'justify-center',
      'overflow-hidden',
      'bg-brand',
      'px-[20px]',
      'text-[16px]',
      'text-white',
      'duration-[400ms]',
      'hover:bg-transparent',
    )

    const layer = container.querySelector('span[aria-hidden="true"]')

    expect(layer).toHaveClass(
      'absolute',
      'inset-0',
      '-z-10',
      'opacity-0',
      'group-hover:opacity-100',
      'transition-opacity',
    )
    expect(layer?.className).toContain('linear-gradient(to_bottom')
  })

  it('accepts a className override', () => {
    render(<SubscribeButton className="mb-0" />)

    expect(screen.getByRole('button', { name: 'Subscribe' })).toHaveClass('mb-0')
  })

  it('submits the form it belongs to', () => {
    const { container } = render(
      <form>
        <SubscribeButton />
      </form>,
    )

    expect(fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))).toBe(true)
    expect(container.querySelector('form')).toContainElement(
      screen.getByRole('button', { name: 'Subscribe' }),
    )
  })
})
