import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NOTICES, SEVERITY_TOKENS } from '../data/alerts'
import { Alert } from './Alert'

const info = NOTICES[0]
const success = NOTICES[1]
const warning = NOTICES[2]
const danger = NOTICES[3]

describe('Alert — one card, four token sets', () => {
  it('prints the title and the body of the notice it is given', () => {
    render(<Alert notice={info} />)

    expect(screen.getByText('New tax rates from 1 October')).toBeInTheDocument()
    expect(screen.getByText(/VAT for digital services in Portugal/)).toBeInTheDocument()
  })

  it('keeps the title a paragraph, not a heading — the page has one h1', () => {
    render(<Alert notice={info} />)

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(screen.getByText('New tax rates from 1 October').tagName).toBe('P')
  })

  it('applies the severity quad as custom properties, title darker than accent', () => {
    const { container } = render(<Alert notice={danger} />)
    const card = container.firstElementChild as HTMLElement
    const tokens = SEVERITY_TOKENS.danger

    expect(card.style.getPropertyValue('--bg')).toBe(tokens.bg)
    expect(card.style.getPropertyValue('--line')).toBe(tokens.line)
    expect(card.style.getPropertyValue('--title')).toBe(tokens.title)
    expect(card.style.getPropertyValue('--accent')).toBe(tokens.accent)
    expect(card.style.getPropertyValue('--title')).not.toBe(card.style.getPropertyValue('--accent'))
  })

  it('uses the 22 px icon column, 18 × 16 insets, 14 gap and 12 radius', () => {
    const { container } = render(<Alert notice={success} />)
    const card = container.firstElementChild as HTMLElement
    const classes = card.getAttribute('class') ?? ''

    expect(classes).toContain('grid-cols-[22px_1fr]')
    expect(classes).toContain('gap-[14px]')
    expect(classes).toContain('px-[18px]')
    expect(classes).toContain('py-4')
    expect(classes).toContain('rounded-xl')
    expect(classes).toContain('border')
    expect(classes).toContain('border-[var(--line)]')
    expect(classes).toContain('bg-[var(--bg)]')
    expect(classes).toContain('shadow-[0_1px_2px_rgba(17,24,39,.04)]')
  })

  it('steps the card insets down at or below 480 px without touching the panel', () => {
    const { container } = render(<Alert notice={warning} />)
    const classes = (container.firstElementChild as HTMLElement).getAttribute('class') ?? ''

    expect(classes).toContain('alert-compact:gap-3')
    expect(classes).toContain('alert-compact:p-[14px]')
    expect(classes).not.toContain('max-[480px]:')
  })

  it('hides the icon from assistive technology and tints it with the accent', () => {
    const { container } = render(<Alert notice={warning} />)
    const icon = container.querySelector('svg') as SVGSVGElement

    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(icon).toHaveAttribute('focusable', 'false')
    expect(icon).toHaveAttribute('width', '22')
    expect(icon).toHaveAttribute('height', '22')
    expect(icon.getAttribute('class')).toContain('text-[var(--accent)]')
    expect(icon.getAttribute('class')).toContain('mt-px')
  })

  it('gives each severity its own glyph', () => {
    const shapes = NOTICES.map((notice) => {
      const { container, unmount } = render(<Alert notice={notice} />)
      const markup = (container.querySelector('svg') as SVGSVGElement).innerHTML
      unmount()
      return markup
    })

    expect(new Set(shapes).size).toBe(4)
  })

  it('exposes the reference role per severity', () => {
    render(
      <>
        <Alert notice={info} />
        <Alert notice={success} />
        <Alert notice={warning} />
        <Alert notice={danger} />
      </>,
    )

    expect(screen.getAllByRole('status')).toHaveLength(3)
    expect(screen.getByRole('alert')).toHaveTextContent('Bank sync failed')
  })

  it('marks the card with its severity for styling and measurement', () => {
    NOTICES.forEach((notice) => {
      const { container, unmount } = render(<Alert notice={notice} />)
      expect(container.firstElementChild).toHaveAttribute('data-severity', notice.severity)
      unmount()
    })
  })
})
