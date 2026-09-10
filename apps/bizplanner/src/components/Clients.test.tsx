import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders section title', () => {
    render(<Clients />)
    expect(screen.getByText('Our Happy Clients')).toBeDefined()
  })

  it('renders the first testimonial by default', () => {
    render(<Clients />)
    expect(screen.getByText('Robert Johnson')).toBeDefined()
    expect(screen.getByText(/Absolutely love working with BizPlanner/)).toBeDefined()
  })

  it('navigates to next testimonial on next button click', () => {
    render(<Clients />)
    fireEvent.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('Amanda Peterson')).toBeDefined()
  })

  it('navigates to previous testimonial on prev button click', () => {
    render(<Clients />)
    fireEvent.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Thomas Williams')).toBeDefined()
  })

  it('navigates to specific testimonial via dot buttons', () => {
    render(<Clients />)
    fireEvent.click(screen.getByLabelText('Go to testimonial 3'))
    expect(screen.getByText('Thomas Williams')).toBeDefined()
  })

  it('wraps around from last to first on next', () => {
    render(<Clients />)
    fireEvent.click(screen.getByLabelText('Go to testimonial 3'))
    fireEvent.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('Robert Johnson')).toBeDefined()
  })

  it('wraps around from first to last on prev', () => {
    render(<Clients />)
    fireEvent.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Thomas Williams')).toBeDefined()
  })

  it('has the correct section id', () => {
    const { container } = render(<Clients />)
    expect(container.querySelector('#our-client')).not.toBeNull()
  })

  it('renders client images', () => {
    render(<Clients />)
    expect(screen.getByAltText('Robert Johnson')).toBeDefined()
  })

  it('renders 3 dot navigation buttons', () => {
    render(<Clients />)
    expect(screen.getByLabelText('Go to testimonial 1')).toBeDefined()
    expect(screen.getByLabelText('Go to testimonial 2')).toBeDefined()
    expect(screen.getByLabelText('Go to testimonial 3')).toBeDefined()
  })
})
