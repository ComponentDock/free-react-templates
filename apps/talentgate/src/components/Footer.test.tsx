import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

test('renders brand name', () => {
  render(<Footer />)
  expect(screen.getByText('TalentGate')).toBeInTheDocument()
})

test('renders Component Dock link', () => {
  render(<Footer />)
  const link = screen.getByRole('link', { name: 'Component Dock' })
  expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  expect(link).toHaveAttribute('target', '_blank')
})

test('renders Employer links', () => {
  render(<Footer />)
  expect(screen.getByText('Employers')).toBeInTheDocument()
  expect(screen.getByText('Post a Job')).toBeInTheDocument()
  expect(screen.getByText('Browse Candidates')).toBeInTheDocument()
  expect(screen.getByText('Pricing')).toBeInTheDocument()
  expect(screen.getByText('Resources')).toBeInTheDocument()
})

test('renders Worker links', () => {
  render(<Footer />)
  expect(screen.getByText('Workers')).toBeInTheDocument()
  expect(screen.getByText('Find Jobs')).toBeInTheDocument()
  expect(screen.getByText('Career Advice')).toBeInTheDocument()
  expect(screen.getByText('Resume Tips')).toBeInTheDocument()
  expect(screen.getByText('Salary Guide')).toBeInTheDocument()
})

test('renders social media links', () => {
  render(<Footer />)
  expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
  expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
})

test('renders description', () => {
  render(<Footer />)
  expect(screen.getByText(/Connecting talent with opportunity/)).toBeInTheDocument()
})

test('renders Made with text', () => {
  render(<Footer />)
  expect(screen.getByText('Made with')).toBeInTheDocument()
})
