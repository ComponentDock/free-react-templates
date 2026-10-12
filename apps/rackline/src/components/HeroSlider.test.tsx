import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { HeroSlider } from './HeroSlider'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('HeroSlider', () => {
  it('shows the first slide with its headline, price line and action pair', () => {
    render(<HeroSlider />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Domains that load before you blink')
    expect(heading).toHaveClass('text-[48px]', 'font-light', 'text-white', 'min-[768px]:text-[80px]')
    expect(screen.getByText('Managed hosting from $3.99/month')).toHaveClass('text-[24px]')

    expect(screen.getByRole('link', { name: 'See the plans' })).toHaveAttribute('href', '#plans')
    const outline = screen.getByRole('link', { name: 'Get in touch' })
    expect(outline).toHaveAttribute('href', '#contact')
    expect(outline).toHaveClass('border-white', 'bg-transparent', 'text-white', 'rounded-none')
  })

  it('keeps both slides in the DOM and swaps which one is exposed', async () => {
    render(<HeroSlider />)

    const first = screen.getByTestId('hero-1')
    const second = screen.getByTestId('hero-2')
    expect(first).toHaveAttribute('aria-hidden', 'false')
    expect(second).toHaveAttribute('aria-hidden', 'true')
    expect(second).toHaveClass('opacity-0', 'pointer-events-none')
    expect(second.style.backgroundImage).toContain('rackline-hero-2')

    await userEvent.click(screen.getByRole('button', { name: 'Next slide' }))

    expect(first).toHaveAttribute('aria-hidden', 'true')
    expect(second).toHaveAttribute('aria-hidden', 'false')
    expect(second).toHaveClass('opacity-100')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'An engineer on the line, at any hour',
    )
  })

  it('wraps backwards from the first slide to the last', async () => {
    render(<HeroSlider />)

    await userEvent.click(screen.getByRole('button', { name: 'Previous slide' }))

    expect(screen.getByTestId('hero-1')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByTestId('hero-2')).toHaveAttribute('aria-hidden', 'false')
  })

  it('wraps forwards from the last slide back to the first', async () => {
    render(<HeroSlider />)

    await userEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    await userEvent.click(screen.getByRole('button', { name: 'Next slide' }))

    expect(screen.getByTestId('hero-1')).toHaveAttribute('aria-hidden', 'false')
  })

  it('drifts the photo with the scroll and stands still under reduced motion', () => {
    const view = render(<HeroSlider />)

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 100 })
    fireEvent.scroll(window)

    expect(screen.getByTestId('hero-1').style.backgroundPosition).toContain('15px')

    view.unmount()
    vi.stubGlobal('matchMedia', (query: string) => ({ matches: true, media: query }))
    render(<HeroSlider />)

    expect(screen.getByTestId('hero-1').style.backgroundPosition).toContain('0px')
  })

  it('offers labelled square controls with the arrows inset at both edges', () => {
    render(<HeroSlider />)

    const previous = screen.getByRole('button', { name: 'Previous slide' })
    expect(previous).toHaveClass('h-[50px]', 'w-[50px]', 'left-[10px]', 'bg-black/20')
    expect(screen.getByRole('button', { name: 'Next slide' })).toHaveClass('right-[10px]')
  })
})
