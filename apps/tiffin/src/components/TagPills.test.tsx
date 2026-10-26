import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { TagPills } from './TagPills'

describe('TagPills', () => {
  it('lists two pills in a wrapping centred row', () => {
    render(<TagPills tags={['Vegetarian', 'Serves 4']} tint="peach" />)

    const list = screen.getByRole('list', { name: 'Tags' })
    expect(list.tagName).toBe('UL')
    expect(list.className).toContain('flex')
    expect(list.className).toContain('flex-wrap')
    expect(list.className).toContain('justify-center')
    expect(list.className).toContain('gap-1.5')
    expect(list.className).toContain('mt-4')
    expect(list.className).toContain('list-none')

    const items = within(list).getAllByRole('listitem')
    expect(items.map((item) => item.textContent)).toEqual(['Vegetarian', 'Serves 4'])
    for (const item of items) {
      expect(item.className).toContain('rounded-full')
      expect(item.className).toContain('px-[11px]')
      expect(item.className).toContain('py-1')
      expect(item.className).toContain('text-[13px]')
      expect(item.className).toContain('font-semibold')
      expect(item.className).toContain('text-tag-ink')
    }
  })

  it('paints the pills in the card tint, not a fixed colour', () => {
    const { rerender } = render(<TagPills tags={['Vegan option', 'Meal prep']} tint="sage" />)
    expect(screen.getAllByRole('listitem')[0]).toHaveAttribute(
      'style',
      'background: var(--color-tint-sage);',
    )

    rerender(<TagPills tags={['High protein', 'Gluten free']} tint="butter" />)
    expect(screen.getAllByRole('listitem')[0]).toHaveAttribute(
      'style',
      'background: var(--color-tint-butter);',
    )
  })

  it('renders one pill per tag with no wrapper elements', () => {
    render(<TagPills tags={['Vegetarian', 'Serves 4']} tint="peach" />)

    const list = screen.getByRole('list', { name: 'Tags' })
    expect(list.children).toHaveLength(2)
    for (const child of list.children) {
      expect(child.tagName).toBe('LI')
    }
  })
})
