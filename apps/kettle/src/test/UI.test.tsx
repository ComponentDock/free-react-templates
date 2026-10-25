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

function revealWrapper(): HTMLElement {
  return document.querySelector('[data-reveal]') as HTMLElement
}

describe('Wordmark', () => {
  it('sets the name over a letterspaced plate label', () => {
    render(<Wordmark />)

    const wordmark = screen.getByTestId('wordmark')
    expect(wordmark).toHaveTextContent('Kettle')
    expect(wordmark).toHaveTextContent('Water Heaters')
    expect(wordmark.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText('Kettle')).toHaveClass('text-ink-800')
  })

  it('switches to the light treatment in the footer', () => {
    render(<Wordmark light />)

    expect(screen.getByText('Kettle')).toHaveClass('text-white')
    expect(screen.getByText('Water Heaters')).toHaveClass('text-white/60')
    expect(screen.getByTestId('wordmark').querySelector('rect')).toHaveAttribute('fill', '#e99c31')
  })
})

describe('SectionHead', () => {
  it('renders a plain brand eyebrow on the light bands', () => {
    render(<SectionHead eyebrow="The honest version" title="Tankless is not automatically better" />)

    expect(screen.getByText('The honest version')).toHaveClass('text-primary-700', 'uppercase')
    expect(
      screen.getByRole('heading', { name: 'Tankless is not automatically better' }),
    ).toHaveClass('text-3xl')
    expect(screen.queryByText(/^The questions/)).toBeNull()
  })

  it('renders a pill eyebrow and a lede, centred', () => {
    render(
      <SectionHead
        eyebrow="Reviews"
        title="What people say afterwards"
        lede="Sample reviews for demonstration."
        align="center"
        pill
      />,
    )

    expect(screen.getByText('Reviews')).toHaveClass('rounded-full', 'bg-primary-100')
    expect(screen.getByText('Sample reviews for demonstration.')).toHaveClass('mx-auto', 'text-lg')
    expect(screen.getByText('What people say afterwards').parentElement).toHaveClass(
      'mx-auto',
      'text-center',
    )
  })

  it('uses the pale accent eyebrow on the dark band', () => {
    render(
      <SectionHead
        eyebrow="Sizing"
        title="Answer four things"
        lede="Tank sizing charts ask how big your house is."
        tone="accent"
      />,
    )

    expect(screen.getByText('Sizing')).toHaveClass('text-primary-400')
    expect(screen.getByText('Tank sizing charts ask how big your house is.')).toHaveClass(
      'text-white/70',
    )
  })
})

describe('Reveal', () => {
  it('shows its children immediately when there is no observer', () => {
    render(
      <Reveal className="mt-12">
        <p>Content</p>
      </Reveal>,
    )

    expect(revealWrapper()).toHaveAttribute('data-reveal', 'shown')
    expect(revealWrapper()).toHaveClass('mt-12')
  })

  it('starts hidden and reveals once the block intersects', () => {
    const observers = installIO()
    render(
      <Reveal delay={200}>
        <p>Block</p>
      </Reveal>,
    )

    const wrapper = revealWrapper()
    expect(wrapper).toHaveAttribute('data-reveal', 'pending')
    expect(wrapper).toHaveStyle({ transitionDelay: '200ms' })

    act(() => {
      observers[0]!.fire(false, wrapper)
    })
    expect(wrapper).toHaveAttribute('data-reveal', 'pending')

    act(() => {
      observers[0]!.fire(true, wrapper)
    })
    expect(wrapper).toHaveAttribute('data-reveal', 'shown')
  })

  it('never animates under a reduced-motion preference', () => {
    installIO()
    stubMedia({ '(prefers-reduced-motion: reduce)': true })
    render(
      <Reveal>
        <p>Still</p>
      </Reveal>,
    )

    expect(revealWrapper()).toHaveAttribute('data-reveal', 'shown')
  })
})

function ToastHarness({ message }: { message: string | null }) {
  const { message: current, notify } = useToast()

  return (
    <div>
      <button type="button" onClick={() => notify('Saved')}>
        notify
      </button>
      <button type="button" onClick={() => notify('Saved again')}>
        notify again
      </button>
      <Toast message={message ?? current} />
    </div>
  )
}

describe('Toast', () => {
  it('renders nothing without a message', () => {
    render(<Toast message={null} />)

    expect(screen.queryByRole('status')).toBeNull()
  })

  it('announces a message and clears it after four seconds', () => {
    vi.useFakeTimers()
    render(<ToastHarness message={null} />)

    act(() => {
      screen.getByRole('button', { name: 'notify' }).click()
    })
    expect(screen.getByRole('status')).toHaveTextContent('Saved')

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('replaces the message when a second one arrives', () => {
    vi.useFakeTimers()
    render(<ToastHarness message={null} />)

    act(() => {
      screen.getByRole('button', { name: 'notify' }).click()
    })
    act(() => {
      screen.getByRole('button', { name: 'notify again' }).click()
    })

    expect(screen.getAllByRole('status')).toHaveLength(1)
    expect(screen.getByRole('status')).toHaveTextContent('Saved again')
  })

  it('clears the pending timer on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<ToastHarness message={null} />)

    act(() => {
      screen.getByRole('button', { name: 'notify' }).click()
    })
    unmount()

    expect(vi.getTimerCount()).toBe(0)
  })

  it('unmounts cleanly when nothing was ever notified', () => {
    const { unmount } = render(<ToastHarness message={null} />)

    unmount()

    expect(screen.queryByRole('status')).toBeNull()
  })
})
