import { render, screen } from '@testing-library/react'
import { Facilities } from './Facilities'
import { FACILITIES } from '../data'
import { describe, expect, it } from 'vitest'

describe('Facilities', () => {
  it('renders the heading', () => {
    render(<Facilities />)
    expect(screen.getByRole('heading', { level: 2, name: 'Facilities' })).toBeInTheDocument()
  })

  it('renders all facility titles', () => {
    render(<Facilities />)
    for (const f of FACILITIES) {
      expect(screen.getByText(f.title)).toBeInTheDocument()
    }
  })

  it('renders all facility descriptions', () => {
    render(<Facilities />)
    for (const f of FACILITIES) {
      expect(screen.getByText(new RegExp(f.description.slice(0, 30)))).toBeInTheDocument()
    }
  })

  it('renders all Visit Center buttons', () => {
    render(<Facilities />)
    const buttons = screen.getAllByRole('button', { name: 'Visit Center' })
    expect(buttons).toHaveLength(FACILITIES.length)
  })

  it('renders facility images', () => {
    render(<Facilities />)
    for (const f of FACILITIES) {
      expect(screen.getByRole('img', { name: f.title })).toHaveAttribute('src', f.image)
    }
  })
})
