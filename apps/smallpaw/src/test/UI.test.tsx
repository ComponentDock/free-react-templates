import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { Toast, useToast } from '../components/Toast'
import { Wordmark } from '../components/Wordmark'
import { installIO, resetMedia, stubMedia } from './helpers'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
  resetMedia()
})

describe('Wordmark', () => {
  it('draws the paw mark in the brand palette', () => {
    render(<Wordmark />)

    const mark = screen.getByRole('img', { name: /Smallpaw/ })
    expect(mark.querySelectorAll('circle')).toHaveLength(4)
    expect(mark.querySelector('ellipse')).toHaveAttribute('fill', '#a83a6f')
    expect(mark).toHaveClass('h-8')
  })

  it('inverts for the dark footer ground', () => {
    render(<Wordmark light />)

    const mark = screen.getByRole('img', { name: /Smallpaw/ })
    expect(mark.querySelector('ellipse')).toHaveAttribute('fill', '#fbe8f1')
    expect(mark.querySelectorAll('text')[0]).toHaveAttribute('fill', '#ffffff')
  })
})

describe('Reveal', () => {
  it('renders content visible when no observer exists (jsdom)', () => {
    render(
      <Reveal delay={200}>
        <p>Published fees</p>
      </Reveal>,
    )

    const wrapper = screen.getByText('Published fees').parentElement
    expect(wrapper).toHaveAttribute('data-reveal', 'shown')
    expect(wrapper).toHaveStyle({ transitionDelay: '200ms' })
  })

  it('skips the animation under reduced motion', () => {
    stubMedia({ '(prefers-reduced-motion: reduce)': true })
    render(
      <Reveal>
        <p>Published fees</p>
      </Reveal>,
    )

    expect(screen.getByText('Published fees').parentElement).toHaveAttribute('data-reveal', 'shown')
  })

  it('waits for the intersection, then reveals once', () => {
    const observers = installIO()
    render(
      <Reveal className="mt-8">
        <p>Published fees</p>
      </Reveal>,
    )

    const wrapper = screen.getByText('Published fees').parentElement
    expect(wrapper).toHaveAttribute('data-reveal', 'pending')

    act(() => {
      observers[0]!.fire(false, wrapper as Element)
    })
    expect(wrapper).toHaveAttribute('data-reveal', 'pending')

    act(() => {
      observers[0]!.fire(true, wrapper as Element)
    })

    expect(wrapper).toHaveAttribute('data-reveal', 'shown')
  })
})

describe('SectionHead', () => {
  it('renders the pill eyebrow by default', () => {
    render(<SectionHead eyebrow="Animals we see" title="What we treat" lede="Plainly." />)

    expect(screen.getByText('Animals we see')).toHaveClass('bg-primary-100')
    expect(screen.getByRole('heading', { level: 2, name: 'What we treat' })).toBeInTheDocument()
    expect(screen.getByText('Plainly.')).toHaveClass('text-gray-600')
  })

  it('inverts the pill, the heading and the lede on a dark ground', () => {
    render(
      <SectionHead
        eyebrow="Health plans"
        title="Preventive care"
        lede="Monthly."
        variant="plumPill"
        align="center"
        onDark
      />,
    )

    expect(screen.getByText('Health plans')).toHaveClass('bg-primary-700')
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('text-white')
    expect(screen.getByText('Monthly.')).toHaveClass('text-primary-200')
  })

  it('renders the bar eyebrow used by the fee guide', () => {
    render(
      <SectionHead eyebrow="Fee guide" title="What it costs" lede="Published." variant="bar" />,
    )

    expect(screen.getByText('Fee guide')).toHaveClass('uppercase', 'text-primary-700')
  })
})

describe('Toast', () => {
  function Harness() {
    const { message, notify } = useToast()

    return (
      <button type="button" onClick={() => notify('Subscribed')}>
        {message ?? 'idle'}
      </button>
    )
  }

  it('shows a message and clears it after 4 s', () => {
    vi.useFakeTimers()
    render(<Harness />)

    act(() => {
      screen.getByRole('button').click()
    })
    expect(screen.getByRole('button')).toHaveTextContent('Subscribed')

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.getByRole('button')).toHaveTextContent('idle')
  })

  it('restarts the timer when a second message arrives', () => {
    vi.useFakeTimers()
    render(<Harness />)

    act(() => {
      screen.getByRole('button').click()
    })
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    act(() => {
      screen.getByRole('button').click()
    })
    act(() => {
      vi.advanceTimersByTime(3000)
    })

    expect(screen.getByRole('button')).toHaveTextContent('Subscribed')
  })

  it('is absent when there is nothing to say', () => {
    render(<Toast message={null} />)

    expect(screen.queryByRole('status')).toBeNull()
  })
})
