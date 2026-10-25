import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Container, Kicker, PhonePill, Stars } from './ui'
import { PHONE_DISPLAY, PHONE_HREF } from '../content'

afterEach(() => {
  vi.unstubAllGlobals()
  vi.useRealTimers()
})

describe('Container', () => {
  it('caps the content at 1280 px and keeps the gutters responsive', () => {
    render(<Container className="extra">Band</Container>)
    const node = screen.getByText('Band')
    expect(node).toHaveClass('mx-auto', 'max-w-[1280px]', 'px-4', 'lg:px-8', 'extra')
  })
})

describe('Kicker', () => {
  it('is 12 px, 600, uppercase and +0.2em in bronze', () => {
    render(<Kicker>What I do</Kicker>)
    expect(screen.getByText('What I do')).toHaveClass(
      'text-xs',
      'font-semibold',
      'uppercase',
      'tracking-[0.2em]',
      'text-primary-700',
    )
  })
})

describe('PhonePill', () => {
  it('renders a valid tel: pill at the header scale by default', () => {
    render(<PhonePill />)
    const link = screen.getByRole('link', { name: PHONE_DISPLAY })
    expect(link).toHaveAttribute('href', PHONE_HREF)
    expect(link).toHaveTextContent(PHONE_DISPLAY)
    expect(link).toHaveClass('rounded-full', 'bg-primary-600', 'px-4', 'py-2.5')
    expect(link).toHaveAttribute('data-phone')
  })

  it('takes a label and the larger emergency scale', () => {
    render(<PhonePill label="Call Sam" scale="lg" className="lg:shrink-0" />)
    const link = screen.getByRole('link', { name: /call sam/i })
    expect(link).toHaveClass('px-6', 'py-3', 'text-lg', 'font-bold', 'lg:shrink-0')
  })
})

describe('Stars', () => {
  it('paints five amber glyphs in the hero and five bronze ones in the reviews', () => {
    const { rerender, container } = render(<Stars label="Rated 5.0 out of 5" />)
    expect(screen.getByRole('img', { name: 'Rated 5.0 out of 5' })).toHaveClass('inline-flex')
    expect(container.querySelectorAll('svg')).toHaveLength(5)
    expect(container.querySelector('svg')).toHaveClass('text-amber-400')

    rerender(<Stars tone="primary" label="Five out of five" />)
    expect(container.querySelector('svg')).toHaveClass('text-primary-400')
  })

  it('keeps every glyph decorative so the label carries the rating', () => {
    act(() => {
      render(<Stars label="Five out of five" />)
    })
    const glyphs = screen.getByRole('img', { name: 'Five out of five' }).querySelectorAll('svg')
    for (const glyph of glyphs) {
      expect(glyph).toHaveAttribute('aria-hidden', 'true')
    }
  })
})
