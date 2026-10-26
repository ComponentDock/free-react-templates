import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EmptyNote } from './EmptyNote'

describe('EmptyNote', () => {
  it('says the list is clear, centred and muted', () => {
    render(<EmptyNote />)

    const note = screen.getByText("You're all caught up.")
    expect(note.tagName).toBe('P')
    expect(note.getAttribute('class')).toContain('mt-6')
    expect(note.getAttribute('class')).toContain('text-center')
    expect(note.getAttribute('class')).toContain('text-muted')
  })
})
