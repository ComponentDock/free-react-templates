import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StepContent } from './StepContent'

describe('StepContent', () => {
  it('renders the Registration heading', () => {
    render(<StepContent step={0} subtitle="Test subtitle" />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Registration')
  })

  it('renders the subtitle text', () => {
    render(<StepContent step={0} subtitle="Please fill with your details" />)
    expect(screen.getByText('Please fill with your details')).toBeInTheDocument()
  })

  it('renders step 1 form fields', () => {
    render(<StepContent step={0} subtitle="Test" />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Age')).toBeInTheDocument()
  })

  it('renders step 2 form fields', () => {
    render(<StepContent step={1} subtitle="Test" />)
    expect(screen.getByPlaceholderText('Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Zip Code')).toBeInTheDocument()
  })

  it('renders step 3 textarea', () => {
    render(<StepContent step={2} subtitle="Test" />)
    expect(screen.getByPlaceholderText('Your message here!')).toBeInTheDocument()
  })

  it('renders an image for each step', () => {
    render(<StepContent step={0} subtitle="Test" />)
    const img = screen.getByRole('img', { name: /step 1 illustration/i })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/conjure-1/368/521')
  })

  it('has a tabpanel with the correct id', () => {
    render(<StepContent step={1} subtitle="Test" />)
    expect(screen.getByRole('tabpanel')).toHaveAttribute('id', 'step-panel-1')
  })
})
