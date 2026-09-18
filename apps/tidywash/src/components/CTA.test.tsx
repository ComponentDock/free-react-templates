import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

it('renders CTA section with phone and email', () => {
  render(<CTA />)
  expect(screen.getByText('Need to clean your house? Just hire us!')).toBeInTheDocument()
  expect(screen.getByText('0-1230-456-7890')).toBeInTheDocument()
  expect(screen.getByText('youremail@email.com')).toBeInTheDocument()
})
