import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /topic selector/i })).toBeInTheDocument()
  })

  it('renders the Select Topics label', () => {
    render(<App />)
    expect(screen.getByText('Select Topics', { selector: 'label' })).toBeInTheDocument()
  })

  it('renders the dropdown trigger', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /select topics/i })).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('allows selecting and deselecting topics', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /select topics/i }))
    await user.click(screen.getByRole('option', { name: /^family$/i }))
    expect(screen.getByRole('button', { name: /1 item selected/i })).toBeInTheDocument()
    await user.click(screen.getByRole('option', { name: /^family$/i }))
    expect(screen.getByRole('button', { name: /select topics/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('TopicDrop — Multiselect Topic Selector Template')
  })

  it('shows selected count text below dropdown', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /select topics/i }))
    await user.click(screen.getByRole('option', { name: /^family$/i }))
    await user.click(screen.getByRole('option', { name: /^friends$/i }))
    expect(screen.getByText('2 topics selected')).toBeInTheDocument()
  })

  it('shows singular when one topic selected', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /select topics/i }))
    await user.click(screen.getByRole('option', { name: /^family$/i }))
    expect(screen.getByText('1 topic selected')).toBeInTheDocument()
  })

  it('hides count when no topics selected', () => {
    render(<App />)
    expect(screen.queryByText(/selected/)).not.toBeInTheDocument()
  })

  it('renders all 10 options', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /select topics/i }))
    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(10)
  })
})
