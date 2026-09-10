import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StepCategory } from './StepCategory'
import type { CategoryData } from './StepCategory'

const defaultData: CategoryData = { selected: 'programming' }

describe('StepCategory', () => {
  it('renders the heading', () => {
    render(<StepCategory data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('What are you doing?')
  })

  it('renders 6 category cards', () => {
    render(<StepCategory data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByRole('button', { name: /select programming/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /select sports/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /select business/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /select tour guide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /select art-design/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /select doctor/i })).toBeInTheDocument()
  })

  it('marks the selected category as pressed', () => {
    render(<StepCategory data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByRole('button', { name: /select programming/i })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: /select sports/i })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
  })

  it('calls onChange when a category is clicked', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepCategory data={defaultData} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select sports/i }))
    expect(onChange).toHaveBeenCalledWith({ selected: 'sports' })
  })

  it('displays category images', () => {
    render(<StepCategory data={defaultData} onChange={vi.fn()} />)
    const imgs = screen.getAllByRole('img')
    expect(imgs).toHaveLength(6)
    expect(imgs[0]).toHaveAttribute('alt', 'Programming')
  })
})
