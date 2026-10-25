import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from '../components/Hero'
import { HERO_CHECKLIST, SURVEY_PROMPTS } from '../data'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('Hero', () => {
  it('renders the eyebrow, the two-sentence headline and the lede', () => {
    render(<Hero />)

    expect(screen.getByText('Fort Worth · TACLA licensed mechanical')).toHaveClass(
      'text-primary-700',
    )
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(
      'Every contractor says twenty-four seven. Ask what happens when they miss it.',
    )
    expect(heading.querySelector('span')).toHaveClass('text-primary-600')
    expect(
      screen.getByText(/A response time with nothing attached to it is marketing/),
    ).toBeVisible()
    expect(heading.parentElement?.parentElement?.parentElement?.parentElement).toHaveClass(
      'bg-ink-50',
    )
  })

  it('shows the sample rating and the four static checklist items', () => {
    render(<Hero />)

    expect(screen.getByText('4.8')).toBeInTheDocument()
    expect(screen.getByText('70+ reviews on Google · sample data')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(HERO_CHECKLIST.length)

    HERO_CHECKLIST.forEach((item) => {
      expect(screen.getByText(item).closest('li')).not.toHaveAttribute('href')
    })
  })

  it('carries the survey card as its own heading level', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 2, name: 'Request a site survey' })).toBeVisible()
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Work email')).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText('What prompted this?')).toHaveValue(SURVEY_PROMPTS[0])
    expect(screen.getAllByRole('option')).toHaveLength(SURVEY_PROMPTS.length)
  })
})

describe('SurveyForm', () => {
  it('blocks an empty submit and marks both fields', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const name = screen.getByLabelText('Your name')
    const email = screen.getByLabelText('Work email')

    await user.click(screen.getByRole('button', { name: 'Request the survey' }))

    expect(screen.getAllByText('This field is required')).toHaveLength(2)
    expect(name).toHaveAttribute('aria-invalid', 'true')
    expect(name).toHaveAttribute('aria-describedby', 'survey-name-error')
    expect(email).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('reports a malformed address and clears the error as it is corrected', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const email = screen.getByLabelText('Work email')

    await user.type(email, 'sam@company')
    await user.click(screen.getByRole('button', { name: 'Request the survey' }))

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    expect(email).toHaveAttribute('aria-describedby', 'survey-email-error')
    expect(email).toHaveClass('field-error')

    await user.type(email, '.com')

    expect(screen.queryByText('Please enter a valid email address')).toBeNull()
    expect(email).not.toHaveAttribute('aria-invalid', 'true')
  })

  it('validates the name on blur as well', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const name = screen.getByLabelText('Your name')

    await user.click(name)
    await user.tab()

    expect(screen.getAllByText('This field is required')).toHaveLength(1)
    expect(name).toHaveClass('field-error')
  })

  it('sends a valid survey, resets the fields and shows the toast', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.type(screen.getByLabelText('Your name'), 'Dana Okonjo')
    await user.type(screen.getByLabelText('Work email'), 'dana@company.com')
    await user.selectOptions(
      screen.getByLabelText('What prompted this?'),
      'Our agreement is up for renewal',
    )
    await user.click(screen.getByRole('button', { name: 'Request the survey' }))

    expect(screen.getByLabelText('Your name')).toHaveValue('')
    expect(screen.getByLabelText('Work email')).toHaveValue('')
    expect(screen.getByLabelText('What prompted this?')).toHaveValue(SURVEY_PROMPTS[0])
    expect(screen.getByRole('status')).toHaveTextContent('Message sent successfully!')
  })

  it('clears the field error as it is corrected', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const name = screen.getByLabelText('Your name')

    await user.click(name)
    await user.tab()
    expect(screen.getAllByText('This field is required')).toHaveLength(1)

    await user.type(name, 'D')

    expect(name).not.toHaveAttribute('aria-invalid', 'true')
    expect(document.getElementById('survey-name-error')).toBeNull()
  })

  it('dismisses the toast after the house 4 s', () => {
    vi.useFakeTimers()
    render(<Hero />)

    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Dana' } })
    fireEvent.change(screen.getByLabelText('Work email'), { target: { value: 'dana@company.com' } })
    fireEvent.submit(screen.getByRole('button', { name: 'Request the survey' }).closest('form')!)

    expect(screen.getByRole('status')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('keeps one toast when the form is submitted twice', () => {
    vi.useFakeTimers()
    render(<Hero />)

    const form = screen.getByRole('button', { name: 'Request the survey' }).closest('form')!

    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Dana' } })
    fireEvent.change(screen.getByLabelText('Work email'), { target: { value: 'dana@company.com' } })
    fireEvent.submit(form)
    fireEvent.submit(form)

    expect(screen.getAllByRole('status')).toHaveLength(1)

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.queryByRole('status')).toBeNull()
  })
})
