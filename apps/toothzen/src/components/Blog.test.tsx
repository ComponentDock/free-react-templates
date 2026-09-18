import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

it('renders the blog heading', () => {
  render(<Blog />)
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Recent Posts')
})

it('renders all three blog posts', () => {
  render(<Blog />)
  expect(screen.getByText('The Next Best Thing to Get Natural Teeth')).toBeInTheDocument()
  expect(screen.getByText('Tips for a Healthier Smile Every Day')).toBeInTheDocument()
  expect(screen.getByText('Modern Dental Technology Advancements')).toBeInTheDocument()
})

it('renders read more links for each post', () => {
  render(<Blog />)
  const links = screen.getAllByText('Read more')
  expect(links).toHaveLength(3)
})
