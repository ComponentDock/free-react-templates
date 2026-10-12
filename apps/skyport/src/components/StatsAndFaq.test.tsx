import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { StatsAndFaq } from './StatsAndFaq'

describe('StatsAndFaq', () => {
  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('renders four counter facts beside three question and answer pairs', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: false } as MediaQueryList)
    vi.useFakeTimers()

    render(<StatsAndFaq />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Cloud Hosting, Answered')
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(7)
    expect(screen.getByText('Are your templates responsive?')).toBeInTheDocument()
    expect(screen.getByText('Can I use the theme for my client?')).toBeInTheDocument()
  })

  it('counts each fact up to its final figure', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: false } as MediaQueryList)
    vi.useFakeTimers()

    render(<StatsAndFaq />)

    expect(screen.getAllByText('0')).toHaveLength(4)

    act(() => {
      vi.advanceTimersByTime(1200)
    })

    expect(screen.getByText('1284')).toBeInTheDocument()
    expect(screen.getByText('762')).toBeInTheDocument()
    expect(screen.getByText('2318')).toBeInTheDocument()
    expect(screen.getByText('4120')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Cup of Coffee')).toBeInTheDocument()
  })

  it('jumps straight to the final figures when reduced motion is preferred', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: true } as MediaQueryList)
    vi.useFakeTimers()

    const { unmount } = render(<StatsAndFaq />)

    expect(screen.getByText('1284')).toBeInTheDocument()
    expect(screen.queryByText('0')).not.toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(screen.getByText('4120')).toBeInTheDocument()

    unmount()
  })

  it('anchors the band, keeps it white and right-aligns the facts at lg', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: true } as MediaQueryList)

    const { container } = render(<StatsAndFaq />)

    expect(container.querySelector('section')).toHaveAttribute('id', 'faq')
    expect(container.querySelector('section')).toHaveClass('bg-surface', 'py-[120px]')
    expect(container.querySelector('.lg\\:text-right')).toBeInTheDocument()
    expect(screen.getByText('1284')).toHaveClass('text-[48px]', 'font-bold', 'text-brand')
  })

  it('styles the questions and answers with the reference type scale', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: true } as MediaQueryList)

    render(<StatsAndFaq />)

    const question = screen.getByText('Does it have all the plugins as mentioned?')
    expect(question).toHaveClass('text-[18px]', 'font-semibold', 'mt-[15px]', 'mb-[25px]')
    expect(screen.getByText(/Everything the design needs is bundled in/)).toHaveClass(
      'text-[16px]',
      'leading-[24px]',
      'font-light',
    )
  })
})
