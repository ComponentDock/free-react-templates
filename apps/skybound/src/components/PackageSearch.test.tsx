import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { PackageSearch } from './PackageSearch'

function fillSearch() {
  fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Santorini' } })
  fireEvent.change(screen.getByLabelText('Check in Date'), { target: { value: '2026-10-12' } })
  fireEvent.change(screen.getByLabelText('Check Out Date'), { target: { value: '2026-10-19' } })
  fireEvent.change(screen.getByLabelText('Adults'), { target: { value: '2' } })
  fireEvent.change(screen.getByLabelText('Children'), { target: { value: '1' } })
}

describe('PackageSearch', () => {
  it('renders the heading beside the dark photo search panel with every field', () => {
    render(<PackageSearch />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Search Suitable & DesiredPackage for You',
    )
    expect(screen.getByRole('heading', { level: 4, name: 'Package Search' })).toBeInTheDocument()
    expect(document.querySelector('.search-panel')).toBeInTheDocument()
    for (const label of ['Destination', 'Check in Date', 'Check Out Date', 'Adults', 'Children']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Browse all Packages' })).toHaveClass(
      'main-btn',
      'main-btn-azure',
    )
  })

  it('blocks submission until every field is filled, then acknowledges locally', () => {
    render(<PackageSearch />)
    fireEvent.click(screen.getByRole('button', { name: 'Browse all Packages' }))
    expect(screen.getAllByRole('alert').map((alert) => alert.textContent)).toEqual([
      'Please enter your destination',
      'Please choose a check in date',
      'Please choose a check out date',
      'Please choose the number of adults',
      'Please choose the number of children',
    ])
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fillSearch()
    fireEvent.click(screen.getByRole('button', { name: 'Browse all Packages' }))
    expect(screen.queryAllByRole('alert')).toHaveLength(0)
    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks! We will send the matching packages to your inbox.',
    )
  })

  it('clears a previously acknowledged search once a field is emptied again', () => {
    render(<PackageSearch />)
    fillSearch()
    fireEvent.click(screen.getByRole('button', { name: 'Browse all Packages' }))
    expect(screen.getByRole('status')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: '   ' } })
    fireEvent.click(screen.getByRole('button', { name: 'Browse all Packages' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter your destination')
  })
})
