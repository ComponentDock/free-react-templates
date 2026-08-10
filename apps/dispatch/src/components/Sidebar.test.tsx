import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'
import { futureEvents, topStories } from '../data'

describe('Sidebar', () => {
  it('renders the three carousels with their section titles', () => {
    render(<Sidebar />)
    expect(screen.getByRole('complementary')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Top Stories' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newest Videos' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Future Events' })).toBeInTheDocument()
  })

  it('renders story rows with author · date meta', () => {
    render(<Sidebar />)
    expect(screen.getByRole('link', { name: topStories[0]!.title })).toBeInTheDocument()
    expect(
      screen.getByText(`${topStories[0]!.author} · ${topStories[0]!.date}`),
    ).toBeInTheDocument()
  })

  it('rotates the Top Stories carousel', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    await user.click(screen.getByRole('button', { name: 'Next stories' }))
    expect(screen.getByRole('link', { name: topStories[2]!.title })).toBeInTheDocument()
  })

  it('renders both advertising blocks', () => {
    render(<Sidebar />)
    expect(screen.getByText('-15%')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shop the sale' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Turbulent Mind' })).toBeInTheDocument()
  })

  it('renders event rows with day and month date boxes', () => {
    render(<Sidebar />)
    expect(screen.getByText(futureEvents[0]!.day)).toBeInTheDocument()
    expect(screen.getByText(futureEvents[0]!.month)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: futureEvents[0]!.title })).toBeInTheDocument()
  })
})
