import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MultiSelect } from './MultiSelect'

const OPTIONS = ['Design', 'HTML5', 'CSS3', 'jQuery', 'BS4', 'Bootstrap', 'WordPress', 'FrontEnd']

describe('MultiSelect', () => {
  it('renders with placeholder text when nothing is selected', () => {
    render(<MultiSelect options={OPTIONS} selected={[]} onChange={() => {}} />)
    expect(screen.getByText('Select Categories')).toBeInTheDocument()
  })

  it('shows custom placeholder when provided', () => {
    render(
      <MultiSelect options={OPTIONS} selected={[]} onChange={() => {}} placeholder="Pick items" />,
    )
    expect(screen.getByText('Pick items')).toBeInTheDocument()
  })

  it('opens dropdown when the trigger area is clicked', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={OPTIONS} selected={[]} onChange={() => {}} />)

    await user.click(screen.getByText('Select Categories'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Design' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'FrontEnd' })).toBeInTheDocument()
  })

  it('selects an option and adds a tag', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<MultiSelect options={OPTIONS} selected={[]} onChange={onChange} />)

    await user.click(screen.getByText('Select Categories'))
    await user.click(screen.getByRole('option', { name: 'Design' }))

    expect(onChange).toHaveBeenCalledWith(['Design'])
  })

  it('removes a tag when the X button is clicked', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<MultiSelect options={OPTIONS} selected={['Design', 'HTML5']} onChange={onChange} />)

    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('HTML5')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Remove Design' }))
    expect(onChange).toHaveBeenCalledWith(['HTML5'])
  })

  it('filters options when typing in the search field', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={OPTIONS} selected={[]} onChange={() => {}} />)

    await user.click(screen.getByText('Select Categories'))
    await user.type(screen.getByPlaceholderText('Search...'), 'css')

    expect(screen.getByRole('option', { name: 'CSS3' })).toBeInTheDocument()
    expect(screen.queryByRole('option', { name: 'Design' })).not.toBeInTheDocument()
  })

  it('shows "No results found" when search matches nothing', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={OPTIONS} selected={[]} onChange={() => {}} />)

    await user.click(screen.getByText('Select Categories'))
    await user.type(screen.getByPlaceholderText('Search...'), 'zzzzz')

    expect(screen.getByText('No results found')).toBeInTheDocument()
  })

  it('enforces max selections limit', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(
      <MultiSelect
        options={OPTIONS}
        selected={['Design', 'HTML5', 'CSS3', 'jQuery', 'BS4']}
        onChange={onChange}
        maxSelections={5}
      />,
    )

    // Open dropdown — should show "Max selections reached"
    await user.click(screen.getByText(/Design/))
    expect(screen.getByText('Max selections reached')).toBeInTheDocument()
  })

  it('does not allow selecting beyond max selections', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(
      <MultiSelect
        options={OPTIONS}
        selected={['Design', 'HTML5', 'CSS3', 'jQuery', 'BS4']}
        onChange={onChange}
        maxSelections={5}
      />,
    )

    // Open dropdown — should show "Max selections reached" banner and still list options
    await user.click(screen.getByText(/Design/))
    expect(screen.getByText('Max selections reached')).toBeInTheDocument()
    // Options are still shown but clicking should not call onChange
    const bootstrapOption = screen.getByRole('option', { name: 'Bootstrap' })
    await user.click(bootstrapOption)
    expect(onChange).not.toHaveBeenCalled()
  })

  it('allows removing tags when at max to free a slot', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(
      <MultiSelect
        options={OPTIONS}
        selected={['Design', 'HTML5', 'CSS3', 'jQuery', 'BS4']}
        onChange={onChange}
        maxSelections={5}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Remove Design' }))
    expect(onChange).toHaveBeenCalledWith(['HTML5', 'CSS3', 'jQuery', 'BS4'])
  })

  it('allows selecting when maxSelections is set but not at limit', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(
      <MultiSelect options={OPTIONS} selected={['Design']} onChange={onChange} maxSelections={5} />,
    )

    await user.click(screen.getByText('Design'))
    await user.click(screen.getByRole('option', { name: 'HTML5' }))
    expect(onChange).toHaveBeenCalledWith(['Design', 'HTML5'])
  })

  it('allows selecting when no maxSelections is set', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<MultiSelect options={OPTIONS} selected={['Design']} onChange={onChange} />)

    await user.click(screen.getByText('Design'))
    await user.click(screen.getByRole('option', { name: 'HTML5' }))
    expect(onChange).toHaveBeenCalledWith(['Design', 'HTML5'])
  })

  it('applies custom tag class name', () => {
    render(
      <MultiSelect
        options={OPTIONS}
        selected={['Design']}
        onChange={() => {}}
        tagClassName="bg-green-200"
      />,
    )
    const tag = screen.getByText('Design').closest('span')
    expect(tag).toHaveClass('bg-green-200')
  })

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <span data-testid="outside">Outside</span>
        <MultiSelect options={OPTIONS} selected={[]} onChange={() => {}} />
      </div>,
    )

    await user.click(screen.getByText('Select Categories'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()

    await user.click(screen.getByTestId('outside'))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('has combobox role with correct aria attributes', () => {
    render(<MultiSelect options={OPTIONS} selected={[]} onChange={() => {}} />)
    const combobox = screen.getByRole('combobox')
    expect(combobox).toHaveAttribute('aria-expanded', 'false')
    expect(combobox).toHaveAttribute('aria-haspopup', 'listbox')
  })

  it('shows selected count when items are selected', () => {
    render(<MultiSelect options={OPTIONS} selected={['Design', 'HTML5']} onChange={() => {}} />)
    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('HTML5')).toBeInTheDocument()
  })
})
