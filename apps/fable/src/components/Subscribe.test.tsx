import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Subscribe } from './Subscribe'
import {
  emailLabel,
  emailPlaceholder,
  subscribeButton,
  subscribeError,
  subscribeHeading,
  subscribeParagraph,
  subscribeSectionLabel,
  subscribeSuccess,
} from '../data'

describe('Subscribe', () => {
  it('renders the heading, paragraph, email input, and orange submit button', () => {
    render(<Subscribe />)
    expect(screen.getByRole('region', { name: subscribeSectionLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: subscribeHeading })).toBeInTheDocument()
    expect(screen.getByText(subscribeParagraph)).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: emailLabel })).toHaveAttribute(
      'placeholder',
      emailPlaceholder,
    )
    expect(screen.getByRole('button', { name: subscribeButton })).toBeInTheDocument()
  })

  it('shows an error and blocks submission for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    await user.type(screen.getByRole('textbox', { name: emailLabel }), 'not-an-email')
    await user.click(screen.getByRole('button', { name: subscribeButton }))

    expect(screen.getByText(subscribeError)).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: emailLabel })).toHaveAttribute(
      'aria-invalid',
      'true',
    )
    expect(screen.queryByText(subscribeSuccess)).not.toBeInTheDocument()
  })

  it('subscribes successfully with a valid email', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    await user.type(screen.getByRole('textbox', { name: emailLabel }), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: subscribeButton }))

    expect(screen.getByText(subscribeSuccess)).toBeInTheDocument()
    expect(screen.queryByText(subscribeError)).not.toBeInTheDocument()
  })
})
