import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act, fireEvent } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide heading by default', () => {
    render(<HeroSlider />)
    expect(screen.getByText(/We Provide The/)).toBeInTheDocument()
  })

  it('renders the accent word from the first slide', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Best')).toBeInTheDocument()
  })

  it('renders the heading end from the first slide', () => {
    render(<HeroSlider />)
    expect(screen.getByText(/Construction Services/)).toBeInTheDocument()
  })

  it('renders the subheading from the first slide', () => {
    render(<HeroSlider />)
    expect(screen.getByText(/Professional construction solutions/)).toBeInTheDocument()
  })

  it('renders the Request A Quote button', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('button', { name: /request a quote/i })).toBeInTheDocument()
  })

  it('renders the background image', () => {
    render(<HeroSlider />)
    const img = document.querySelector('#home img')
    expect(img).toHaveAttribute('src', expect.stringContaining('nectar-hero-1'))
  })

  it('renders slide navigation dots', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('tablist', { name: /slide navigation/i })).toBeInTheDocument()
  })

  it('renders two dot buttons', () => {
    render(<HeroSlider />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(2)
  })

  it('first dot is selected by default', () => {
    render(<HeroSlider />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false')
  })

  it('navigates to second slide on dot click', () => {
    render(<HeroSlider />)
    const tabs = screen.getAllByRole('tab')
    act(() => {
      fireEvent.click(tabs[1]!)
    })
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
  })

  it('displays second slide content after clicking second dot', () => {
    render(<HeroSlider />)
    const tabs = screen.getAllByRole('tab')
    act(() => {
      fireEvent.click(tabs[1]!)
    })
    expect(screen.getByText(/Building Your/)).toBeInTheDocument()
    expect(screen.getByText('Future')).toBeInTheDocument()
  })

  it('auto-advances to second slide after 6 seconds', () => {
    render(<HeroSlider />)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText(/Building Your/)).toBeInTheDocument()
    const tabs = screen.getAllByRole('tab')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
  })

  it('auto-advances back to first slide after 12 seconds', () => {
    render(<HeroSlider />)
    act(() => {
      vi.advanceTimersByTime(12000)
    })
    expect(screen.getByText(/We Provide The/)).toBeInTheDocument()
  })

  it('renders the section with id="home"', () => {
    const { container } = render(<HeroSlider />)
    expect(container.querySelector('#home')).toBeInTheDocument()
  })

  it('renders overlay div with aria-hidden', () => {
    const { container } = render(<HeroSlider />)
    const overlays = container.querySelectorAll('[aria-hidden="true"]')
    expect(overlays.length).toBeGreaterThanOrEqual(2)
  })

  it('navigates back to first slide on first dot click after switching', () => {
    render(<HeroSlider />)
    const tabs = screen.getAllByRole('tab')
    act(() => {
      fireEvent.click(tabs[1]!)
    })
    act(() => {
      fireEvent.click(tabs[0]!)
    })
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText(/We Provide The/)).toBeInTheDocument()
  })
})
