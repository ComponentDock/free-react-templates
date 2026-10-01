import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Crossline — Weekly Schedule Crosshair Table Template')
  })

  it('renders the mid-gray full-viewport canvas, flex-centered, with the 1300px wrap', () => {
    const { container } = render(<App />)
    const shell = container.firstElementChild as HTMLElement
    expect(shell.className).toContain('min-h-screen')
    expect(shell.className).toContain('bg-canvas')
    expect(shell.className).toContain('flex')
    expect(shell.className).toContain('flex-wrap')
    expect(shell.className).toContain('items-center')
    expect(shell.className).toContain('justify-center')
    expect(shell.className).toContain('px-[30px]')
    expect(shell.className).toContain('py-[33px]')
    expect(shell.className).toContain('font-montserrat')
    const wrap = screen.getByRole('main')
    expect(wrap.className).toContain('w-full')
    expect(wrap.className).toContain('max-w-[1300px]')
  })

  it('renders exactly six tables in ver1 → ver6 order, each with a 110px bottom margin', () => {
    render(<App />)
    const tables = screen.getAllByRole('table')
    expect(tables).toHaveLength(6)
    const firstHeader = within(tables[0] as HTMLElement).getAllByRole(
      'columnheader',
    )[1] as HTMLElement
    expect(firstHeader.className).toContain('bg-ver1-head')
    const lastHeader = within(tables[5] as HTMLElement).getAllByRole(
      'columnheader',
    )[1] as HTMLElement
    expect(lastHeader.className).toContain('bg-ver6-head')
    for (const table of tables) {
      const wrapper = table.parentElement as HTMLElement
      expect(wrapper.className).toContain('mb-[110px]')
      expect(wrapper.className).toContain('overflow-x-auto')
    }
    const lastWrapper = (tables[5] as HTMLElement).parentElement as HTMLElement
    expect(lastWrapper.className).toContain('rounded-2xl')
    expect(lastWrapper.className).toContain('bg-[linear-gradient(-68deg,#ac32e4,#4801ff)]')
  })

  it('renders zero headings (source parity — the page is tables-only)', () => {
    render(<App />)
    expect(screen.queryAllByRole('heading')).toHaveLength(0)
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('keeps each table’s crosshair independent — hovering ver1 never marks ver2', () => {
    render(<App />)
    const tables = screen.getAllByRole('table')
    const ver1Rows = within(tables[0] as HTMLElement)
      .getAllByRole('row')
      .slice(1)
    const ver2Tuesday = within(tables[1] as HTMLElement)
      .getAllByRole('row')
      .slice(1)
      .map((row) => within(row).getAllByRole('cell')[2] as HTMLElement)
    fireEvent.mouseOver((ver1Rows[0] as HTMLElement).querySelectorAll('td')[2] as HTMLElement)
    for (const cell of ver2Tuesday) {
      expect(cell.classList.contains('bg-ver2-row')).toBe(false)
    }
  })
})
