import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

it('renders all sections', () => {
  render(<App />)
  expect(screen.getByLabelText('Main navigation')).toBeInTheDocument()
  expect(screen.getByLabelText('Hero')).toBeInTheDocument()
  expect(screen.getByLabelText('About')).toBeInTheDocument()
  expect(screen.getByLabelText('Features')).toBeInTheDocument()
  expect(screen.getByLabelText('Statistics')).toBeInTheDocument()
  expect(screen.getByLabelText('Industries we serve')).toBeInTheDocument()
  expect(screen.getByLabelText('How it works')).toBeInTheDocument()
  expect(screen.getByLabelText('Testimonials')).toBeInTheDocument()
  expect(screen.getByLabelText('Pricing')).toBeInTheDocument()
  expect(screen.getByLabelText('Call to action')).toBeInTheDocument()
  expect(screen.getByLabelText('Blog')).toBeInTheDocument()
  expect(screen.getByText('Component Dock')).toBeInTheDocument()
})
