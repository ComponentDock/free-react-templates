import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Process } from './Process'

it('renders 3 process steps', () => {
  render(<Process />)
  expect(screen.getByText('Get Amazing Cleaning in 3 Simple Ways')).toBeInTheDocument()
  expect(screen.getByText('Pick a suitable plan')).toBeInTheDocument()
  expect(screen.getByText('Set your schedule')).toBeInTheDocument()
  expect(screen.getByText('Get things done')).toBeInTheDocument()
})
