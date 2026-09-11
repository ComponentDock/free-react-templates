import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Industries } from './Industries'

it('renders all 6 industry cards', () => {
  render(<Industries />)
  expect(screen.getByText('Industries We Serve')).toBeInTheDocument()
  expect(screen.getByText('Residential Cleaning')).toBeInTheDocument()
  expect(screen.getByText('Commercial Cleaning')).toBeInTheDocument()
  expect(screen.getByText('Construction Cleaning')).toBeInTheDocument()
  expect(screen.getByText('Windows Cleaning')).toBeInTheDocument()
  expect(screen.getByText('Carpet Cleaning')).toBeInTheDocument()
  expect(screen.getByText('Furniture Cleaning')).toBeInTheDocument()
})
