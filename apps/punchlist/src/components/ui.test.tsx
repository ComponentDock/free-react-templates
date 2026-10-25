import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  ActionButton,
  ActionLink,
  BandHeading,
  Container,
  Counter,
  Logo,
  Reveal,
  SectionPill,
  Stars,
} from './ui'

const originalObserver = globalThis.IntersectionObserver

afterEach(() => {
  globalThis.IntersectionObserver = originalObserver
  vi.unstubAllGlobals()
})

type Entry = { isIntersecting: boolean }

class FakeObserver {
  static instances: FakeObserver[] = []
  disconnected = false
  constructor(readonly callback: (entries: Entry[]) => void) {
    FakeObserver.instances.push(this)
  }
  observe() {}
  disconnect() {
    this.disconnected = true
  }
}

describe('Container', () => {
  it('caps the content column and takes overrides', () => {
    const { container } = render(
      <Container className="py-4">
        <span>content</span>
      </Container>,
    )
    const box = container.firstElementChild as HTMLElement
    expect(box.className).toContain('max-w-[1280px]')
    expect(box.className).toContain('py-4')
    expect(box.textContent).toBe('content')
  })
})

describe('SectionPill', () => {
  it('renders the three band tones', () => {
    const { rerender } = render(<SectionPill>Pale</SectionPill>)
    expect(screen.getByText('Pale').className).toContain('bg-primary-100')
    rerender(<SectionPill tone="solid">Solid</SectionPill>)
    expect(screen.getByText('Solid').className).toContain('bg-primary-500')
    rerender(<SectionPill tone="dark">Dark</SectionPill>)
    expect(screen.getByText('Dark').className).toContain('bg-accent-900')
  })
})

describe('ActionLink and ActionButton', () => {
  it('renders every variant and size combination', () => {
    const { rerender } = render(
      <ActionLink href="#rates" size="header" variant="secondary">
        Secondary
      </ActionLink>,
    )
    const link = screen.getByRole('link', { name: 'Secondary' })
    expect(link).toHaveAttribute('href', '#rates')
    expect(link.className).toContain('border-gray-300')

    rerender(
      <ActionLink href="#rates" size="lg" variant="white">
        White
      </ActionLink>,
    )
    expect(screen.getByRole('link', { name: 'White' }).className).toContain('bg-white')

    rerender(
      <ActionLink href="#rates" size="lg" variant="outlineWhite">
        Outline
      </ActionLink>,
    )
    expect(screen.getByRole('link', { name: 'Outline' }).className).toContain('border-2')

    const onClick = vi.fn()
    rerender(
      <ActionLink href="#rates" onClick={onClick}>
        Primary
      </ActionLink>,
    )
    fireEvent.click(screen.getByRole('link', { name: 'Primary' }))
    expect(onClick).toHaveBeenCalled()
  })

  it('renders a real submit button', () => {
    const onClick = vi.fn()
    const { container } = render(
      <ActionButton type="submit" onClick={onClick} className="w-full">
        Send
      </ActionButton>,
    )
    const button = container.querySelector('button') as HTMLButtonElement
    expect(button.type).toBe('submit')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })
})

describe('Logo', () => {
  it('draws the orange tile in both tones', () => {
    const { rerender } = render(<Logo brand="Punchlist" />)
    expect(screen.getByText('Punchlist').className).toContain('text-gray-900')
    rerender(<Logo brand="Punchlist" tone="light" />)
    expect(screen.getByText('Punchlist').className).toContain('text-white')
  })
})

describe('BandHeading', () => {
  it('renders pill, heading and lede', () => {
    render(<BandHeading pill="Rates" heading="What things cost" lede="Real numbers" />)
    expect(screen.getByText('Rates')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('What things cost')
    expect(screen.getByText('Real numbers')).toBeInTheDocument()
  })

  it('handles the dark, centred, lede-less variant', () => {
    const { container } = render(
      <BandHeading pill="Coverage" tone="solid" heading="Where we work" onDark centered />,
    )
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.className).toContain('text-white')
    expect(container.querySelector('p')).toBeNull()
    expect((container.firstElementChild as HTMLElement).className).toContain('text-center')
  })
})

describe('Reveal', () => {
  it('reveals on intersect and disconnects', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    FakeObserver.instances = []
    render(
      <Reveal delay={200}>
        <p>card</p>
      </Reveal>,
    )
    const wrapper = document.querySelector('[data-reveal]') as HTMLElement
    expect(wrapper.className).toContain('opacity-0')
    expect(wrapper.style.transitionDelay).toBe('200ms')
    expect(wrapper.getAttribute('data-delay')).toBe('200')

    const observer = FakeObserver.instances[0]!
    act(() => observer.callback([{ isIntersecting: false }, { isIntersecting: true }]))
    expect(wrapper.className).toContain('opacity-100')
    expect(observer.disconnected).toBe(true)
  })

  it('disconnects when the node goes away and stays visible without an observer', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    FakeObserver.instances = []
    const { unmount } = render(
      <Reveal>
        <p>plain</p>
      </Reveal>,
    )
    const observer = FakeObserver.instances[0]!
    unmount()
    expect(observer.disconnected).toBe(true)

    globalThis.IntersectionObserver = undefined as unknown as typeof IntersectionObserver
    render(
      <Reveal>
        <p>no observer</p>
      </Reveal>,
    )
    expect((document.querySelector('[data-reveal]') as HTMLElement).className).toContain(
      'opacity-100',
    )
  })
})

describe('Stars', () => {
  it('has a text equivalent for five stars', () => {
    render(<Stars />)
    expect(screen.getByText('5 out of 5')).toBeInTheDocument()
  })
})

describe('Counter', () => {
  it('ships the authored figure when no observer exists', () => {
    render(<Counter value="2,400" label="Jobs completed" />)
    expect(screen.getByText('2,400')).toBeInTheDocument()
  })

  it('renders a non-figure verbatim', () => {
    render(<Counter value="plenty" label="Jobs completed" />)
    expect(screen.getByText('plenty')).toBeInTheDocument()
  })

  it('counts up on intersect and settles on the authored text', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    FakeObserver.instances = []
    let now = 1000
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      now += 900
      callback(now)
      return now
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())

    render(<Counter value="96%" label="Finished on the first visit" />)
    const observer = FakeObserver.instances[0]!
    act(() => observer.callback([{ isIntersecting: false }]))
    expect(screen.getByText('96%')).toBeInTheDocument()

    act(() => observer.callback([{ isIntersecting: true }]))
    expect(screen.getByText('96%')).toBeInTheDocument()
    expect(observer.disconnected).toBe(true)
  })
})
