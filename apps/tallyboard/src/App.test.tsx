import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { App } from './App'
import { COMPONENT_DOCK, HEADLINE, LEDE } from './content'
import { COUNT_UP_MS } from './lib/ease'
import { driveFrames } from './test/frames'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('App', () => {
  it('renders one band: a head, a switch, four cards and the house footer', () => {
    const { container } = render(<App />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(HEADLINE)
    expect(screen.getByText(LEDE)).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(4)
    expect(screen.getAllByRole('article')).toHaveLength(4)
    expect(screen.getAllByRole('list')).toHaveLength(4)
    expect(container.querySelectorAll('li')).toHaveLength(15)
    expect(screen.getAllByRole('button')).toHaveLength(1)
    expect(screen.getAllByRole('link')).toHaveLength(5)
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(container.querySelectorAll('img, form, input')).toHaveLength(0)
  })

  it('labels the section by the headline and each card by its own name', () => {
    const { container } = render(<App />)

    const section = container.querySelector('.tb-section')
    expect(section).toHaveAttribute('aria-labelledby', 'tallyboard-title')
    for (const article of screen.getAllByRole('article')) {
      const id = article.getAttribute('aria-labelledby') as string
      expect(container.querySelector(`#${id}`)).not.toBeNull()
    }
  })

  it('prints the monthly ladder and every CTA points at Component Dock', () => {
    render(<App />)

    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getByText('$15')).toBeInTheDocument()
    expect(screen.getByText('$40')).toBeInTheDocument()
    expect(screen.getByText('$100')).toBeInTheDocument()
    expect(screen.getAllByText('Billed monthly')).toHaveLength(3)
    expect(screen.getByText('Free forever')).toBeInTheDocument()

    const ctas = screen.getAllByRole('link', { name: /^Start/ })
    expect(ctas).toHaveLength(4)
    for (const cta of ctas) {
      expect(cta).toHaveAttribute('href', COMPONENT_DOCK)
    }
  })

  it('switches to annual billing: figures, notes and announcement together', async () => {
    const frames = driveFrames()
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Annual billing' }))

    expect(screen.getByRole('button', { name: 'Annual billing' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('status')).toHaveTextContent(
      'Annual billing: prices shown per month, billed yearly.',
    )
    expect(screen.getByText('$144 billed yearly')).toBeInTheDocument()
    expect(screen.getByText('$384 billed yearly')).toBeInTheDocument()
    expect(screen.getByText('$960 billed yearly')).toBeInTheDocument()
    expect(screen.queryByText('Billed monthly')).not.toBeInTheDocument()

    act(() => frames.frame(0))
    act(() => frames.frame(COUNT_UP_MS))

    expect(screen.getByText('$12')).toBeInTheDocument()
    expect(screen.getByText('$32')).toBeInTheDocument()
    expect(screen.getByText('$80')).toBeInTheDocument()
    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getByText('Free forever')).toBeInTheDocument()
  })

  it('switches back to monthly on a second click', async () => {
    const frames = driveFrames()
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getByRole('button', { name: 'Annual billing' })
    await user.click(toggle)
    act(() => frames.frame(0))
    act(() => frames.frame(COUNT_UP_MS))
    await user.click(toggle)

    act(() => frames.frame(COUNT_UP_MS * 2))
    act(() => frames.frame(COUNT_UP_MS * 3))

    expect(toggle).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByRole('status')).toHaveTextContent('Monthly billing.')
    expect(screen.getByText('$15')).toBeInTheDocument()
    expect(screen.getByText('$40')).toBeInTheDocument()
    expect(screen.getByText('$100')).toBeInTheDocument()
    expect(screen.getAllByText('Billed monthly')).toHaveLength(3)
  })

  it('keeps the featured card identical in structure to its siblings', () => {
    const { container } = render(<App />)

    const cards = screen.getAllByRole('article')
    const featured = cards[2] as HTMLElement
    expect(featured).toHaveClass('tb-plan--pop')
    expect(within(featured).getByText('Best value')).toBeInTheDocument()
    expect(featured.className).not.toMatch(/mt-|pt-|absolute/)
    expect(container.querySelectorAll('.tb-plan')).toHaveLength(4)
  })

  it('ends with the Component Dock strip below the section', () => {
    const { container } = render(<App />)

    const footer = container.querySelector('footer')
    expect(footer).not.toBeNull()
    expect(
      within(footer as HTMLElement).getByRole('link', { name: 'Component Dock' }),
    ).toHaveAttribute('href', COMPONENT_DOCK)
    expect(footer?.textContent).toContain('More templates at')
  })
})
