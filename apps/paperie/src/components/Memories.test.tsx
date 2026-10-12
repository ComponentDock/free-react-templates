import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { MEMORIES, MEMORIES_HEADING } from '../lib/site'
import { Memories } from './Memories'

function enlargeControls(): HTMLElement[] {
  return screen.getAllByRole('button', { name: /^Enlarge: / })
}

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

describe('the memories band', () => {
  it('sets six frames edge to edge in a three-across grid', () => {
    const { container } = render(<Memories />)

    expect(screen.getByRole('heading', { level: 2, name: MEMORIES_HEADING })).toBeInTheDocument()

    const tiles = screen.getAllByTestId('memory-tile')

    expect(tiles).toHaveLength(6)
    for (const tile of tiles) {
      expect(tokens(tile)).toContain('md:w-1/3')
      expect(tokens(tile)).not.toContain('md:p-[10px]')
    }

    expect(container.querySelectorAll('img')).toHaveLength(6)
    expect(container.querySelectorAll('.md\\:w-1\\/3')).toHaveLength(6)
  })

  it('covers each frame with a veil and a ringed plus control', () => {
    render(<Memories />)
    const controls = enlargeControls()

    expect(controls).toHaveLength(6)

    for (const control of controls) {
      expect(tokens(control)).toContain('absolute')
      expect(tokens(control)).toContain('inset-0')
    }

    const veil = screen.getAllByTestId('memory-tile')[0]?.querySelector('span[aria-hidden="true"]')

    expect(tokens(veil as Element)).toContain('bg-veil')
    expect(tokens(veil as Element)).toContain('opacity-0')
    expect(tokens(veil as Element)).toContain('group-hover:opacity-100')

    const plus = veil?.querySelector('svg')

    expect(tokens(plus as Element)).toContain('h-[40px]')
    expect(tokens(plus as Element)).toContain('w-[40px]')
  })

  it('opens a photograph at full size, and closes it on its control or on Escape', async () => {
    const user = userEvent.setup()
    render(<Memories />)

    expect(screen.queryByRole('dialog')).toBeNull()

    await user.click(enlargeControls()[1] as HTMLElement)

    const dialog = screen.getByRole('dialog', { name: 'Enlarged photograph' })

    expect(dialog).toBeInTheDocument()
    const enlarged = within(dialog).getByRole('img') as HTMLImageElement

    expect(enlarged.alt).toBe(MEMORIES[1]!.caption)
    expect(enlarged.src).toContain(`seed/${MEMORIES[1]?.photo}/1200/1480`)

    await user.click(screen.getByRole('button', { name: 'Close the enlarged photograph' }))

    expect(screen.queryByRole('dialog')).toBeNull()

    await user.click(enlargeControls()[2] as HTMLElement)
    fireEvent.keyDown(document, { key: 'Escape' })

    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('leaves the enlarged view alone for any other key', async () => {
    const user = userEvent.setup()
    render(<Memories />)

    await user.click(enlargeControls()[0] as HTMLElement)
    fireEvent.keyDown(document, { key: 'ArrowDown' })

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
