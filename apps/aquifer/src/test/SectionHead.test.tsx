import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { installIO, resetMedia, stubMedia } from './helpers'

afterEach(() => {
  vi.unstubAllGlobals()
  resetMedia()
})

describe('SectionHead', () => {
  it('renders the text eyebrow on a light ground, left aligned', () => {
    render(
      <SectionHead eyebrow="Sizing" title="Both options" lede="Measured, not guessed" />,
    )

    expect(screen.getByText('Sizing')).toHaveClass('text-primary-700', 'uppercase')
    expect(screen.getByRole('heading', { level: 2, name: 'Both options' })).toHaveClass(
      'text-ink-800',
    )
    expect(screen.getByText('Measured, not guessed')).toHaveClass('text-ink-500')
  })

  it('renders the pill eyebrow, centred, with an extra class', () => {
    render(
      <SectionHead
        variant="pill"
        align="center"
        eyebrow="Reviews"
        title="Afterwards"
        lede="Sample reviews"
        className="mt-4"
      />,
    )

    expect(screen.getByText('Reviews')).toHaveClass('rounded-full', 'bg-primary-100')
    expect(screen.getByText('Sample reviews')).toHaveClass('text-gray-600')
    expect(screen.getByText('Sample reviews').parentElement).toHaveClass('text-center', 'mt-4')
  })
})

describe('Reveal', () => {
  it('shows its content immediately when no observer exists', () => {
    const { container } = render(<Reveal>Band copy</Reveal>)

    const wrapper = container.firstElementChild
    expect(wrapper).toHaveAttribute('data-reveal', 'shown')
    expect(wrapper).toHaveClass('opacity-100')
  })

  it('starts hidden and reveals once the element intersects', () => {
    const observers = installIO()
    const { container } = render(<Reveal delay={150}>Band copy</Reveal>)

    const wrapper = container.firstElementChild
    expect(wrapper).toHaveAttribute('data-reveal', 'pending')
    expect(wrapper).toHaveClass('opacity-0', 'translate-y-5')
    expect(wrapper).toHaveStyle({ transitionDelay: '150ms' })

    act(() => {
      observers[0]!.fire(true, wrapper as Element)
    })

    expect(wrapper).toHaveAttribute('data-reveal', 'shown')
    expect(wrapper).toHaveClass('opacity-100')
  })

  it('ignores a non-intersecting entry', () => {
    const observers = installIO()
    const { container } = render(<Reveal>Band copy</Reveal>)
    const wrapper = container.firstElementChild

    act(() => {
      observers[0]!.fire(false, wrapper as Element)
    })

    expect(wrapper).toHaveAttribute('data-reveal', 'pending')
  })

  it('never hides content under reduced motion', () => {
    installIO()
    stubMedia({ '(prefers-reduced-motion: reduce)': true })
    const { container } = render(<Reveal>Band copy</Reveal>)

    expect(container.firstElementChild).toHaveAttribute('data-reveal', 'shown')
  })
})
