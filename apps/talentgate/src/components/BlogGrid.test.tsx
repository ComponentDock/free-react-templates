import { render, screen } from '@testing-library/react'
import { BlogGrid } from './BlogGrid'

test('renders section heading', () => {
  render(<BlogGrid />)
  expect(screen.getByText('Recent Blog')).toBeInTheDocument()
})

test('renders all four blog posts', () => {
  render(<BlogGrid />)
  expect(screen.getByText('How to Ace Your Technical Interview')).toBeInTheDocument()
  expect(screen.getByText('Remote Work Best Practices')).toBeInTheDocument()
  expect(screen.getByText('Career Growth in 2026')).toBeInTheDocument()
  expect(screen.getByText('Building Your Professional Network')).toBeInTheDocument()
})

test('renders blog post images', () => {
  render(<BlogGrid />)
  const images = screen.getAllByRole('img')
  expect(images.length).toBe(4)
  expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/talentgate-blog-1/400/250')
})

test('renders blog post dates', () => {
  render(<BlogGrid />)
  expect(screen.getByText('Sep 15, 2026')).toBeInTheDocument()
  expect(screen.getByText('Sep 12, 2026')).toBeInTheDocument()
  expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
  expect(screen.getByText('Sep 8, 2026')).toBeInTheDocument()
})

test('renders blog post authors', () => {
  render(<BlogGrid />)
  expect(screen.getByText('TalentGate Team')).toBeInTheDocument()
  expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  expect(screen.getByText('Emily Davis')).toBeInTheDocument()
})

test('renders blog post excerpts', () => {
  render(<BlogGrid />)
  expect(screen.getByText(/Tips and strategies/)).toBeInTheDocument()
  expect(screen.getByText(/Stay productive/)).toBeInTheDocument()
  expect(screen.getByText(/Top skills employers/)).toBeInTheDocument()
  expect(screen.getByText(/Effective strategies/)).toBeInTheDocument()
})
