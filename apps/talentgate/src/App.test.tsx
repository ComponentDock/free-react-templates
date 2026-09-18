import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders all sections', () => {
  render(<App />)
  expect(screen.getByRole('navigation')).toBeInTheDocument()
  expect(screen.getAllByText('TalentGate').length).toBeGreaterThanOrEqual(2)
  expect(screen.getByText('Your Dream Job is Waiting')).toBeInTheDocument()
  expect(screen.getByText('Our Services')).toBeInTheDocument()
  expect(screen.getByText('Current Job Posts')).toBeInTheDocument()
  expect(screen.getAllByText('Happy Clients').length).toBeGreaterThanOrEqual(2)
  expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  expect(screen.getByText('Subscribe to our Newsletter')).toBeInTheDocument()
  expect(screen.getByText('Made with')).toBeInTheDocument()
})
