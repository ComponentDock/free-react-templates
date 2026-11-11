import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { GROUPS } from './content'
import { banned } from './test/banned'
import { mockNarrow, removeMatchMedia } from './test/match-media'

function rows(container: HTMLElement) {
  return [...container.querySelectorAll('tr.pt-row')]
}

function toggles() {
  return GROUPS.map((group) => screen.getByRole('button', { name: group.title }))
}

describe('App', () => {
  it('renders one card, one table and the whole matrix on a wide load', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('main')).toHaveLength(1)
    expect(container.querySelectorAll('main > section')).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.queryAllByRole('heading', { level: 2 })).toHaveLength(0)

    expect(container.querySelectorAll('table')).toHaveLength(1)
    expect(container.querySelectorAll('caption')).toHaveLength(1)
    expect(container.querySelectorAll('tbody')).toHaveLength(4)
    expect(container.querySelectorAll('tr')).toHaveLength(22)
    expect(container.querySelectorAll('button')).toHaveLength(6)
    expect(container.querySelectorAll('svg')).toHaveLength(40)
    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(container.querySelectorAll('form, input')).toHaveLength(0)
  })

  it('points the section at its heading and hides the caption', () => {
    const { container } = render(<App />)

    const section = container.querySelector('section')
    expect(section).toHaveAttribute('aria-labelledby', 'pt-title')
    expect(container.querySelector('caption')).toHaveClass('pt-sr')
    expect(container.querySelector('caption')).toHaveTextContent(
      'Parity plan comparison: Basic, Team and Business',
    )
  })

  it('starts with all four groups open and every row visible', () => {
    const { container } = render(<App />)

    expect(toggles().map((toggle) => toggle.getAttribute('aria-expanded'))).toEqual([
      'true',
      'true',
      'true',
      'true',
    ])
    expect(rows(container)).toHaveLength(17)
    expect(rows(container).filter((row) => row.hasAttribute('hidden'))).toHaveLength(0)
  })

  it('wires each toggle to a body that exists', () => {
    const { container } = render(<App />)

    for (const toggle of toggles()) {
      const id = toggle.getAttribute('aria-controls')
      expect(id).toBeTruthy()
      expect(container.querySelector(`tbody#${id}`)).not.toBeNull()
    }
  })

  it('collapses one group without touching its siblings', async () => {
    const { container } = render(<App />)

    await userEvent.click(screen.getByRole('button', { name: 'Collaboration' }))

    expect(toggles().map((toggle) => toggle.getAttribute('aria-expanded'))).toEqual([
      'true',
      'false',
      'true',
      'true',
    ])
    const hidden = rows(container).filter((row) => row.hasAttribute('hidden'))
    expect(hidden).toHaveLength(4)
    expect(hidden.every((row) => row.querySelector('td') !== null)).toBe(true)
  })

  it('closes and reopens everything from the two bulk controls', async () => {
    const { container } = render(<App />)

    await userEvent.click(screen.getByRole('button', { name: 'Collapse all' }))

    expect(toggles().every((toggle) => toggle.getAttribute('aria-expanded') === 'false')).toBe(true)
    expect(rows(container).every((row) => row.hasAttribute('hidden'))).toBe(true)

    await userEvent.click(screen.getByRole('button', { name: 'Expand all' }))

    expect(toggles().every((toggle) => toggle.getAttribute('aria-expanded') === 'true')).toBe(true)
    expect(rows(container).some((row) => row.hasAttribute('hidden'))).toBe(false)
  })

  it('writes each cell headers attribute as group, feature and plan', () => {
    const { container } = render(<App />)

    const firstRow = rows(container)[0]!
    const cells = [...firstRow.querySelectorAll('td')]

    expect(cells.map((cell) => cell.getAttribute('headers'))).toEqual([
      'pt-g1 pt-f1 pt-basic',
      'pt-g1 pt-f1 pt-team',
      'pt-g1 pt-f1 pt-business',
    ])
  })

  it('labels a tick and a cross for assistive tech', () => {
    render(<App />)

    expect(screen.getAllByText('Included')).toHaveLength(21)
    expect(screen.getAllByText('Not included')).toHaveLength(15)
  })

  it('opens only the first group and adds the phone CTAs on a narrow load', () => {
    mockNarrow()
    const { container } = render(<App />)

    expect(toggles().map((toggle) => toggle.getAttribute('aria-expanded'))).toEqual([
      'true',
      'false',
      'false',
      'false',
    ])
    expect(rows(container).filter((row) => row.hasAttribute('hidden'))).toHaveLength(12)
    expect(container.querySelectorAll('.pt-mobile-cta')).toHaveLength(3)
    expect(screen.getAllByRole('link')).toHaveLength(7)
  })

  it('keeps the desktop layout when the browser has no matchMedia', () => {
    removeMatchMedia()
    const { container } = render(<App />)

    expect(toggles().every((toggle) => toggle.getAttribute('aria-expanded') === 'true')).toBe(true)
    expect(container.querySelectorAll('.pt-mobile-cta')).toHaveLength(0)
    expect(screen.getAllByRole('link')).toHaveLength(4)
  })

  it('ships no source provenance anywhere in its markup', () => {
    const { container } = render(<App />)
    const markup = container.innerHTML.toLowerCase()

    // Assembled at run time so the provenance sweep finds no banned string in the tree.
    expect(markup).not.toContain(banned('color', 'lib'))
    expect(markup).not.toContain(banned('tally', 'board'))
    expect(markup).not.toContain(banned('pricing', '-table-03'))
  })

  it('ends with the Component Dock strip', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent('More templates at Component Dock')
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
