import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Reveal } from '../components/Reveal'
import { installIO, resetMedia, stubMedia } from '../test/helpers'

afterEach(() => {
  vi.unstubAllGlobals()
  resetMedia()
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
