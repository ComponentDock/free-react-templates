import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchTabs } from './SearchTabs'

test('renders search tabs', () => {
  render(<SearchTabs />)
  expect(screen.getByRole('tab', { name: 'Find Job' })).toBeInTheDocument()
  expect(screen.getByRole('tab', { name: 'Find Candidate' })).toBeInTheDocument()
})

test('Find Job tab is active by default', () => {
  render(<SearchTabs />)
  const findJob = screen.getByRole('tab', { name: 'Find Job' })
  expect(findJob).toHaveAttribute('aria-selected', 'true')
})

test('switches to Find Candidate tab on click', async () => {
  const user = userEvent.setup()
  render(<SearchTabs />)
  await user.click(screen.getByRole('tab', { name: 'Find Candidate' }))
  expect(screen.getByRole('tab', { name: 'Find Candidate' })).toHaveAttribute(
    'aria-selected',
    'true',
  )
  expect(screen.getByRole('tab', { name: 'Find Job' })).toHaveAttribute('aria-selected', 'false')
})

test('renders form fields', () => {
  render(<SearchTabs />)
  expect(screen.getByLabelText('Job title or keyword')).toBeInTheDocument()
  expect(screen.getByLabelText('Location')).toBeInTheDocument()
  expect(screen.getByLabelText('Job type')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
})

test('updates input placeholder when tab switches', async () => {
  const user = userEvent.setup()
  render(<SearchTabs />)
  expect(screen.getByPlaceholderText('Job title or keyword')).toBeInTheDocument()
  await user.click(screen.getByRole('tab', { name: 'Find Candidate' }))
  expect(screen.getByPlaceholderText('Candidate name or skill')).toBeInTheDocument()
})
