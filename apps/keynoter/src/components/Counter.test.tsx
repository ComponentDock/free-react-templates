import { render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { NEXT_EVENT } from '../content'
import { Counter } from './Counter'

const TARGET = Date.parse(NEXT_EVENT.iso)

describe('Counter', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(TARGET - (1 * 86_400_000 + 2 * 3_600_000 + 3 * 60_000 + 4_000))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('is the navy Next Event band with the pink time pill', () => {
    render(<Counter />)
    const band = document.getElementById('event') as HTMLElement
    expect(band.className).toContain('bg-navy')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Next Event')
    expect(screen.getByText(NEXT_EVENT.time).className).toContain('bg-pink')
    expect(screen.getByText(NEXT_EVENT.label)).toBeInTheDocument()
  })

  it('renders four live cells in Days / Hours / Minutes / Seconds order', () => {
    render(<Counter />)
    const labels = Array.from(document.querySelectorAll('dt')).map((node) => node.textContent)
    expect(labels).toEqual(['Days', 'Hours', 'Minutes', 'Seconds'])

    const values = Array.from(document.querySelectorAll('dd')).map((node) => node.textContent)
    expect(values).toEqual(['01', '02', '03', '04'])
  })
})
