import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Mechanics } from './Mechanics'

describe('Mechanics', () => {
  it('renders the heading and mechanic cards with names', () => {
    render(<Mechanics />)
    expect(screen.getByRole('heading', { name: /Expert Mechanics/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Jason Smith' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Jeffrey Rockenson' })).toBeInTheDocument()
    expect(screen.getByText('Senior Mechanic')).toBeInTheDocument()
  })
})
