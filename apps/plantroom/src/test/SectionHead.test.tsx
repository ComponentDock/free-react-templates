import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { SectionHead } from '../components/SectionHead'
import { Reveal } from '../components/Reveal'
import { installIO, resetMedia, stubMedia } from './helpers'

afterEach(() => {
  vi.unstubAllGlobals()
  resetMedia()
})

describe('SectionHead', () => {
  it('renders the text eyebrow on a light ground, left aligned', () => {
    render(<SectionHead eyebrow="Response" title="Three tiers" lede="Written into the agreement" />)

    expect(screen.getByText('Response')).toHaveClass('text-primary-700')
    expect(screen.getByRole('heading', { level: 2, name: 'Three tiers' })).toHaveClass(
      'text-ink-800',
    )
    expect(screen.getByText('Written into the agreement')).toHaveClass('text-ink-500')
  })

  it('renders the pill eyebrow, centred, with an extra class', () => {
    render(
      <SectionHead
        variant="pill"
        align="center"
        eyebrow="Questions"
        title="What procurement asks"
        lede="Five questions"
        className="mt-4"
      />,
    )

    expect(screen.getByText('Questions')).toHaveClass('rounded-full', 'bg-primary-100')
    expect(screen.getByText('Five questions').parentElement).toHaveClass('text-center', 'mt-4')
  })

  it('renders the dark tone for the response band', () => {
    render(<SectionHead tone="dark" eyebrow="Response" title="Tiers" lede="Remedy" />)

    expect(screen.getByText('Response')).toHaveClass('text-primary-400')
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('text-white')
    expect(screen.getByText('Remedy')).toHaveClass('text-white/70')
  })

  it('keeps the pill eyebrow on the light ground even when the tone is dark', () => {
    render(<SectionHead variant="pill" tone="dark" eyebrow="References" title="T" lede="L" />)

    expect(screen.getByText('References')).toHaveClass('rounded-full')
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('text-white')
  })
})

describe('Reveal', () => {
  it('shows its content immediately when there is no IntersectionObserver', () => {
    render(<Reveal>content</Reveal>)

    const wrapper = screen.getByText('content')
    expect(wrapper).toHaveAttribute('data-reveal', 'shown')
    expect(wrapper).toHaveClass('opacity-100')
  })

  it('stays visible under reduced motion even with an observer available', () => {
    stubMedia({ '(prefers-reduced-motion: reduce)': true })
    installIO()

    render(<Reveal>content</Reveal>)

    expect(screen.getByText('content')).toHaveAttribute('data-reveal', 'shown')
  })

  it('waits hidden, then reveals once the block intersects', () => {
    const observers = installIO()

    render(<Reveal delay={120}>content</Reveal>)

    const wrapper = screen.getByText('content') as HTMLElement
    expect(wrapper).toHaveAttribute('data-reveal', 'pending')
    expect(wrapper.style.transitionDelay).toBe('120ms')
    expect(observers[0]!.elements).toHaveLength(1)

    act(() => {
      observers[0]!.fire(false, wrapper)
    })
    expect(wrapper).toHaveAttribute('data-reveal', 'pending')

    act(() => {
      observers[0]!.fire(true, wrapper)
    })
    expect(wrapper).toHaveAttribute('data-reveal', 'shown')
    expect(wrapper).toHaveClass('opacity-100')
  })
})
