import Resources from "./resources";

const { store } = Resources;

export function createBook(id, attributes) {
  store.update(`resources.books.${id}.meta.loading`, false);

  setTimeout(() => {
    store.update(`resources.books.${id}`, {
      attributes,
      meta: {
        loading: false
      }
    });
  }, 2000);
}

export function createAuthor(id, attributes) {
  store.update(`resources.authors.${id}.meta.loading`, false);

  setTimeout(() => {
    store.update(`resources.authors.${id}`, {
      attributes,
      meta: {
        loading: false
      }
    });
  }, 10000);
}
