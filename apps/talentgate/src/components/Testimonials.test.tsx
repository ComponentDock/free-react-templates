import { render, screen, act } from '@testing-library/react'
import { Testimonials } from './Testimonials'

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true })
})

afterEach(() => {
  vi.useRealTimers()
})

test('renders section heading', () => {
  render(<Testimonials />)
  expect(screen.getByText('Happy Clients')).toBeInTheDocument()
})

test('renders first testimonial by default', () => {
  render(<Testimonials />)
  expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  expect(screen.getByText('Software Engineer')).toBeInTheDocument()
  expect(screen.getByText(/TalentGate helped me find/)).toBeInTheDocument()
})

test('renders user photo', () => {
  render(<Testimonials />)
  const img = screen.getByAltText('Sarah Johnson')
  expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/testimonial-1/100/100')
})

test('renders navigation dots', () => {
  render(<Testimonials />)
  const dots = screen.getAllByLabelText(/Show testimonial/)
  expect(dots.length).toBe(3)
})

test('switches testimonial on dot click', () => {
  render(<Testimonials />)
  const dot2 = screen.getByLabelText('Show testimonial 2')
  act(() => {
    dot2.click()
  })
  expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  expect(screen.getByText('Product Manager')).toBeInTheDocument()
})

test('auto-rotates testimonials', () => {
  render(<Testimonials />)
  expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  act(() => {
    vi.advanceTimersByTime(5000)
  })
  expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  act(() => {
    vi.advanceTimersByTime(5000)
  })
  expect(screen.getByText('Emily Davis')).toBeInTheDocument()
})

test('wraps around after last testimonial', () => {
  render(<Testimonials />)
  act(() => {
    vi.advanceTimersByTime(15000) // 3 * 5000 = back to first
  })
  expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
})
