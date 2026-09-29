import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders navbar, content, and footer', () => {
    render(<App />)
    expect(screen.getByText('Brand')).toBeInTheDocument()
    expect(
      screen.getByText('Please click the search icon toggle button top right.'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('search overlay is hidden by default', () => {
    render(<App />)
    const wrapper = screen
      .getByRole('textbox', { name: 'Search', hidden: true })
      .closest('[aria-hidden]')
    expect(wrapper).toHaveAttribute('aria-hidden', 'true')
  })

  it('opens search overlay when search icon is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Open search' }))
    const wrapper = screen.getByRole('textbox', { name: 'Search' }).closest('[aria-hidden]')
    expect(wrapper).toHaveAttribute('aria-hidden', 'false')
  })

  it('closes search overlay when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Open search' }))
    await user.click(screen.getByRole('button', { name: 'Close search' }))
    const wrapper = screen
      .getByRole('textbox', { name: 'Search', hidden: true })
      .closest('[aria-hidden]')
    expect(wrapper).toHaveAttribute('aria-hidden', 'true')
  })

  it('closes search overlay on Escape key', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Open search' }))
    await user.keyboard('{Escape}')
    const wrapper = screen
      .getByRole('textbox', { name: 'Search', hidden: true })
      .closest('[aria-hidden]')
    expect(wrapper).toHaveAttribute('aria-hidden', 'true')
  })
})
