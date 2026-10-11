import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PaginationsShowcase } from './PaginationsShowcase'

describe('PaginationsShowcase', () => {
  it('renders both pagination variants on the light band', () => {
    const { container } = render(<PaginationsShowcase />)

    const section = container.querySelector('section')!
    expect(section.id).toBe('paginations')
    expect(section.className).toContain('bg-light')

    expect(screen.getByRole('button', { name: 'Circle page 1' }).className).toContain(
      'bg-primary-600',
    )
    expect(screen.getByRole('button', { name: 'Circle page 2' }).className).toContain('bg-white')
    expect(screen.getByRole('button', { name: 'Circle page 2' }).className).toContain('h-[50px]')
    expect(screen.getByRole('button', { name: 'Outline page 2' }).className).toContain(
      'bg-primary-600',
    )
    expect(screen.getByRole('button', { name: 'Outline page 1' }).className).toContain(
      'text-black/40',
    )
  })

  it('moves the active page in both variants', async () => {
    render(<PaginationsShowcase />)

    await userEvent.click(screen.getByRole('button', { name: 'Circle page 3' }))
    expect(screen.getByRole('button', { name: 'Circle page 3' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(screen.getByRole('button', { name: 'Circle page 1' })).not.toHaveAttribute(
      'aria-current',
    )

    await userEvent.click(screen.getByRole('button', { name: 'Previous circle page' }))
    expect(screen.getByRole('button', { name: 'Circle page 2' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    await userEvent.click(screen.getByRole('button', { name: 'Previous circle page' }))
    await userEvent.click(screen.getByRole('button', { name: 'Previous circle page' }))
    expect(screen.getByRole('button', { name: 'Circle page 1' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    await userEvent.click(screen.getByRole('button', { name: 'Next circle page' }))
    expect(screen.getByRole('button', { name: 'Circle page 2' })).toHaveAttribute(
      'aria-current',
      'page',
    )

    await userEvent.click(screen.getByRole('button', { name: 'Outline page 5' }))
    expect(screen.getByRole('button', { name: 'Outline page 5' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    await userEvent.click(screen.getByRole('button', { name: 'Next outline page' }))
    expect(screen.getByRole('button', { name: 'Outline page 6' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    await userEvent.click(screen.getByRole('button', { name: 'Previous outline page' }))
    expect(screen.getByRole('button', { name: 'Outline page 5' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })
})
