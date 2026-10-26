import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AddToCart } from './AddToCart'
import { ADDED_LABEL } from '../data/site'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('AddToCart', () => {
  it('calls back and confirms for a beat before returning to the price label', async () => {
    const user = userEvent.setup()
    const onAdd = vi.fn()
    render(<AddToCart onAdd={onAdd} />)

    await user.click(screen.getByRole('button', { name: 'Add to cart · $249' }))

    expect(onAdd).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('button', { name: ADDED_LABEL })).toHaveClass('is-added')

    await waitFor(
      () =>
        expect(screen.getByRole('button', { name: 'Add to cart · $249' })).not.toHaveClass(
          'is-added',
        ),
      { timeout: 3000 },
    )
  })

  it('restarts the confirmation when pressed twice', async () => {
    const user = userEvent.setup()
    const onAdd = vi.fn()
    render(<AddToCart onAdd={onAdd} />)

    const button = screen.getByRole('button', { name: 'Add to cart · $249' })
    await user.click(button)
    await user.click(screen.getByRole('button', { name: ADDED_LABEL }))

    expect(onAdd).toHaveBeenCalledTimes(2)

    await waitFor(
      () => expect(screen.getByRole('button', { name: 'Add to cart · $249' })).toBeInTheDocument(),
      { timeout: 3000 },
    )
  })

  it('clears its timer when it unmounts mid-confirmation', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<AddToCart onAdd={() => {}} />)

    await user.click(screen.getByRole('button', { name: 'Add to cart · $249' }))
    unmount()

    await new Promise((resolve) => setTimeout(resolve, 1400))
  })
})
