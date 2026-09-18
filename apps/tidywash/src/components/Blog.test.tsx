import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

it('renders 3 blog post cards', () => {
  render(<Blog />)
  expect(screen.getByText('Recent Posts')).toBeInTheDocument()
  expect(screen.getByText('Tips on how to hire a house cleaning service')).toBeInTheDocument()
  expect(screen.getByText('How to keep your office clean and organized')).toBeInTheDocument()
  expect(screen.getByText('Benefits of professional carpet cleaning')).toBeInTheDocument()
})
