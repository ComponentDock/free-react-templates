import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryPill } from './CategoryPill'

describe('CategoryPill', () => {
  it('renders the black pill used on the hero card by default', () => {
    render(<CategoryPill label="Gadgets" />)

    const pill = screen.getByText('Gadgets')
    expect(pill.className).toContain('bg-black')
    expect(pill.className).toContain('rounded-[15px]')
  })

  it('renders the light bordered pill used in the blog grid', () => {
    render(<CategoryPill label="Gadgets" variant="grid" />)

    const pill = screen.getByText('Gadgets')
    expect(pill.className).toContain('bg-soft')
    expect(pill.className).toContain('border-line')
    expect(pill.className).not.toContain('bg-black')
  })
})
