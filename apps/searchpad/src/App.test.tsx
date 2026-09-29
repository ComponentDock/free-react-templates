import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

function getInput(index: number): HTMLInputElement {
  const inputs = screen.getAllByPlaceholderText('Keyword') as HTMLInputElement[]
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return inputs[index]!
}

describe('Searchpad', () => {
  describe('Page layout', () => {
    it('renders the page with two search inputs', () => {
      render(<App />)
      expect(screen.getAllByPlaceholderText('Keyword')).toHaveLength(2)
    })

    it('has a light blue background', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper.className).toContain('bg-searchpad-bg')
    })

    it('sets the document title', () => {
      render(<App />)
      expect(document.title).toBe('Searchpad — Expandable Search Form')
    })
  })

  describe('First input (round)', () => {
    it('starts collapsed at 60px width', () => {
      render(<App />)
      const input = getInput(0)
      expect(input.className).toContain('w-[60px]')
    })

    it('expands to full width on focus', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = getInput(0)
      await user.click(input)
      expect(input.className).toContain('w-full')
    })

    it('has rounded corners (pill shape)', () => {
      render(<App />)
      const input = getInput(0)
      expect(input.className).toContain('rounded-full')
    })

    it('shows clear button when text is entered', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = getInput(0)
      const clearBtn = screen.getByRole('button', { name: 'Clear search' })
      expect(clearBtn.className).toContain('opacity-0')
      await user.type(input, 'hello')
      expect(clearBtn.className).toContain('opacity-100')
    })

    it('clears text when clear button is clicked', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = getInput(0)
      await user.type(input, 'hello')
      expect(input.value).toBe('hello')
      const clearBtn = screen.getByRole('button', { name: 'Clear search' })
      await user.click(clearBtn)
      expect(input.value).toBe('')
    })

    it('collapses when clicking outside', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = getInput(0)
      await user.click(input)
      expect(input.className).toContain('w-full')
      await user.click(document.body as HTMLElement)
      expect(input.className).toContain('w-[60px]')
    })
  })

  describe('Second input (square)', () => {
    it('starts collapsed at 60px width', () => {
      render(<App />)
      const input = getInput(1)
      expect(input.className).toContain('w-[60px]')
    })

    it('expands to full width on focus', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = getInput(1)
      await user.click(input)
      expect(input.className).toContain('w-full')
    })

    it('has minimal border radius (square shape)', () => {
      render(<App />)
      const input = getInput(1)
      expect(input.className).toContain('rounded-[3px]')
    })
  })

  describe('Form behavior', () => {
    it('has a form element with aria-label', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: 'Search form' })).toBeInTheDocument()
    })

    it('does not have a clear button for the square input', () => {
      render(<App />)
      const buttons = screen.getAllByRole('button', { name: 'Clear search' })
      expect(buttons).toHaveLength(1)
    })

    it('prevents form submission on Enter', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = getInput(0)
      await user.type(input, 'query{Enter}')
      expect(input).toHaveValue('query')
    })

    it('prevents form submit event', () => {
      render(<App />)
      const form = screen.getByRole('form', { name: 'Search form' })
      const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
      const prevented = !form.dispatchEvent(submitEvent)
      expect(prevented).toBe(true)
    })
  })
})
