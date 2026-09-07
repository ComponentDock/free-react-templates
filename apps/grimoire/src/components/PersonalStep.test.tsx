import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PersonalStep } from './PersonalStep'

describe('PersonalStep', () => {
  it('renders full name field', () => {
    render(<PersonalStep />)
    expect(screen.getByLabelText('Full name')).toBeInTheDocument()
  })

  it('renders country select', () => {
    render(<PersonalStep />)
    expect(screen.getByLabelText('Country')).toBeInTheDocument()
  })

  it('renders gender radio buttons', () => {
    render(<PersonalStep />)
    expect(screen.getByLabelText('Male')).toBeInTheDocument()
    expect(screen.getByLabelText('Female')).toBeInTheDocument()
  })

  it('renders about textarea', () => {
    render(<PersonalStep />)
    expect(screen.getByLabelText('About us')).toBeInTheDocument()
  })
})
