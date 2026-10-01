import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatusPill } from './StatusPill'

describe('StatusPill', () => {
  it('renders the Active pill with green palette and leading dot', () => {
    render(<StatusPill status="active" />)
    const pill = screen.getByText('Active')
    expect(pill.className).toContain('rounded-[30px]')
    expect(pill.className).toContain('py-1')
    expect(pill.className).toContain('pl-[25px]')
    expect(pill.className).toContain('pr-[10px]')
    expect(pill.className).toContain('bg-active-bg')
    expect(pill.className).toContain('text-active-text')
    const dot = pill.querySelector('span')
    expect(dot?.className).toContain('absolute')
    expect(dot?.className).toContain('left-[10px]')
    expect(dot?.className).toContain('top-[9px]')
    expect(dot?.className).toContain('h-[10px]')
    expect(dot?.className).toContain('w-[10px]')
    expect(dot?.className).toContain('rounded-full')
    expect(dot?.className).toContain('bg-active-dot')
    expect(dot).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the waiting pill with amber palette and leading dot', () => {
    render(<StatusPill status="waiting" />)
    const pill = screen.getByText('Waiting for Resassignment')
    expect(pill.className).toContain('bg-wait-bg')
    expect(pill.className).toContain('text-wait-text')
    const dot = pill.querySelector('span')
    expect(dot?.className).toContain('bg-wait-dot')
  })
})
