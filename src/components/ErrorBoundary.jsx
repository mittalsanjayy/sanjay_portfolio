import { Component } from "react";

/** Prevents a blank screen if something unexpected throws while rendering. */
export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Portfolio render error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="fallback">
          <h1>Something went wrong</h1>
          <p>The page failed to display. Try reloading it.</p>
          <button type="button" className="btn btn--primary" onClick={() => window.location.reload()}>
            Reload page
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}
