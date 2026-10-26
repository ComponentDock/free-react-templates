import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

function savedLine() {
  const main = screen.getByRole('main')
  const line = [...main.querySelectorAll('p')].find((node) =>
    node.textContent?.startsWith('Saved jobs:'),
  )
  return line!.textContent
}

describe('App', () => {
  it('renders one content-height stage holding head, grid, status and footer', () => {
    render(<App />)

    const mains = screen.getAllByRole('main')
    expect(mains).toHaveLength(1)

    const main = mains[0]!
    expect(main.className).toContain('max-w-[1072px]')
    expect(main.className).toContain('px-4')
    expect(main.className).toContain('py-[clamp(32px,6vw,72px)]')
    expect(main.className).not.toContain('min-h')

    expect([...main.children].map((child) => child.tagName)).toEqual([
      'HEADER',
      'DIV',
      'P',
      'FOOTER',
    ])
  })

  it('lays the four cards on the arithmetic auto-fit grid', () => {
    render(<App />)

    const grid = screen.getByRole('main').children[1]!
    expect(grid.className).toContain('grid')
    expect(grid.className).toContain('grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))]')
    expect(grid.className).toContain('gap-4')
    expect(grid.className).not.toMatch(/(sm|md|lg|xl):/)
    expect(grid.children).toHaveLength(4)
    ;[...grid.children].forEach((card) => expect(card.tagName).toBe('ARTICLE'))
  })

  it('walks one h1, four h2 and four card links in card order', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(4)
    expect(screen.getAllByRole('article')).toHaveLength(4)

    const cardLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href')?.startsWith('#job-'))
    expect(cardLinks.map((link) => link.textContent)).toEqual([
      'Senior Product Designer',
      'Product Manager, Patient App',
      'UX Writer (Contract, 6 months)',
      'Junior UI Designer',
    ])
    cardLinks.forEach((link) => {
      const id = link.getAttribute('href')!.slice(1)
      expect(document.getElementById(id)).not.toBeNull()
    })

    expect(document.querySelectorAll('a[href="#"]')).toHaveLength(0)
    expect(document.querySelectorAll('form, input, img')).toHaveLength(0)
  })

  it('opens with one job already shortlisted and an empty announcement', () => {
    render(<App />)

    expect(savedLine()).toBe('Saved jobs: 1')
    expect(screen.getByRole('status').textContent).toBe('')

    const pressed = screen
      .getAllByRole('button')
      .map((button) => button.getAttribute('aria-pressed'))
    expect(pressed).toEqual(['false', 'true', 'false', 'false'])
  })

  it('counts, announces and repaints on a save click', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(
      screen.getByRole('button', { name: 'Save UX Writer (Contract, 6 months) at Fieldstone Labs' }),
    )

    expect(savedLine()).toBe('Saved jobs: 2')
    expect(screen.getByRole('status')).toHaveTextContent(
      'UX Writer (Contract, 6 months) saved to your list.',
    )

    const third = screen.getAllByRole('article')[2]!
    expect(third.className).toContain('bg-saved')
    expect(third.querySelector('button')).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getAllByRole('article')[0]!.className).not.toContain('bg-saved')
  })

  it('removes a job and clears the count back to zero', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(
      screen.getByRole('button', {
        name: 'Remove Product Manager, Patient App from saved jobs',
      }),
    )

    expect(savedLine()).toBe('Saved jobs: 0')
    expect(screen.getByRole('status')).toHaveTextContent(
      'Product Manager, Patient App removed from your list.',
    )

    const second = screen.getAllByRole('article')[1]!
    expect(second.className).toContain('border-line')
    expect(second.className).not.toContain('bg-saved')
    expect(second.querySelector('button')).toHaveAttribute('aria-pressed', 'false')
  })

  it('keeps every save independent and replaces the announcement', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /^Save Senior Product Designer/ }))
    expect(savedLine()).toBe('Saved jobs: 2')

    await user.click(screen.getByRole('button', { name: /^Save Junior UI Designer/ }))
    expect(savedLine()).toBe('Saved jobs: 3')
    expect(screen.getByRole('status')).toHaveTextContent('Junior UI Designer saved to your list.')

    const pressed = screen
      .getAllByRole('button')
      .map((button) => button.getAttribute('aria-pressed'))
    expect(pressed).toEqual(['true', 'true', 'false', 'true'])
  })

  it('credits Component Dock in the footer', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.textContent).toContain('More templates at')

    expect(screen.getAllByRole('link')).toHaveLength(5)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
