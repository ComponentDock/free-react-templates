import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

it('renders the hero heading', () => {
  render(<Hero />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Achieve Desired Perfect Smile',
  )
})

it('renders the description text', () => {
  render(<Hero />)
  expect(screen.getByText(/behind the word mountains/i)).toBeInTheDocument()
})

it('renders both CTA buttons', () => {
  render(<Hero />)
  expect(screen.getByRole('link', { name: /make an appointment/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /our services/i })).toBeInTheDocument()
})

it('renders slide navigation arrows', () => {
  render(<Hero />)
  expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
})
