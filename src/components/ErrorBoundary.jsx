import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-4 text-center text-text">
          <h1 className="font-display text-2xl font-bold text-white">Something went wrong</h1>
          <p className="mt-2 max-w-md text-sm text-text/70">{this.state.error.message}</p>
          <button
            type="button"
            className="mt-6 rounded-xl bg-accent px-6 py-3 font-semibold text-bg"
            onClick={() => window.location.reload()}
          >
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
