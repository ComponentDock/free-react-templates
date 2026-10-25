import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { EMPTY_SURVEY, Hero, validateSurvey } from '../components/Hero'
import { SURVEY_PROBLEMS, hero, site } from '../content'

describe('validateSurvey', () => {
  it('needs all three answers and ignores whitespace', () => {
    expect(validateSurvey(EMPTY_SURVEY)).toBe(false)
    expect(validateSurvey({ name: 'Ada', phone: '', problem: 'Roots in the line' })).toBe(false)
    expect(validateSurvey({ name: '   ', phone: '555', problem: 'Roots in the line' })).toBe(false)
    expect(validateSurvey({ name: 'Ada', phone: '555', problem: 'Roots in the line' })).toBe(true)
  })
})

describe('Hero', () => {
  it('states the promise, the rating and the four ticked claims', () => {
    render(<Hero />)

    expect(screen.getByText(hero.eyebrow)).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Fix the pipe. Keep the driveway.')
    expect(heading).toHaveClass('tracking-[-1.5px]')
    expect(heading.querySelector('span')).toHaveClass('text-primary-600')
    expect(screen.getByText(hero.lead)).toHaveClass('text-ink-500')
    expect(screen.getAllByText(site.rating).length).toBeGreaterThan(0)

    hero.promises.forEach((promise) => {
      expect(screen.getByText(promise)).toBeInTheDocument()
    })
    expect(screen.getByRole('list', { name: '' })).toBeTruthy()
  })

  it('offers the survey card with three required controls and every problem option', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 2, name: hero.card.title })).toBeInTheDocument()
    expect(screen.getByLabelText('Your name')).toBeRequired()
    expect(screen.getByLabelText('Phone')).toHaveAttribute('type', 'tel')
    const select = screen.getByLabelText('What is happening?')
    expect(select).toBeRequired()

    SURVEY_PROBLEMS.forEach((problem) => {
      expect(screen.getByRole('option', { name: problem })).toBeInTheDocument()
    })
    expect(screen.getAllByRole('option')).toHaveLength(SURVEY_PROBLEMS.length + 1)
    expect(screen.getByRole('button', { name: hero.card.submit })).toHaveAttribute('type', 'submit')
  })

  it('refuses an incomplete survey with a visible message instead of reloading', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: hero.card.submit }))

    expect(screen.getByRole('alert')).toHaveTextContent('All three fields are needed')
    expect(screen.queryByTestId('survey-sent')).toBeNull()
  })

  it('confirms a complete survey, clears the alert on edit and can be reset', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.type(screen.getByLabelText('Your name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Phone'), '(555) 123-4567')
    await user.selectOptions(screen.getByLabelText('What is happening?'), 'Roots in the line')

    await user.click(screen.getByRole('button', { name: hero.card.submit }))

    const confirmation = screen.getByTestId('survey-sent')
    expect(confirmation).toHaveTextContent('Thanks, Ada.')
    expect(confirmation).toHaveTextContent('(555) 123-4567')

    await user.click(screen.getByRole('button', { name: 'Book another survey' }))

    expect(screen.queryByTestId('survey-sent')).toBeNull()
    expect(screen.getByLabelText('Your name')).toHaveValue('')
  })

  it('clears the invalid alert as soon as the user edits a field', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: hero.card.submit }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Your name'), 'A')

    expect(screen.queryByRole('alert')).toBeNull()
  })
})
