# Resource Experiments

This is the testing grounds for a new library I am working on for managing resources in React.

It will be most similar to the Apollo Client, but more generic in that it will support any system of data transport,
not just GraphQL (and the GraphQL experience will have feature parity with Apollo Client's).

### Project Goals

This project is made up of a number of low-level tools. The goals are divided up into section based on the tool.

#### General

* [ ] Reasonable file size (around 10kb)

### Low-Level Store

The low-level storage layer for this project is [React State Context](https://github.com/jamesplease/react-state-context), which
itself is a thin wrapper around React's built-in Context API.

* [ ] Simpler, no-boilerplate Redux-like storage API: store with user-defined "actions" to update it ()
* [ ] Built on Context ([React State Context](https://github.com/jamesplease/react-state-context))

### Normalized Data Store

Normalization is important for large applications that work with a lot of data. [Standard Resource](https://github.com/jamesplease/standard-resource)
provides us with a normalized store.

It is straightforward to write a Standard Resource adapter for React State Context (there is one in the source files of this project).

* [ ] Normalized
* [ ] Powerful but succinct API for retrieving data from the store

### HTTP Requests

Although the library will be agnostic to how you get data into the store, HTTP requests will be given the most focus at first.
This is because HTTP requests are the primary way for apps to send and receive data.

In this library, the API will be built around an idea called `fetchers`.

The prototype versions of this library already exist as Fetch Dedupe and React Request, but the fetcher API will be
a superset of functionality compared to those libraries.

* [ ] Fetchers return Promises
* [ ] Because they return Promises, they hook into React Suspense seamlessly
* [ ] API for serial Promise composition (so that each fetcher's state in the chain can be tracked individually)
* [ ] Request deduplication
* [ ] Request caching
* [ ] An API to map a fetcher to a stream/observable, which will push fetcher state updates to the context value automatically
* [ ] Adapters to map structured data formats, such as GraphQL or JSON API, into a format suitable for Standard Resource
* [ ] `<Fetcher/>` component to map a fetcher to a Component, a la Apollo's `<Query/>` or React Request's `<Fetch/>`

### One day...

* [ ] Adapter to convert your Redux project into this project easily
* [ ] Map GraphQL schemas to Standard Resource schemas
* [ ] Map JSONAPI JSON Schemas to Standard Resource schemas