import { render, screen } from '@testing-library/react'
import { JobListings } from './JobListings'

test('renders section heading', () => {
  render(<JobListings />)
  expect(screen.getByText('Current Job Posts')).toBeInTheDocument()
})

test('renders all four job cards', () => {
  render(<JobListings />)
  expect(screen.getByText('Frontend Development')).toBeInTheDocument()
  expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
  expect(screen.getByText('Open Source Interactive Developer')).toBeInTheDocument()
  expect(screen.getByText('UI/UX Designer')).toBeInTheDocument()
})

test('renders job type badges', () => {
  render(<JobListings />)
  expect(screen.getByText('Part Time')).toBeInTheDocument()
  expect(screen.getAllByText('Full Time').length).toBe(2)
  expect(screen.getAllByText('Remote').length).toBeGreaterThanOrEqual(1)
})

test('renders Apply Job buttons', () => {
  render(<JobListings />)
  const applyButtons = screen.getAllByLabelText(/Apply for/)
  expect(applyButtons.length).toBe(4)
})

test('renders Save/favorite buttons', () => {
  render(<JobListings />)
  const saveButtons = screen.getAllByLabelText(/Save/)
  expect(saveButtons.length).toBe(4)
})

test('renders company names', () => {
  render(<JobListings />)
  expect(screen.getByText('TechCorp Inc.')).toBeInTheDocument()
  expect(screen.getByText('Digital Solutions')).toBeInTheDocument()
  expect(screen.getByText('OpenTech')).toBeInTheDocument()
  expect(screen.getByText('Creative Studio')).toBeInTheDocument()
})

test('renders locations', () => {
  render(<JobListings />)
  expect(screen.getByText('San Francisco, CA')).toBeInTheDocument()
  expect(screen.getByText('New York, NY')).toBeInTheDocument()
})

test('renders company logos', () => {
  render(<JobListings />)
  const logos = screen.getAllByRole('img')
  expect(logos.length).toBe(4)
  expect(logos[0]).toHaveAttribute('src', 'https://picsum.photos/seed/job-logo-1/50/50')
})
