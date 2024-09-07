/**
 * takes a title and a meta tag description to insert them into the page
 * @param title the title to use
 * @param description the meta tag description to use
 */
function useMetaTags( title, description ) {

    document.title = title;

    // Description meta
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || '';

}

export default useMetaTags;