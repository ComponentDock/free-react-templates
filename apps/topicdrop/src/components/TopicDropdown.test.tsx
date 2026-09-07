import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TopicDropdown } from './TopicDropdown'
import type { Topic } from './TopicDropdown'

const TOPICS: Topic[] = [
  { label: 'Family', value: 'family' },
  { label: 'Family Law', value: 'family-law' },
  { label: 'Friends', value: 'friends' },
  { label: 'Co-workers', value: 'co-workers' },
  { label: 'Startup', value: 'startup' },
  { label: 'Work', value: 'work' },
  { label: 'Basketball', value: 'basketball' },
  { label: 'Baseball', value: 'baseball' },
  { label: 'Investors', value: 'investors' },
  { label: 'US Embassy', value: 'us-embassy' },
]

describe('TopicDropdown', () => {
  it('renders the trigger button with placeholder text', () => {
    render(<TopicDropdown topics={TOPICS} />)
    expect(screen.getByRole('button', { name: /select topics/i })).toBeInTheDocument()
  })

  it('shows "N items selected" when topics are selected', () => {
    render(<TopicDropdown topics={TOPICS} selectedValues={['family', 'friends']} />)
    expect(screen.getByRole('button', { name: /2 items selected/i })).toBeInTheDocument()
  })

  it('shows "1 item selected" when one topic is selected', () => {
    render(<TopicDropdown topics={TOPICS} selectedValues={['family']} />)
    expect(screen.getByRole('button', { name: /1 item selected/i })).toBeInTheDocument()
  })

  it('opens dropdown on trigger click', async () => {
    const user = userEvent.setup()
    render(<TopicDropdown topics={TOPICS} />)
    await user.click(screen.getByRole('button', { name: /select topics/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(TOPICS.length)
  })

  it('closes dropdown on second trigger click', async () => {
    const user = userEvent.setup()
    render(<TopicDropdown topics={TOPICS} />)
    const trigger = screen.getByRole('button', { name: /select topics/i })
    await user.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(trigger)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('calls onChange when a topic is clicked', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<TopicDropdown topics={TOPICS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select topics/i }))
    await user.click(screen.getByRole('option', { name: /^family$/i }))
    expect(onChange).toHaveBeenCalledWith(['family'])
  })

  it('deselects an already selected topic', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<TopicDropdown topics={TOPICS} selectedValues={['family']} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /1 item selected/i }))
    await user.click(screen.getByRole('option', { name: /^family$/i }))
    expect(onChange).toHaveBeenCalledWith([])
  })

  it('allows multiple selections', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<TopicDropdown topics={TOPICS} selectedValues={['family']} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /1 item selected/i }))
    await user.click(screen.getByRole('option', { name: /^friends$/i }))
    expect(onChange).toHaveBeenCalledWith(['family', 'friends'])
  })

  it('shows Select All button when not all are selected', async () => {
    const user = userEvent.setup()
    render(<TopicDropdown topics={TOPICS} />)
    await user.click(screen.getByRole('button', { name: /select topics/i }))
    expect(screen.getByRole('button', { name: /select all/i })).toBeInTheDocument()
  })

  it('shows Clear All button when all are selected', async () => {
    const user = userEvent.setup()
    const allValues = TOPICS.map((t) => t.value)
    render(<TopicDropdown topics={TOPICS} selectedValues={allValues} />)
    await user.click(screen.getByRole('button', { name: /10 items selected/i }))
    expect(screen.getByRole('button', { name: /clear all/i })).toBeInTheDocument()
  })

  it('Select All selects all enabled topics', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<TopicDropdown topics={TOPICS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select topics/i }))
    await user.click(screen.getByRole('button', { name: /select all/i }))
    expect(onChange).toHaveBeenCalledWith(TOPICS.map((t) => t.value))
  })

  it('Clear All clears all selections', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    const allValues = TOPICS.map((t) => t.value)
    render(<TopicDropdown topics={TOPICS} selectedValues={allValues} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /10 items selected/i }))
    await user.click(screen.getByRole('button', { name: /clear all/i }))
    expect(onChange).toHaveBeenCalledWith([])
  })

  it('disables the disabled topic', async () => {
    const topicsWithDisabled: Topic[] = [
      { label: 'Family', value: 'family' },
      { label: 'Locked', value: 'locked', disabled: true },
    ]
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<TopicDropdown topics={topicsWithDisabled} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select topics/i }))
    await user.click(screen.getByRole('option', { name: /^locked$/i }))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('closes on Escape key', async () => {
    const user = userEvent.setup()
    render(<TopicDropdown topics={TOPICS} />)
    const trigger = screen.getByRole('button', { name: /select topics/i })
    await user.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('navigates with ArrowDown and selects with Enter', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<TopicDropdown topics={TOPICS} onChange={onChange} />)
    const trigger = screen.getByRole('button', { name: /select topics/i })
    trigger.focus()
    await user.keyboard('{Enter}')
    await user.keyboard('{ArrowDown}')
    await user.keyboard('{Enter}')
    expect(onChange).toHaveBeenCalledWith(['family-law'])
  })

  it('navigates backwards with ArrowUp', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<TopicDropdown topics={TOPICS} onChange={onChange} />)
    const trigger = screen.getByRole('button', { name: /select topics/i })
    trigger.focus()
    await user.keyboard('{Enter}')
    await user.keyboard('{ArrowUp}')
    await user.keyboard('{Enter}')
    expect(onChange).toHaveBeenCalledWith(['us-embassy'])
  })

  it('closes on click outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <TopicDropdown topics={TOPICS} />
        <button type="button">Outside</button>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /select topics/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /outside/i }))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('sets aria-expanded on trigger', async () => {
    const user = userEvent.setup()
    render(<TopicDropdown topics={TOPICS} />)
    const trigger = screen.getByRole('button', { name: /select topics/i })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('has aria-haspopup on trigger', () => {
    render(<TopicDropdown topics={TOPICS} />)
    const trigger = screen.getByRole('button', { name: /select topics/i })
    expect(trigger).toHaveAttribute('aria-haspopup', 'listbox')
  })

  it('options have aria-multiselectable on listbox', async () => {
    const user = userEvent.setup()
    render(<TopicDropdown topics={TOPICS} />)
    await user.click(screen.getByRole('button', { name: /select topics/i }))
    const listbox = screen.getByRole('listbox')
    expect(listbox).toHaveAttribute('aria-multiselectable')
  })

  it('opens on ArrowDown key when closed', async () => {
    const user = userEvent.setup()
    render(<TopicDropdown topics={TOPICS} />)
    const trigger = screen.getByRole('button', { name: /select topics/i })
    trigger.focus()
    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens on Enter key when closed', async () => {
    const user = userEvent.setup()
    render(<TopicDropdown topics={TOPICS} />)
    const trigger = screen.getByRole('button', { name: /select topics/i })
    trigger.focus()
    await user.keyboard('{Enter}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens on Space key when closed', async () => {
    const user = userEvent.setup()
    render(<TopicDropdown topics={TOPICS} />)
    const trigger = screen.getByRole('button', { name: /select topics/i })
    trigger.focus()
    await user.keyboard(' ')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('toggles topic with Space key when open', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<TopicDropdown topics={TOPICS} onChange={onChange} />)
    const trigger = screen.getByRole('button', { name: /select topics/i })
    trigger.focus()
    await user.keyboard('{Enter}')
    await user.keyboard(' ')
    expect(onChange).toHaveBeenCalledWith(['family'])
  })

  it('uses custom placeholder', () => {
    render(<TopicDropdown topics={TOPICS} placeholder="Pick topics" />)
    expect(screen.getByRole('button', { name: /pick topics/i })).toBeInTheDocument()
  })

  it('ignores non-matching keys when dropdown is closed', async () => {
    const user = userEvent.setup()
    render(<TopicDropdown topics={TOPICS} />)
    const trigger = screen.getByRole('button', { name: /select topics/i })
    trigger.focus()
    await user.keyboard('a')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('ignores non-matching keys when dropdown is open', async () => {
    const user = userEvent.setup()
    render(<TopicDropdown topics={TOPICS} />)
    const trigger = screen.getByRole('button', { name: /select topics/i })
    trigger.focus()
    await user.keyboard('{Enter}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('a')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('shows checkmark for selected options', async () => {
    const user = userEvent.setup()
    render(<TopicDropdown topics={TOPICS} selectedValues={['family']} />)
    await user.click(screen.getByRole('button', { name: /1 item selected/i }))
    const option = screen.getByRole('option', { name: /^family$/i })
    expect(option).toHaveAttribute('aria-selected', 'true')
  })

  it('shows unselected state for unselected options', async () => {
    const user = userEvent.setup()
    render(<TopicDropdown topics={TOPICS} selectedValues={['family']} />)
    await user.click(screen.getByRole('button', { name: /1 item selected/i }))
    const option = screen.getByRole('option', { name: /^friends$/i })
    expect(option).toHaveAttribute('aria-selected', 'false')
  })

  it('wraps focus from last to first with ArrowDown', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<TopicDropdown topics={TOPICS} onChange={onChange} />)
    const trigger = screen.getByRole('button', { name: /select topics/i })
    trigger.focus()
    await user.keyboard('{Enter}')
    // Navigate to last option
    for (let i = 0; i < TOPICS.length - 1; i++) {
      await user.keyboard('{ArrowDown}')
    }
    // One more ArrowDown should wrap to first
    await user.keyboard('{ArrowDown}')
    await user.keyboard('{Enter}')
    expect(onChange).toHaveBeenCalledWith(['family'])
  })
})
