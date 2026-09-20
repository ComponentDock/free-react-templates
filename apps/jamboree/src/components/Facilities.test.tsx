import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Facilities } from './Facilities'

describe('Facilities', () => {
  it('renders the section heading', () => {
    render(<Facilities />)
    expect(screen.getByText('Core Functionalities')).toBeDefined()
  })

  it('renders all six service columns', () => {
    render(<Facilities />)
    const services = ['Management', 'Marketing', 'Uniqueness', 'Design', 'Creativity', 'Strategy']
    for (const name of services) {
      expect(screen.getByText(name)).toBeDefined()
    }
  })

  it('renders descriptions for each service', () => {
    render(<Facilities />)
    expect(screen.getByText(/comprehensive event management/i)).toBeDefined()
    expect(screen.getByText(/built-in marketing features/i)).toBeDefined()
  })

  it('links to the functionalities section', () => {
    render(<Facilities />)
    const section = screen.getByText('Core Functionalities').closest('section')
    expect(section?.id).toBe('functionalities')
  })
})
