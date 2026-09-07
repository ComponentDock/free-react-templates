import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MultiSelect } from './MultiSelect'

const OPTIONS = ['Design', 'HTML5', 'CSS3', 'jQuery', 'BS4', 'Bootstrap', 'WordPress', 'FrontEnd']

describe('MultiSelect', () => {
  it('shows placeholder when no options are selected', () => {
    render(<MultiSelect options={OPTIONS} selected={[]} onChange={() => {}} />)
    expect(screen.getByText('Select Categories')).toBeInTheDocument()
  })

  it('shows custom placeholder', () => {
    render(
      <MultiSelect options={OPTIONS} selected={[]} onChange={() => {}} placeholder="Pick items" />,
    )
    expect(screen.getByText('Pick items')).toBeInTheDocument()
  })

  it('opens dropdown on click and lists all options', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={OPTIONS} selected={[]} onChange={() => {}} />)

    await user.click(screen.getByText('Select Categories'))

    expect(screen.getByRole('listbox', { name: 'Available options' })).toBeInTheDocument()
    for (const opt of OPTIONS) {
      expect(screen.getByRole('option', { name: opt })).toBeInTheDocument()
    }
  })

  it('selecting an option calls onChange with the added option', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<MultiSelect options={OPTIONS} selected={[]} onChange={onChange} />)

    await user.click(screen.getByText('Select Categories'))
    await user.click(screen.getByRole('option', { name: 'Design' }))

    expect(onChange).toHaveBeenCalledWith(['Design'])
  })

  it('removing a selected tag calls onChange without that option', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<MultiSelect options={OPTIONS} selected={['Design', 'HTML5']} onChange={onChange} />)

    await user.click(screen.getByRole('button', { name: 'Remove Design' }))

    expect(onChange).toHaveBeenCalledWith(['HTML5'])
  })

  it('filters options when typing in search', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={OPTIONS} selected={[]} onChange={() => {}} />)

    await user.click(screen.getByText('Select Categories'))
    await user.type(screen.getByPlaceholderText('Search...'), 'Boot')

    expect(screen.getByRole('option', { name: 'Bootstrap' })).toBeInTheDocument()
    expect(screen.queryByRole('option', { name: 'Design' })).not.toBeInTheDocument()
    expect(screen.queryByRole('option', { name: 'HTML5' })).not.toBeInTheDocument()
  })

  it('shows "No results found" when search matches nothing', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={OPTIONS} selected={[]} onChange={() => {}} />)

    await user.click(screen.getByText('Select Categories'))
    await user.type(screen.getByPlaceholderText('Search...'), 'zzz')

    expect(screen.getByText('No results found')).toBeInTheDocument()
  })

  it('dropdown remains open after selecting an option', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={OPTIONS} selected={[]} onChange={() => {}} />)

    await user.click(screen.getByText('Select Categories'))
    await user.click(screen.getByRole('option', { name: 'Design' }))

    // The combobox should still indicate expanded
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'true')
  })

  it('applies custom tag class name', () => {
    render(
      <MultiSelect
        options={OPTIONS}
        selected={['Design']}
        onChange={() => {}}
        tagClassName="bg-[#c7f0db]"
      />,
    )
    const tag = screen.getByText('Design')
    expect(tag).toHaveClass('bg-[#c7f0db]')
  })

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <MultiSelect options={OPTIONS} selected={[]} onChange={() => {}} />
        <button type="button">Outside</button>
      </div>,
    )

    await user.click(screen.getByText('Select Categories'))
    expect(screen.getByRole('listbox', { name: 'Available options' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Outside' }))
    expect(screen.queryByRole('listbox', { name: 'Available options' })).not.toBeInTheDocument()
  })
})
