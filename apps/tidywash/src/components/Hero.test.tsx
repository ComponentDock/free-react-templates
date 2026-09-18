import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

it('renders hero heading and CTA', () => {
  render(<Hero />)
  expect(screen.getByText('Introducing TidyWash')).toBeInTheDocument()
  expect(screen.getByText('A Clean Home is A Happy Home')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Request A Quote' })).toBeInTheDocument()
})
