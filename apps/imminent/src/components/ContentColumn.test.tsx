import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContentColumn } from './ContentColumn'

describe('ContentColumn', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('stacks the copy line, the form, the note and the credit in one 700px column', () => {
    const { container } = render(<ContentColumn />)

    const column = container.firstElementChild

    expect(column).toHaveClass('mx-auto', 'w-full', 'max-w-[700px]')
    expect(column?.children).toHaveLength(4)
    expect(column?.children[0]).toHaveTextContent(/Our website is Coming Soon/)
    expect(column?.children[1]?.tagName).toBe('FORM')
    expect(column?.children[2]).toHaveTextContent(/we hate spam too/)
    expect(column?.children[3]).toHaveTextContent(/More templates at Component Dock/)
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('accepts a className override', () => {
    const { container } = render(<ContentColumn className="gap-4" />)

    expect(container.firstElementChild).toHaveClass('gap-4')
  })
})
