import * as React from "react";

const Create = ({
  create = e => e.preventDefault()
}: {
  create: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <section>
      <h1>Crate todo</h1>
      <form action="" onSubmit={create}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
        <label htmlFor="text">Text</label>
        <input type="text" id="text" />
        <label htmlFor="importance">Importance</label>
        <input type="range" min="0" max="5" id="importance" />
        <button type="submit">create</button>
      </form>
    </section>
  );
};

export default Create;
