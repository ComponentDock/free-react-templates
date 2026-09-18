import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

test('renders heading', () => {
  render(<Newsletter />)
  expect(screen.getByText('Subscribe to our Newsletter')).toBeInTheDocument()
})

test('renders description', () => {
  render(<Newsletter />)
  expect(screen.getByText(/Get the latest job opportunities/)).toBeInTheDocument()
})

test('renders email input', () => {
  render(<Newsletter />)
  expect(screen.getByLabelText('Email address')).toBeInTheDocument()
})

test('renders subscribe button', () => {
  render(<Newsletter />)
  expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
})

test('allows typing email', async () => {
  const user = userEvent.setup()
  render(<Newsletter />)
  const input = screen.getByLabelText('Email address')
  await user.type(input, 'test@example.com')
  expect(input).toHaveValue('test@example.com')
})

test('renders background image', () => {
  const { container } = render(<Newsletter />)
  const bgImg = container.querySelector('img[src*="talentgate-newsletter"]')
  expect(bgImg).toHaveAttribute('src', 'https://picsum.photos/seed/talentgate-newsletter/1920/400')
})

test('form submit is prevented', async () => {
  const user = userEvent.setup()
  render(<Newsletter />)
  const form = screen.getByRole('button', { name: 'Subscribe' }).closest('form')!
  const preventDefault = vi.fn()
  form.addEventListener('submit', (e) => e.preventDefault())
  form.addEventListener('submit', preventDefault)
  await user.click(screen.getByRole('button', { name: 'Subscribe' }))
  expect(preventDefault).toHaveBeenCalled()
})
