import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { App } from './App'

const buttons = () => screen.getAllByRole('button')
const status = () => screen.getByTestId('status')

const click = (index: number) => {
  fireEvent.click(buttons()[index]!)
  act(() => {
    vi.advanceTimersByTime(60)
  })
}

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders one band: header, reserved status line and the four-card grid', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Everyday carry')
    expect(screen.getByRole('main')).toHaveClass('max-w-[1232px]', 'px-4')
    expect(screen.getByRole('main').className).toContain('py-[clamp(32px,6vw,72px)]')
    expect(screen.getAllByRole('article')).toHaveLength(4)
    expect(screen.queryByRole('navigation')).toBeNull()
    expect(status()).toHaveTextContent('')
  })

  it('reserves the status line so the first announcement cannot shift the grid', () => {
    render(<App />)

    expect(status()).toHaveClass('min-h-5', 'leading-5', '-mt-[18px]')
    expect(status()).toHaveAttribute('role', 'status')
  })

  it('adds an item: lime button, tick, count 1 and a singular announcement', () => {
    render(<App />)

    click(0)

    expect(buttons()[0]).toHaveAttribute('aria-pressed', 'true')
    expect(buttons()[0]).toHaveTextContent('Added to bag')
    expect(screen.getByTestId('bag-count')).toHaveTextContent('1')
    expect(screen.getByTestId('bag-count')).toHaveClass('scale-125')
    expect(status()).toHaveTextContent('Arc Wireless Headphones added to your bag. 1 item in bag.')
  })

  it('removes the same item again and returns the ink button', () => {
    render(<App />)

    click(0)
    click(0)

    expect(buttons()[0]).toHaveAttribute('aria-pressed', 'false')
    expect(buttons()[0]).toHaveTextContent('Add to bag')
    expect(screen.getByTestId('bag-count')).toHaveTextContent('0')
    expect(status()).toHaveTextContent('Arc Wireless Headphones removed from your bag. 0 items in bag.')
  })

  it('counts the cards in the bag, not the clicks', () => {
    render(<App />)

    click(0)
    click(1)
    click(2)
    click(3)

    expect(screen.getByTestId('bag-count')).toHaveTextContent('4')
    expect(status()).toHaveTextContent('Canvas Market Tote added to your bag. 4 items in bag.')

    click(1)
    expect(screen.getByTestId('bag-count')).toHaveTextContent('3')
    expect(status()).toHaveTextContent('Meridian Leather Watch removed from your bag. 3 items in bag.')
  })

  it('clears the message before re-setting it, so a repeat still announces', () => {
    render(<App />)

    click(0)
    expect(status()).toHaveTextContent('Arc Wireless Headphones added to your bag. 1 item in bag.')

    fireEvent.click(buttons()[0]!)
    expect(status()).toHaveTextContent('')
    act(() => {
      vi.advanceTimersByTime(60)
    })
    expect(status()).toHaveTextContent('Arc Wireless Headphones removed from your bag. 0 items in bag.')
  })

  it('drops the counter bump after 250ms', () => {
    render(<App />)

    fireEvent.click(buttons()[0]!)
    act(() => {
      vi.advanceTimersByTime(50)
    })
    expect(screen.getByTestId('bag-count')).toHaveClass('scale-125')

    act(() => {
      vi.advanceTimersByTime(250)
    })
    expect(screen.getByTestId('bag-count')).not.toHaveClass('scale-125')
  })

  it('names every product exactly as its heading does', () => {
    render(<App />)

    const names = screen.getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent)
    names.forEach((name, index) => {
      click(index)
      expect(status()).toHaveTextContent(`${name} added to your bag.`)
    })
  })

  it('clears both pending timers when it unmounts', () => {
    const { unmount } = render(<App />)

    fireEvent.click(buttons()[0]!)
    expect(vi.getTimerCount()).toBe(2)

    unmount()

    expect(vi.getTimerCount()).toBe(0)
  })
})
