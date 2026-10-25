import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Quiz } from './Quiz'
import { QUESTIONS, QUIZ } from '../content'

function chip(label: string) {
  return screen.getByRole('button', { name: label })
}

function result() {
  return document.querySelector('[data-quiz-result]') as HTMLElement
}

describe('Quiz', () => {
  it('renders three fieldsets with ten chips and a hidden result', () => {
    render(<Quiz />)
    expect(screen.getAllByRole('group')).toHaveLength(3)
    expect(screen.getAllByRole('button')).toHaveLength(
      QUESTIONS.reduce((total, question) => total + question.chips.length, 0),
    )
    expect(result()).toHaveAttribute('hidden')
    expect(screen.getByText(QUIZ.changeHint)).toBeInTheDocument()
  })

  it('keeps the result hidden until all three questions are answered', () => {
    render(<Quiz />)
    fireEvent.click(chip('Scale and spotting'))
    expect(result()).toHaveAttribute('hidden')
    fireEvent.click(chip('City supply'))
    expect(result()).toHaveAttribute('hidden')
    fireEvent.click(chip('1 - 2'))
    expect(result()).not.toHaveAttribute('hidden')
  })

  it('drives the pressed skin from aria-pressed alone', () => {
    render(<Quiz />)
    const scale = chip('Scale and spotting')
    const taste = chip('Taste or smell')
    expect(scale).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(scale)
    expect(scale).toHaveAttribute('aria-pressed', 'true')
    expect(taste).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(taste)
    expect(taste).toHaveAttribute('aria-pressed', 'true')
    expect(scale).toHaveAttribute('aria-pressed', 'false')
  })

  it('recommends a softener for scale', () => {
    render(<Quiz />)
    fireEvent.click(chip('Scale and spotting'))
    fireEvent.click(chip('City supply'))
    fireEvent.click(chip('1 - 2'))

    expect(result()).toHaveTextContent('A water softener')
    expect(screen.getByRole('link', { name: new RegExp(QUIZ.resultCta) })).toHaveAttribute(
      'href',
      '#product-softener',
    )
    expect(result()).toHaveTextContent(QUIZ.finePrint)
  })

  it('re-evaluates on every answer change without re-hiding the card', () => {
    render(<Quiz />)
    fireEvent.click(chip('Scale and spotting'))
    fireEvent.click(chip('City supply'))
    fireEvent.click(chip('1 - 2'))
    expect(result()).toHaveTextContent('A water softener')

    fireEvent.click(chip('Taste or smell'))
    expect(result()).toHaveTextContent('Whole-house filtration')
    expect(result()).not.toHaveAttribute('hidden')

    fireEvent.click(chip('Private well'))
    expect(result()).toHaveTextContent('Whole-house filtration, then reverse osmosis')

    fireEvent.click(chip('Running out of hot water'))
    expect(result()).toHaveTextContent('A tankless water heater')
    expect(screen.getByRole('link', { name: new RegExp(QUIZ.resultCta) })).toHaveAttribute(
      'href',
      '#product-tankless',
    )

    fireEvent.click(chip('Nothing, just curious'))
    expect(result()).toHaveTextContent('A free water test')
    expect(screen.getByRole('link', { name: new RegExp(QUIZ.resultCta) })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('exposes the result as a polite live region', () => {
    render(<Quiz />)
    const status = result()
    expect(status).toHaveAttribute('role', 'status')
    expect(status).toHaveAttribute('aria-live', 'polite')
  })
})
