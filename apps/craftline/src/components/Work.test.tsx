import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Work } from './Work'

describe('Work', () => {
  it('renders section heading', () => {
    render(<Work />)
    expect(screen.getByText('Recent Work')).toBeDefined()
  })

  it('renders filter buttons', () => {
    render(<Work />)
    const allBtn = screen.getAllByText('All')
    expect(allBtn.length).toBeGreaterThanOrEqual(1)
    const gdBtns = screen.getAllByText('Graphic Design')
    expect(gdBtns.length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Web Design').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Software').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Apps').length).toBeGreaterThanOrEqual(1)
  })

  it('shows all items initially', () => {
    render(<Work />)
    expect(screen.getByText('Work 01')).toBeDefined()
    expect(screen.getByText('Work 06')).toBeDefined()
  })

  it('filters items by category', async () => {
    const user = userEvent.setup()
    render(<Work />)
    const softwareBtn = screen.getAllByText('Software').find((el) => el.tagName === 'BUTTON')!
    await user.click(softwareBtn)
    expect(screen.getByText('Work 02')).toBeDefined()
    expect(screen.queryByText('Work 01')).toBeNull()
  })

  it('shows all items when All filter is clicked', async () => {
    const user = userEvent.setup()
    render(<Work />)
    const softwareBtn = screen.getAllByText('Software').find((el) => el.tagName === 'BUTTON')!
    await user.click(softwareBtn)
    const allBtn = screen.getAllByText('All').find((el) => el.tagName === 'BUTTON')!
    await user.click(allBtn)
    expect(screen.getByText('Work 01')).toBeDefined()
    expect(screen.getByText('Work 02')).toBeDefined()
  })

  it('renders my work label', () => {
    render(<Work />)
    expect(screen.getByText('My Work')).toBeDefined()
  })
})
