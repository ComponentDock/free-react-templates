import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Reasons } from './Reasons'

describe('Reasons', () => {
  it('renders the section heading', () => {
    render(<Reasons />)
    expect(screen.getByText('Reason of Helping')).toBeInTheDocument()
  })

  it('renders all 3 reason cards', () => {
    render(<Reasons />)
    expect(screen.getByText('Collecting Fund')).toBeInTheDocument()
    expect(screen.getByText('Blood Camp')).toBeInTheDocument()
    expect(screen.getByText('Friendly Volunteer')).toBeInTheDocument()
  })

  it('renders read more links', () => {
    render(<Reasons />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(3)
  })
})
