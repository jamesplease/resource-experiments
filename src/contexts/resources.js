import createResourceContext from "../react-resources";

const actions = {
  createBook: store => (id, attributes) => {
    store.update("resources.books", {
      [id]: {
        id,
        meta: {
          loading: true
        }
      }
    });

    setTimeout(() => {
      store.update("resources.books", {
        [id]: {
          attributes,
          meta: {
            loading: false
          }
        }
      });
    }, 2000);
  }
};

export default createResourceContext(actions);
