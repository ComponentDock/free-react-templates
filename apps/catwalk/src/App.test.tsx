import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Catwalk — Model Agency Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toBe(
      'Your Career of A Model',
    )
    expect(within(main).getByText('Search A Model')).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'What we do' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'We Are Model Agency' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Popular Model' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'My satisfied customer says' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Latest Fashion Shows' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Case Study' })).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('filters the model grid when a search is submitted', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Patricia Becket' })).toBeInTheDocument()

    await user.selectOptions(screen.getByLabelText('Height'), '5.8')
    await user.click(screen.getByRole('button', { name: 'Search' }))

    expect(screen.getByRole('heading', { name: 'Emily Stewart' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Patricia Becket' })).not.toBeInTheDocument()
  })
})
