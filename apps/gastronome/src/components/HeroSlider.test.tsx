import { render, screen, fireEvent, act } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'
import { it, expect, vi, beforeEach, afterEach } from 'vitest'

beforeEach(() => {
  vi.useFakeTimers()
})
afterEach(() => {
  vi.useRealTimers()
})

it('renders the first slide with heading and CTA', () => {
  render(<HeroSlider />)
  expect(screen.getByText('Welcome to')).toBeInTheDocument()
  expect(screen.getByText('Gastronome')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'View Menu' })).toBeInTheDocument()
})

it('auto-advances slides', () => {
  render(<HeroSlider />)
  expect(screen.getByText('Welcome to')).toBeInTheDocument()
  act(() => {
    vi.advanceTimersByTime(5000)
  })
  expect(screen.getByText('Experience')).toBeInTheDocument()
  expect(screen.getByText('Fine Dining')).toBeInTheDocument()
})

it('navigates to a specific slide via dot buttons', () => {
  render(<HeroSlider />)
  const dots = screen.getAllByRole('button', { name: /go to slide/i })
  fireEvent.click(dots[2]!)
  expect(screen.getByText('Discover')).toBeInTheDocument()
  expect(screen.getByText('Italian Cuisine')).toBeInTheDocument()
})

it('renders correct number of slide images', () => {
  const { container } = render(<HeroSlider />)
  const images = container.querySelectorAll('img')
  expect(images.length).toBeGreaterThanOrEqual(3)
})
