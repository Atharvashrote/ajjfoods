import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40 }}>
          <h2 style={{ color: '#b91c1c' }}>Something went wrong loading this page.</h2>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#fff5f5', padding: 20, borderRadius: 8 }}>{String(this.state.error)}</pre>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
