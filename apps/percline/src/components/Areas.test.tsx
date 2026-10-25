import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Areas } from './Areas'
import { AREAS } from '../content'

describe('Areas', () => {
  it('renders the twelve towns in reference order', () => {
    const { container } = render(<Areas />)
    const towns = Array.from(container.querySelectorAll('li')).map((node) => node.textContent)
    expect(towns).toEqual([...AREAS.towns])
    expect(towns).toHaveLength(12)
  })

  it('rules every town and keeps the replace-me footnote', () => {
    const { container } = render(<Areas />)
    expect(container.querySelector('li')).toHaveClass('border-b', 'border-ink-100', 'py-2.5')
    expect(screen.getByText(AREAS.footnote)).toHaveClass('text-sm', 'text-ink-500')
    expect(screen.getByRole('heading', { name: 'Where we work' })).toBeInTheDocument()
  })
})
