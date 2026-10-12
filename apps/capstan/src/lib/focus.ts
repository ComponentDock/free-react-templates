/**
 * Moves focus to a node this app rendered itself. Written as a helper so the
 * "there is no node" case is one explicit branch rather than an optional chain
 * repeated at every call site.
 */
export function focusNode(node: HTMLElement | null | undefined): void {
  if (node) {
    node.focus()
  }
}
