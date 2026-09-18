import { render, screen } from '@testing-library/react'
import { Services } from './Services'

test('renders section heading', () => {
  render(<Services />)
  expect(screen.getByText('Our Services')).toBeInTheDocument()
})

test('renders all four service cards', () => {
  render(<Services />)
  expect(screen.getByText('Easy To Manage Jobs')).toBeInTheDocument()
  expect(screen.getByText('Search Expert Candidates')).toBeInTheDocument()
  expect(screen.getByText('Top Companies Hiring')).toBeInTheDocument()
  expect(screen.getByText('Career Growth Tools')).toBeInTheDocument()
})

test('renders service descriptions', () => {
  render(<Services />)
  expect(screen.getByText(/Post and manage job listings/)).toBeInTheDocument()
  expect(screen.getByText(/Find the best candidates/)).toBeInTheDocument()
  expect(screen.getByText(/Connect with leading companies/)).toBeInTheDocument()
  expect(screen.getByText(/Access resources and insights/)).toBeInTheDocument()
})

test('renders four icon containers', () => {
  const { container } = render(<Services />)
  const icons = container.querySelectorAll('svg')
  expect(icons.length).toBe(4)
})

test('renders subheading', () => {
  render(<Services />)
  expect(screen.getByText('What we offer to help you find the perfect job')).toBeInTheDocument()
})
