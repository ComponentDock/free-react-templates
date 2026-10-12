import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Registry } from './Registry'
import { REGISTRY_MARKS, REGISTRY_TITLE } from '../lib/site'

describe('Registry', () => {
  it('sets the centred title over six neutral house cards', () => {
    const { container } = render(<Registry />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(REGISTRY_TITLE)
    expect(screen.getAllByRole('listitem')).toHaveLength(6)
    expect(screen.getAllByRole('listitem').map((card) => card.textContent)).toEqual(
      REGISTRY_MARKS.map((mark) => mark.name),
    )
    expect(container.querySelector('ul')).toHaveClass('lg:grid-cols-6', 'snap-x', 'overflow-x-auto')
  })

  it('draws each mark inline instead of carrying a logo', () => {
    const { container } = render(<Registry />)

    const marks = container.querySelectorAll('li svg')

    expect(marks).toHaveLength(6)

    for (const mark of marks) {
      expect(mark).toHaveAttribute('aria-hidden', 'true')
      expect(mark.querySelector('path')).not.toBeNull()
    }
  })
})
