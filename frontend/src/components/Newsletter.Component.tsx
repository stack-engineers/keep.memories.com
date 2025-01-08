function NewsletterComponent() {
  return (
    <>
      <aside className="newsletter-section-component">
        <div className="__newsletter-wrapper">
          <h1>Subscribe to our newsletter</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            repellat, fuga quos aperiam nisi laboriosam?
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            aria-placeholder="email"
            required
            aria-required
          />
          <button type="button">subscribe</button>
        </div>
      </aside>
    </>
  );
}

export default NewsletterComponent;
