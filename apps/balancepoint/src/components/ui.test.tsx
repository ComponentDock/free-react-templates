import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  ActionLink,
  BandHeading,
  Container,
  Eyebrow,
  Logo,
  Pill,
  Reveal,
  SectionPill,
} from './ui'

type Entry = { isIntersecting: boolean; target: Element }
const original = globalThis.IntersectionObserver

class FakeObserver {
  static instances: FakeObserver[] = []
  readonly observed: Element[] = []
  disconnected = false
  constructor(readonly callback: (entries: Entry[]) => void) {
    FakeObserver.instances.push(this)
  }
  observe(node: Element) {
    this.observed.push(node)
  }
  disconnect() {
    this.disconnected = true
  }
}

afterEach(() => {
  FakeObserver.instances = []
  globalThis.IntersectionObserver = original
})

describe('Container', () => {
  it('caps the content column at 1,280 px with responsive gutters', () => {
    render(<Container className="extra">content</Container>)
    const node = screen.getByText('content')
    expect(node.className).toContain('max-w-[1280px]')
    expect(node.className).toContain('px-4')
    expect(node.className).toContain('extra')
  })
})

describe('Eyebrow', () => {
  it('is lime on light grounds and lime-300 on the dark band', () => {
    const { rerender } = render(<Eyebrow>Light</Eyebrow>)
    expect(screen.getByText('Light').className).toContain('text-primary-700')
    rerender(<Eyebrow onDark>Dark</Eyebrow>)
    expect(screen.getByText('Dark').className).toContain('text-primary-300')
  })
})

describe('ActionLink', () => {
  it('defaults to the lime fill at the medium size', () => {
    render(<ActionLink href="#contact">Quote</ActionLink>)
    const link = screen.getByRole('link', { name: 'Quote' })
    expect(link).toHaveAttribute('href', '#contact')
    expect(link.className).toContain('bg-primary-600')
    expect(link.className).toContain('rounded-lg')
  })

  it('renders the white pill and the white outline variants', () => {
    render(
      <>
        <ActionLink href="#a" variant="white" size="lg">
          White
        </ActionLink>
        <ActionLink href="#b" variant="outlineWhite" size="header">
          Outline
        </ActionLink>
      </>,
    )
    expect(screen.getByRole('link', { name: 'White' }).className).toContain('bg-white')
    expect(screen.getByRole('link', { name: 'Outline' }).className).toContain('border-white/40')
  })

  it('fires an optional click handler', () => {
    let clicked = 0
    render(
      <ActionLink href="#c" onClick={() => (clicked += 1)}>
        Tap
      </ActionLink>,
    )
    act(() => {
      screen.getByRole('link', { name: 'Tap' }).click()
    })
    expect(clicked).toBe(1)
  })
})

describe('Pill', () => {
  it('is a full-radius outlined link with its icon', () => {
    render(
      <Pill href="#areas" icon={<svg data-testid="pin" />}>
        Spokane, WA
      </Pill>,
    )
    const link = screen.getByRole('link', { name: /Spokane/ })
    expect(link.className).toContain('rounded-full')
    expect(screen.getByTestId('pin')).toBeInTheDocument()
  })
})

describe('SectionPill', () => {
  it('is the lime chip above the reviews and the FAQ', () => {
    render(<SectionPill>Reviews</SectionPill>)
    expect(screen.getByText('Reviews').className).toContain('bg-primary-100')
  })
})

describe('Logo', () => {
  it('draws the mark in lime for light grounds and lime-300 for the footer', () => {
    const { container, rerender } = render(<Logo brand="Balancepoint" />)
    expect(screen.getByText('Balancepoint').className).toContain('text-ink-800')
    expect(container.querySelector('svg')?.innerHTML).toContain('stroke-primary-600')

    rerender(<Logo brand="Balancepoint" tone="light" />)
    expect(screen.getByText('Balancepoint').className).toContain('text-white')
    expect(container.querySelector('svg')?.innerHTML).toContain('stroke-primary-300')
  })
})

describe('BandHeading', () => {
  it('renders eyebrow, heading and lede', () => {
    render(<BandHeading eyebrow="Eyebrow" heading="Heading" lede="Lede" />)
    expect(screen.getByText('Eyebrow')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Heading')
    expect(screen.getByText('Lede')).toBeInTheDocument()
  })

  it('centres the lede when asked', () => {
    render(<BandHeading heading="Centred" lede="Centred lede" centered />)
    expect(screen.getByText('Centred lede').className).toContain('mx-auto max-w-2xl')
  })

  it('inverts the lede on the dark band', () => {
    render(<BandHeading heading="Dark" lede="Dark lede" onDark />)
    expect(screen.getByText('Dark lede').className).toContain('text-white/70')
  })

  it('drops the optional parts and inverts on the dark band', () => {
    const { container } = render(<BandHeading heading="Only a heading" onDark centered />)
    expect(screen.getByRole('heading', { level: 2 }).className).toContain('text-white')
    expect(container.querySelectorAll('p')).toHaveLength(0)
  })
})

describe('Reveal', () => {
  it('starts hidden and fades in when the element enters the viewport', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    render(
      <Reveal delay={120}>
        <p>Card</p>
      </Reveal>,
    )
    const wrapper = screen.getByText('Card').parentElement as HTMLElement
    expect(wrapper.className).toContain('opacity-0')
    expect(wrapper.style.transitionDelay).toBe('120ms')

    act(() => {
      FakeObserver.instances[0]!.callback([{ isIntersecting: true, target: wrapper }])
    })

    expect(wrapper.className).toContain('opacity-100')
  })

  it('stays hidden while entries are not intersecting', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    render(
      <Reveal>
        <p>Still offscreen</p>
      </Reveal>,
    )
    const wrapper = screen.getByText('Still offscreen').parentElement as HTMLElement
    act(() => {
      FakeObserver.instances[0]!.callback([{ isIntersecting: false, target: wrapper }])
    })
    expect(wrapper.className).toContain('opacity-0')
  })

  it('renders visible when IntersectionObserver is missing', () => {
    globalThis.IntersectionObserver = undefined as unknown as typeof IntersectionObserver
    render(
      <Reveal>
        <p>No observer</p>
      </Reveal>,
    )
    expect((screen.getByText('No observer').parentElement as HTMLElement).className).toContain(
      'opacity-100',
    )
  })

  it('renders visible under prefers-reduced-motion', () => {
    const originalMatch = window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: () => ({ matches: true }),
    })
    render(
      <Reveal>
        <p>Reduced</p>
      </Reveal>,
    )
    const wrapper = screen.getByText('Reduced').parentElement as HTMLElement
    expect(wrapper.className).toContain('opacity-100')
    expect(wrapper.style.transitionDelay).toBe('')
    Object.defineProperty(window, 'matchMedia', { configurable: true, value: originalMatch })
  })

  it('disconnects the observer when it unmounts', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    const { unmount } = render(
      <Reveal>
        <p>Unmounting</p>
      </Reveal>,
    )
    unmount()
    expect(FakeObserver.instances[0]!.disconnected).toBe(true)
  })
})
