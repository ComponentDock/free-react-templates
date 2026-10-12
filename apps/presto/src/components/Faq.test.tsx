import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the centred white title and blurb on the dark band', () => {
    render(<Faq />)
    const section = screen.getByRole('region', { name: 'Frequently asked questions' })
    expect(section).toHaveClass('pt-24', 'md:pb-[140px]')
    expect(screen.getByRole('heading', { level: 2, name: 'Questions we hear most' })).toHaveClass(
      'text-white',
    )
    expect(screen.getByText(/The support team answers within minutes/)).toBeInTheDocument()
  })

  it('renders four questions in two columns, each led by a white Q. glyph', () => {
    render(<Faq />)
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(4)

    const list = items[0]!.parentElement as HTMLElement
    expect(list).toHaveClass('lg:grid-cols-2')

    const questions = screen.getAllByRole('heading', { level: 2 }).map((node) => node.textContent)
    expect(questions).toEqual([
      'Questions we hear most',
      'Why can visitors not reach the server on my own machine?',
      'Which domain name should I register for a new site?',
      'Can my site work without the www. prefix?',
      'Why is my server asking for a password?',
    ])
  })

  it('pairs every question with an answer and a Q. marker', () => {
    render(<Faq />)
    for (const item of screen.getAllByRole('listitem')) {
      const scope = within(item as HTMLElement)
      expect(item.querySelector('span[aria-hidden="true"]')?.textContent).toBe('Q.')
      expect(scope.getByRole('heading', { level: 2 })).toBeInTheDocument()
      expect(scope.getByText(/./, { selector: 'p' }).textContent).toBeTruthy()
    }
  })
})
