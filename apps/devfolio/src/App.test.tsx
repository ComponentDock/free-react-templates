import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'
import { PERSON } from './content'

describe('App', () => {
  beforeEach(() => {
    window.history.replaceState(null, '', window.location.pathname)
  })

  it('renders the home page with one h1, one main, one header and one footer', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('puts the skip link first in tab order', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.tab()
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveFocus()
  })

  it('composes the bands in order', () => {
    const { container } = render(<App />)
    const bands = Array.from(container.querySelectorAll('main section')).map((section) =>
      section.getAttribute('aria-labelledby'),
    )
    expect(bands).toEqual(['hero-title', 'work-title', 'about-title', 'tools-title', 'contact-title'])
  })

  it('opens the case study and returns focus to the trigger on close', async () => {
    const user = userEvent.setup()
    render(<App />)

    const trigger = screen.getAllByRole('button', { name: /Read the case study/ })[0]!
    await user.click(trigger)
    expect(screen.getByRole('dialog', { name: 'Triage Desk' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(trigger).toHaveFocus()
  })

  it('opens the working demo from the second card', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getAllByRole('button', { name: 'Try the demo' })[1]!)
    expect(screen.getByRole('dialog', { name: 'Change Sheet' })).toBeInTheDocument()
    expect(screen.getByLabelText('Search')).toHaveFocus()
  })

  it('closes the sheet with Escape', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getAllByRole('button', { name: /Read the case study/ })[0]!)
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('switches to the résumé view on the hash route', () => {
    render(<App />)

    act(() => {
      window.history.replaceState(null, '', '#/resume')
      window.dispatchEvent(new Event('hashchange'))
    })

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(PERSON.name)
    expect(screen.queryByRole('main')).toBeInTheDocument()
    expect(screen.queryByRole('banner')).toBeInTheDocument()
  })

  it('renders the résumé straight away when the URL already points at it', () => {
    window.history.replaceState(null, '', '#/resume')
    render(<App />)
    expect(screen.getByText('← Back to the portfolio')).toBeInTheDocument()
  })
})
