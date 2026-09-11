import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

it('renders 4 feature cards', () => {
  render(<Features />)
  expect(screen.getByText('Why Choose Us?')).toBeInTheDocument()
  expect(screen.getByText('Highly Trained Staff')).toBeInTheDocument()
  expect(screen.getByText('Best Equipments')).toBeInTheDocument()
  expect(screen.getByText('100% Warranty')).toBeInTheDocument()
  expect(screen.getByText('Fast & Effective Service')).toBeInTheDocument()
})
