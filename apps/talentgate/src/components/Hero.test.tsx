import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

test('renders hero headline', () => {
  render(<Hero />)
  expect(screen.getByText('Your Dream Job is Waiting')).toBeInTheDocument()
})

test('renders job counter text', () => {
  render(<Hero />)
  expect(screen.getByText(/850,000 great job offers/)).toBeInTheDocument()
})

test('renders CTA button', () => {
  render(<Hero />)
  const cta = screen.getByText('Get Started')
  expect(cta).toBeInTheDocument()
  expect(cta.closest('a')).toHaveAttribute('href', '#find-job')
})

test('renders background image', () => {
  const { container } = render(<Hero />)
  const img = container.querySelector('img[src*="talentgate-hero"]')
  expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/talentgate-hero/1920/1080')
})

test('renders description paragraph', () => {
  render(<Hero />)
  expect(screen.getByText(/Find the perfect job/)).toBeInTheDocument()
})
