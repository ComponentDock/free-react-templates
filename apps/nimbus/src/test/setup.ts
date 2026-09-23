import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// jsdom doesn't implement scrollIntoView — mock it globally
Element.prototype.scrollIntoView = vi.fn()
