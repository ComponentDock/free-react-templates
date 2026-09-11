import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

it('renders testimonial section', () => {
  render(<Testimonials />)
  expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
  expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
})

it('navigates to next testimonial', async () => {
  const user = userEvent.setup()
  render(<Testimonials />)
  await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
  expect(screen.getByText('Michael Chen')).toBeInTheDocument()
})

it('wraps around from last to first on next', async () => {
  const user = userEvent.setup()
  render(<Testimonials />)
  for (let i = 0; i < 4; i++) {
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
  }
  expect(screen.getByText('Lisa Garcia')).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
  expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
})

it('wraps around from first to last on previous', async () => {
  const user = userEvent.setup()
  render(<Testimonials />)
  await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
  expect(screen.getByText('Lisa Garcia')).toBeInTheDocument()
})

it('goes to previous non-wrap testimonial', async () => {
  const user = userEvent.setup()
  render(<Testimonials />)
  // Go forward one
  await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
  expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  // Now go back — should go to Sarah (c-1 path, not wrap)
  await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
  expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
})

it('navigates via dot indicators', async () => {
  const user = userEvent.setup()
  render(<Testimonials />)
  await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
  expect(screen.getByText('Emma Williams')).toBeInTheDocument()
})
