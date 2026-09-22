import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /take a look around/i })).toBeInTheDocument()
  })

  it('renders the initial project', () => {
    render(<Projects />)
    expect(screen.getByText('Research and Development Center')).toBeInTheDocument()
    expect(screen.getByText('Construction')).toBeInTheDocument()
  })

  it('navigates to next project on arrow click', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    const nextBtn = screen.getByRole('button', { name: /next project/i })
    await user.click(nextBtn)
    expect(screen.getByText('Project of Technological Park')).toBeInTheDocument()
  })

  it('navigates to previous project on arrow click', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    const prevBtn = screen.getByRole('button', { name: /previous project/i })
    await user.click(prevBtn)
    expect(screen.getByText('Industrial Complex Build')).toBeInTheDocument()
  })

  it('navigates via dot buttons', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    await user.click(screen.getByLabelText('Go to project 2'))
    expect(screen.getByText('Project of Technological Park')).toBeInTheDocument()
  })

  it('auto-advances projects', () => {
    vi.useFakeTimers()
    render(<Projects />)
    expect(screen.getByText('Research and Development Center')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Project of Technological Park')).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('has previous and next navigation buttons', () => {
    render(<Projects />)
    expect(screen.getByRole('button', { name: /previous project/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next project/i })).toBeInTheDocument()
  })
})
