import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Areas } from './Areas'
import { AREAS } from '../content'

describe('Areas', () => {
  it('lists twelve towns as ruled rows under a heading with no eyebrow', () => {
    const { container } = render(<Areas />)

    const towns = container.querySelectorAll('#areas li')
    expect(towns).toHaveLength(12)
    expect(Array.from(towns).map((node) => node.textContent)).toEqual(AREAS.towns)
    expect(towns[0]).toHaveClass('border-b', 'border-ink-100', 'py-2.5', 'text-ink-700')

    expect(screen.getByRole('heading', { name: AREAS.heading })).toBeInTheDocument()
    expect(screen.getByText(AREAS.lede)).toBeInTheDocument()
    expect(screen.getByText(AREAS.footnote)).toBeInTheDocument()
    expect(container.querySelector('#areas p.uppercase')).toBeNull()
  })
})
