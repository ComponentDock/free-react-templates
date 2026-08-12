import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Players } from './Players'

describe('Players', () => {
  it('renders three player cards with name, club and bio', () => {
    render(<Players />)

    expect(screen.getByText('Our Team')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Meet the Players' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: 'Jequline Dodge' }).length).toBe(3)
    expect(screen.getAllByText('Swords Club').length).toBe(3)
    expect(screen.getAllByText(/Together won't fowl you fish/).length).toBe(3)
    expect(screen.getAllByRole('img', { name: /Portrait of Jequline Dodge/ }).length).toBe(3)
  })
})
