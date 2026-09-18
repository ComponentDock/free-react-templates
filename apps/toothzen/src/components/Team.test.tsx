import { render, screen } from '@testing-library/react'
import { Team } from './Team'

it('renders the team heading', () => {
  render(<Team />)
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Qualified Dentist')
})

it('renders all four dentist cards', () => {
  render(<Team />)
  expect(screen.getByText('Dr. John Doe')).toBeInTheDocument()
  expect(screen.getByText('Dr. Jane Smith')).toBeInTheDocument()
  expect(screen.getByText('Dr. Mike Johnson')).toBeInTheDocument()
  expect(screen.getByText('Dr. Sarah Wilson')).toBeInTheDocument()
})

it('renders roles for each dentist', () => {
  render(<Team />)
  expect(screen.getByText('Lead Dentist')).toBeInTheDocument()
  expect(screen.getByText('Orthodontist')).toBeInTheDocument()
  expect(screen.getByText('Oral Surgeon')).toBeInTheDocument()
  expect(screen.getByText('Pediatric Dentist')).toBeInTheDocument()
})

it('renders social icons for each dentist', () => {
  render(<Team />)
  const socialLinks = screen.getAllByRole('link', { name: /facebook|twitter|instagram|linkedin/i })
  expect(socialLinks.length).toBeGreaterThanOrEqual(4)
})
