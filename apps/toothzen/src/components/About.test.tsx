import { render, screen } from '@testing-library/react'
import { About } from './About'

it('renders the welcome text', () => {
  render(<About />)
  expect(screen.getByText('Welcome to Toothzen')).toBeInTheDocument()
})

it('renders the About heading', () => {
  render(<About />)
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
    'We Are Toothzen A Dental Clinic',
  )
})

it('renders the body copy', () => {
  render(<About />)
  expect(screen.getByText(/behind the word mountains/i)).toBeInTheDocument()
})

it('renders the CTA link', () => {
  render(<About />)
  expect(screen.getByRole('link', { name: /get in touch with us/i })).toBeInTheDocument()
})

it('renders the clinic image', () => {
  render(<About />)
  const img = screen.getByAltText('Dental clinic interior')
  expect(img).toBeInTheDocument()
})
