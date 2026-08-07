import { describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders the label, the five attribute selects, and the search button', () => {
    render(<SearchBar onSearch={() => {}} />)
    expect(screen.getByRole('heading', { name: 'Search A Model' })).toBeInTheDocument()
    expect(screen.getByLabelText('Height')).toBeInTheDocument()
    expect(screen.getByLabelText('Bust')).toBeInTheDocument()
    expect(screen.getByLabelText('Weist')).toBeInTheDocument()
    expect(screen.getByLabelText('Hips')).toBeInTheDocument()
    expect(screen.getByLabelText('Eye')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('offers the height, bust, waist, hips, and eye options from the original', () => {
    render(<SearchBar onSearch={() => {}} />)
    const height = screen.getByLabelText('Height')
    for (const option of ['5.5', '5.6', '5.7', '5.8', '5.9', '6']) {
      expect(within(height).getByRole('option', { name: option })).toBeInTheDocument()
    }
    const bust = screen.getByLabelText('Bust')
    expect(within(bust).getByRole('option', { name: '90cm' })).toBeInTheDocument()
    const eye = screen.getByLabelText('Eye')
    for (const option of ['Amber', 'Blue', 'Brown', 'Gray', 'Green', 'Black']) {
      expect(within(eye).getByRole('option', { name: option })).toBeInTheDocument()
    }
  })

  it('submits the selected filters when the search button is pressed', async () => {
    const user = userEvent.setup()
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch} />)

    await user.selectOptions(screen.getByLabelText('Height'), '5.8')
    await user.selectOptions(screen.getByLabelText('Bust'), '85cm')
    await user.selectOptions(screen.getByLabelText('Eye'), 'Green')
    await user.click(screen.getByRole('button', { name: 'Search' }))

    expect(onSearch).toHaveBeenCalledWith({
      height: '5.8',
      bust: '85cm',
      waist: '',
      hips: '',
      eyes: 'Green',
    })
  })

  it('submits empty filters when nothing is selected', async () => {
    const user = userEvent.setup()
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch} />)

    await user.click(screen.getByRole('button', { name: 'Search' }))

    expect(onSearch).toHaveBeenCalledWith({
      height: '',
      bust: '',
      waist: '',
      hips: '',
      eyes: '',
    })
  })
})
