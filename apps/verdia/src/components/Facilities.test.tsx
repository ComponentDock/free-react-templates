import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Facilities } from './Facilities'

describe('Facilities', () => {
  it('renders heading', () => {
    render(<Facilities />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Latest Facilities')
  })

  it('renders facility cards', () => {
    render(<Facilities />)
    const headings = screen.getAllByRole('heading', { level: 4 })
    const titles = headings.map((h) => h.textContent)
    expect(titles).toContain('24/7 Emergency')
    expect(titles).toContain('Intensive Care')
    expect(titles).toContain('Family Planning')
  })

  it('renders descriptions for each facility', () => {
    render(<Facilities />)
    expect(screen.getByText(/emergency department is open around the clock/i)).toBeInTheDocument()
    expect(screen.getByText(/intensive care units staffed/i)).toBeInTheDocument()
  })
})
