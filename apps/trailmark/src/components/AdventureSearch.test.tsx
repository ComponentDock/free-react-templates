import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { AdventureSearch } from './AdventureSearch'

describe('AdventureSearch', () => {
  it('renders the title and the four-field inline search form', () => {
    render(<AdventureSearch />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Find the Adventure of a lifetime' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Destination:')).toHaveAttribute('placeholder', 'Keyword here')
    expect(screen.getByLabelText('Adventure type:')).toBeInTheDocument()
    expect(screen.getByLabelText('Min price')).toBeInTheDocument()
    expect(screen.getByLabelText('Max price')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Find' })).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits the search and reports the selected criteria', () => {
    render(<AdventureSearch />)
    fireEvent.change(screen.getByLabelText('Destination:'), { target: { value: 'Bali' } })
    fireEvent.change(screen.getByLabelText('Adventure type:'), { target: { value: 'Beach' } })
    fireEvent.change(screen.getByLabelText('Min price'), { target: { value: '$1000' } })
    fireEvent.change(screen.getByLabelText('Max price'), { target: { value: '$2000' } })
    fireEvent.submit(screen.getByRole('button', { name: 'Find' }).closest('form')!)
    expect(screen.getByRole('status')).toHaveTextContent('Searching trips in Bali')
    expect(screen.getByRole('status')).toHaveTextContent('Beach')
    expect(screen.getByRole('status')).toHaveTextContent('$1000')
    expect(screen.getByRole('status')).toHaveTextContent('$2000')
  })

  it('falls back to any destination when the keyword is empty', () => {
    render(<AdventureSearch />)
    fireEvent.submit(screen.getByRole('button', { name: 'Find' }).closest('form')!)
    expect(screen.getByRole('status')).toHaveTextContent('Searching trips in any destination')
  })
})
